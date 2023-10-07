import NextAuth, {getServerSession} from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import {MongoDBAdapter} from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";




const handler = NextAuth({
    secret: process.env.SECRET,
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_ID,
          clientSecret: process.env.GOOGLE_SECRET
        }),
      ],
      adapter: MongoDBAdapter(clientPromise),
      callbacks: {
        session: ({session,token,user}) => {
          if (adminEmails.includes(session?.user?.email)) {
            return session;
          } else {
            return false;
          }
        },
      },
  })
  
  export { handler as GET, handler as POST }