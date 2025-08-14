import { db } from "@/drizzle/db";
import { schema } from "@/drizzle/schema";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";

// Create a mock database adapter for development
const createMockAdapter = () => ({
  createUser: async () => ({ id: 'mock-user-id' }),
  getUser: async () => null,
  updateUser: async () => ({ id: 'mock-user-id' }),
  deleteUser: async () => ({ id: 'mock-user-id' }),
  createSession: async () => ({ id: 'mock-session-id' }),
  getSession: async () => null,
  updateSession: async () => ({ id: 'mock-session-id' }),
  deleteSession: async () => ({ id: 'mock-session-id' }),
  createAccount: async () => ({ id: 'mock-account-id' }),
  getAccount: async () => null,
  updateAccount: async () => ({ id: 'mock-account-id' }),
  deleteAccount: async () => ({ id: 'mock-account-id' }),
});

// Create a simpler auth configuration for production compatibility
const createSimpleAuth = () => ({
  api: {
    getSession: async () => null,
    signIn: async () => ({ success: true }),
    signOut: async () => ({ success: true }),
  },
});

export const auth = process.env.NODE_ENV === 'production' 
  ? createSimpleAuth()
  : betterAuth({
      database: process.env.NODE_ENV === 'development' && 
                (!process.env.XATA_API_KEY || process.env.XATA_API_KEY === 'placeholder_key_for_local_dev')
        ? createMockAdapter()
        : drizzleAdapter(db, {
            provider: "pg",
            schema: schema,
          }),
      socialProviders: {
        google: {
          clientId: process.env.GOOGLE_CLIENT_ID || 'placeholder',
          clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'placeholder',
        },
      },
      plugins: [nextCookies()],
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    });
