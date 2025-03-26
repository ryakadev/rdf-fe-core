export enum UserRole {
	USER = "USER",
	ADMIN = "ADMIN",
	MODERATOR = "MODERATOR",
	GUEST = "GUEST",
}

export interface User {
	id: string;
	name: string | null;
	email: string | null;
	image?: string | null;
	role: UserRole;
}

export interface UserCredentials extends User {
	password: string;
}

export interface Session {
	user: User;
	expires: string;
}
