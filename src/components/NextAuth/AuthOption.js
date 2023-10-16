import { jwtHelpers } from "@/Helpers/jwtHelpers";
import CredentialsProvider from "next-auth/providers/credentials";
import { getNewAccessToken } from "./getNewAccessToken";

export const AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      id: "river-travels",
      name: "Credentials",
      type: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Your email.....",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // console.log(credentials);
        try {
          const res = await fetch(`http://localhost:5000/api/v1/auth/signin`, {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          });
          const { token } = await res.json();
          const verifiedToken = jwtHelpers.verifyToken(
            token,
            process.env.JWT_SECRET
          );
          //   console.log(verifiedToken, "auth option");
          if (res.ok && token) {
            return {
              token,
              ...verifiedToken,
            };
          }
        } catch (error) {
          console.log(error);
          throw new Error(error.message);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      console.log(token, "token auth option");
      //   console.log(user, "user auth option");
      return {
        ...token,
        ...user,
      };
    },
    async session({ session, token }) {
      //   console.log(session, "session auth option");
      console.log(token?.token, "token auth option inside session");
      const verifiedToken = jwtHelpers.verifyToken(
        token?.token,
        process.env.JWT_SECRET
      );
      //   console.log(verifiedToken);
      if (!verifiedToken) {
        console.log("token expired so new token generated");
        const data = await getNewAccessToken(token?.token);
        // console.log(data);
        token.token = data?.refreshToken;
      }
      return {
        ...session,
        ...token,
      };
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signIn",
    error: "/",
  },
};
