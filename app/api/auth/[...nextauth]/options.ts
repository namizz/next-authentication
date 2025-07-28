import GoogleProvider from "next-auth/providers/google";

console.log("aldhljdas");
console.log("GOOGLE_ID:", process.env.GOOGLE_ID);
console.log("GOOGLE_SECRET:", process.env.GOOGLE_SECRET);
export const options = {
  providers: [
    GoogleProvider({
      profile(profile) {
        console.log("Profile Google: ", profile);

        return {
          ...profile,
          id: profile.sub,
          role: "user",
        };
      },
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_Secret,
    }),
  ],
  // callbacks: {
  //   async jwt({ token, user }) {
  //     if (user) token.role = user.role;
  //     return token;
  //   },
  //   async session({ session, token }) {
  //     if (session?.user) session.user.role = token.role;
  //     return session;
  //   },
  // },
};
