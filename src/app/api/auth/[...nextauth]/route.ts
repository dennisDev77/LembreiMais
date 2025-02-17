import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization:{params:{scope:'read:user'}}
    }),
  ],

 
  // callbacks:{
  //   async session({session, token}){
  //     try{
  //      return{
  //       ...session,
  //       id:token.sub
  //      }
  //     }catch{
  //       return{
  //         ...session,
  //         id:null
  //       }
  //     }
  //   },

  //   async signIn({user, account, token}){
  //     const {email}=user

  //     try{
  //       return true
  //     }catch(err){
  //       console.log(err)
  //       return false
  //     }
  //   },
  // }
 
  // //Our secret
  // secret:process.env.NEXTAUTH_SECRET
  
  }
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };