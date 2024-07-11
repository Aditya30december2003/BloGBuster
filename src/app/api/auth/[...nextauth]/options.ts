import { AuthOptions, getServerSession } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from './connect'
import { Adapter } from "next-auth/adapters";
export const authOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,
    // debug: process.env.NODE_ENV !== 'production', // Enable debug mode in development
    // callbacks: {
    //     async signIn({ user, account, profile, email, credentials }) {
    //         console.log('Attempting to sign in user:', user);
    //         console.log('Account details:', account);
    //         try {
    //             // Your sign in logic here
    //             return true; // or false if sign in should not proceed
    //         } catch (error) {
    //             console.error('Error in signIn callback:', error);
    //             return false;
    //         }
    //     },
    // },
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
    ],
}

export const getAuthSession = ()=>getServerSession(authOptions) 