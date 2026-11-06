export const UserRole = {
  ADMIN: "ADMIN",
  RESTAURANT: "RESTAURANT",
} as const;

export type UserRole = (typeof UserRole)[keyof typeof UserRole];

export type SessionUser = {
  id: string;
  email: string;
  name: string;
  role: UserRole;
};
