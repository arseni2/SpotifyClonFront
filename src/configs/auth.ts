import NextAuth, {type AuthOptions} from "next-auth"
import GithubProvider from "next-auth/providers/github"
//import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: AuthOptions = {
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.PRIVATE_KEY,
        }),
    ],
    // pages: {
    //     signIn: '/signin',
    // },
}
export default NextAuth(authOptions)