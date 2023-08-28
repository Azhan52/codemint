import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import TwitterProvider from "next-auth/providers/twitter";
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }),
      TwitterProvider({
        clientId: process.env.TWITTER_CLIENT_ID,
        clientSecret: process.env.TWITTER_CLIENT_SECRET
      }),
    ],
  // callbacks: {
  //    async signIn(user, account, profile) {
  //     const { db } = await connectDB();

  //     // Example: Store user data in MongoDB upon sign-in
  //     await db.collection('users').insertOne({
  //       email: user.email,
  //       name: user.name,
  //       // ... other user data you want to store
  //       img : user.image
  //     });

  //     return true;
  //   },
  //   async signOut(user, account) {

  //     return true; // Returning true allows the sign-out to proceed
  //   },
  //   // ... other callback functions
  // },

secret: process.env.JWT_SECRET
});








   