import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connect from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { signJwtAccessToken } from "@/utils/helpers";
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        await connect();

        try {
          const signedUser = await User.findOne({
            username: credentials.username,
          });

          if (signedUser) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              signedUser.password
            );

            if (isPasswordCorrect) {
              const accessToken = signJwtAccessToken({
                payload: signedUser.username,
              });
              const user = {
                ...signedUser,
                name: signedUser.username,
              };
              console.log({ user, accessToken });
              return { user, accessToken };
            } else {
              throw new Error("Wrong Credentials!");
            }
          } else {
            throw new Error("User not found!");
          }
        } catch (err) {
          console.log(err);
          throw new Error(err);
        }
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
    newUser: "/register",
  },
  callbacks: {
    async jwt({ token, user }) {
      console.log(user);
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token;
      return session.user;
    },
  },
});

export { handler as GET, handler as POST };
