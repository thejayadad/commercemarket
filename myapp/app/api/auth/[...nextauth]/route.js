import NextAuth, {getServerSession} from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import clientPromise from '@/lib/clientPromise';
import { MongoDBAdapter } from '@auth/mongodb-adapter';


const adminEmails = ['thejaydad@gmail.com'];


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

  export async function isAdminRequest(req,res) {
    const session = await getServerSession(req,res  );
    if (!adminEmails.includes(session?.user?.email)) {
      res.status(401);
      res.end();
      throw 'not an admin';
    }
  }