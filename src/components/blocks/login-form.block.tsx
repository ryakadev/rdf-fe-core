/* eslint-disable no-console */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";

const formSchema = z.object({
	email: z.string().email({
		message: "Please enter a valid email address",
	}),
	password: z.string().min(6, {
		message: "Password must be at least 6 characters",
	}),
});

interface LoginFormProps {
	className?: string;

	content?: {
		title?: string;
		description?: string;
		emailLabel?: string;
		emailPlaceholder?: string;
		passwordLabel?: string;
		passwordPlaceholder?: string;
		submitButtonText?: React.ReactNode;
		termsText?: React.ReactNode;
	};

	apiUrl?: string;
	redirectAfterSuccess?: string;
}

export function LoginForm({ className, content, apiUrl, redirectAfterSuccess }: LoginFormProps) {
	const router = useRouter();
	const [error, setError] = useState<string | null>(null);
	const [isPending, setIsPending] = useState<boolean>(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "admin@example.com",
			password: "password123",
			// email: "user@example.com",
			// password: "password123",
		},
	});

	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		setError(null);
		setIsPending(true);

		try {
			if (!apiUrl) {
				throw new Error("API URL is not defined.");
			}

			const res = await fetch(apiUrl, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			if (!res.ok) throw new Error("Login gagal, coba lagi.");

			router.push(redirectAfterSuccess as string);
		} catch (error) {
			console.error(error);
			setError("Login gagal, coba lagi.");
		} finally {
			setIsPending(false);
		}
	};

	return (
		<div className={cn("flex flex-col gap-6", className)}>
			<Card>
				<CardHeader className="text-center">
					<CardTitle className="text-xl">{content?.title || "Halo, Selamat Datang"}</CardTitle>
					<CardDescription>{content?.description || "Silakan masuk untuk melanjutkan"}</CardDescription>
				</CardHeader>
				<CardContent>
					<FormProvider {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="space-y-4"
						>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>{content?.emailLabel || "Email"}</FormLabel>
										<FormControl>
											<Input
												{...field}
												placeholder={content?.emailPlaceholder || "m@example.com"}
												disabled={isPending}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel>{content?.passwordLabel || "Password"}</FormLabel>
										<FormControl>
											<Input
												{...field}
												type="password"
												placeholder={content?.passwordPlaceholder || "******"}
												disabled={isPending}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							{error && <div className="text-destructive text-sm font-medium">{error}</div>}
							<Button
								type="submit"
								className="w-full"
								disabled={isPending || form.formState.isSubmitting || !form.formState.isValid}
								isLoading={isPending}
							>
								{content?.submitButtonText || "Login"}
							</Button>
						</form>
					</FormProvider>
				</CardContent>
			</Card>
			<div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
				{content?.termsText || "By logging in, you agree to our Terms of Service and Privacy Policy"}
			</div>
		</div>
	);
}
