import NextAuth from 'next-auth'
import prisma from 'lib/prisma'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import CredentialsProvider from 'next-auth/providers/credentials'
/*
import GoogleProvider from 'next-auth/providers/google'
import nameGenerator from 'project-name-generator'
import GithubProvider from 'next-auth/providers/github'
import FacebookProvider from 'next-auth/providers/facebook'
*/

import bcrypt from 'bcrypt'
let userAccount = null;

const confirmPasswordHash = (plainPassword: any, hashedPassword: any) => {
  return new Promise(resolve => {
      bcrypt.compare(plainPassword, hashedPassword, function(err, res) {
          resolve(res);
      });
  })
}

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/configuration/providers
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      async authorize(credentials, req) {
        // executar sua lógica de login
        // descubra o usuário do banco de dados
        const user = await prisma.user.findFirst({
          where: {
            //@ts-ignore
            email: credentials.email
          }
        })
        
        if (user !== null) {
          //@ts-ignore
          const res = await confirmPasswordHash(credentials.password, user.password)
          if (res === true) {
            userAccount = {
              id: user.id,
              name: user.firstName + ' ' + user.lastName,
              email: user.email,
              image: user.image,
              isActive: user.isActive
            }

            return userAccount
          } else {
            console.log("Hash not matched logging in")
            return null
          }
        } else {
          return null
        }
      }
    }),
    /*
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    })
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      // https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps
      // @ts-ignore
      scope: 'read:user'
    }) 
    */
  ],
  // Database optional. MySQL, Maria DB, Postgres and MongoDB are supported.
  // https://next-auth.js.org/configuration/databases
  //
  // Notes:
  // * You must install an appropriate node_module for your database
  // * The Email provider requires a database (OAuth providers do not)
  // database: process.env.DATABASE_URL,

  // The secret should be set to a reasonably long random string.
  // It is used to sign cookies and to sign and encrypt JSON Web Tokens, unless
  // a separate secret is defined explicitly for encrypting the JWT.
  secret: process.env.SECRET,

  session: {
    // Use JSON Web Tokens for session instead of database sessions.
    // This option can be used with or without a database for users/accounts.
    // Note: `strategy` should be set to 'jwt' if no database is used.
    strategy: 'jwt',

    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 5 * 60, // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    // updateAge: 24 * 60 * 60, // 24 hours
  },

  // JSON Web tokens are only used for sessions if the `strategy: 'jwt'` session
  // option is set - or by default if no database is specified.
  // https://next-auth.js.org/configuration/options#jwt
  jwt: {
    // A secret to use for key generation (you should set this explicitly)
    secret: process.env.SECRET
    // Set to true to use encryption (default: false)
    // encryption: true,
    // You can define your own encode/decode functions for signing and encryption
    // if you want to override the default behaviour.
    // encode: async ({ secret, token, maxAge }) => {},
    // decode: async ({ secret, token, maxAge }) => {},
  },
  // You can define custom pages to override the built-in ones. These will be regular Next.js pages
  // so ensure that they are placed outside of the '/api' folder, e.g. signIn: '/auth/mycustom-signin'
  // The routes shown here are the default URLs that will be used when a custom
  // pages is not specified for that route.
  // https://next-auth.js.org/configuration/pages
  pages: {
    signIn: '/auth/signin' // Displays signin buttons
    // signOut: '/auth/signout', // Displays form with sign out button
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },

  // Callbacks are asynchronous functions you can use to control what happens
  // when an action is performed.
  // https://next-auth.js.org/configuration/callbacks
  callbacks: {
    //@ts-ignore
    async signIn({ user }) {
      if (user !== undefined) {
        //@ts-ignore
        if (user.isActive === '1') {
          return user
        }
      }
      
      return false
    },
    //async redirect({ url, baseUrl }) { return baseUrl },
    async session({ session, token, user }) {
      //@ts-ignore
        session.user.id = token.sub

        return session;
    },
    async jwt({ token, user, isNewUser }) {
      if(user) {
        token.id = user.id
      }

      return token
    }
  },

  // Events are useful for logging
  // https://next-auth.js.org/configuration/events
  events: {},

  // Enable debug messages in the console if you are having problems
  debug: false
})