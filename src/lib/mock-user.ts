import { UserCredentials, UserRole } from "@/types/auth.type";
import bcrypt from "bcryptjs";

// This would typically come from your database
export const USERS: UserCredentials[] = [
	{
		id: "1",
		name: "Admin User",
		email: "admin@example.com",
		password: bcrypt.hashSync("password123", 10), // In a real app, this would be hashed
		role: UserRole.ADMIN,
	},
	{
		id: "2",
		name: "Regular User",
		email: "user@example.com",
		password: bcrypt.hashSync("password123", 10), // In a real app, this would be hashed
		role: UserRole.USER,
	},
	{
		id: "3",
		name: "Moderator User",
		email: "mod@example.com",
		password: bcrypt.hashSync("password123", 10), // In a real app, this would be hashed
		role: UserRole.MODERATOR,
	},
];
