import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Signin } from "@/services/auth/services";

const authOption: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXT_AUTH_SECRET,

  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const user: any = await Signin(email);

        if (user) {
          const confirmPassword = await bcrypt.compare(password, user.password);
          if (confirmPassword) {
            return user;
          } else {
            return null;
          }
        } else {
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, account, user }: any) {
      if (account?.provider === "credentials") {
        token.id = user.id;
        token.fullname = user.fullname;
        token.username = user.username;
        token.email = user.email;
        token.phone = user.phone;
        token.role = user.role;
        token.image = user.image;
      }

      return token;
    },

    async session({ session, token }: any) {
      if ("id" in token) {
        session.user.id = token.id;
      }

      if ("fullname" in token) {
        session.user.fullname = token.fullname;
      }

      if ("username" in token) {
        session.user.username = token.username;
      }

      if ("email" in token) {
        session.user.email = token.email;
      }

      if ("phone" in token) {
        session.user.phone = token.phone;
      }

      if ("role" in token) {
        session.user.role = token.phone;
      }

      if ("image" in token) {
        session.user.image = token.image;
      }

      const accessToken = jwt.sign(token, process.env.NEXTAUTH_SECRET || "", {
        algorithm: "HS256",
      });

      session.token = accessToken;

      return session;
    },
  },

  pages: {
    signIn: "/auth/signin",
  },
};

export default NextAuth(authOption);
