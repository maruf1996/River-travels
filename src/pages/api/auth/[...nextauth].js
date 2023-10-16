import { AuthOptions } from "@/components/NextAuth/AuthOption";
import NextAuth from "next-auth";

const handler = NextAuth(AuthOptions);

export default handler;
