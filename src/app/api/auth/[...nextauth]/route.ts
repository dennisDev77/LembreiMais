import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization:{params:{scope:'read:user, user:email'}}
    }),
  ],

 
   callbacks:{
     async session({session, token}){
     
        return{
         ...session,
         id: token.sub || token.email || token.name || session.user?.name || null,
        }
     },

     async signIn({user}){
       const {email}=user

      //Permita login mesmo sem email
      if(!user.email && !user.name) return false //Verifica se usuario tem email ou nome
      return true
     }
   },
 
  //Our secret
secret:process.env.NEXTAUTH_SECRET,
  
  }
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };