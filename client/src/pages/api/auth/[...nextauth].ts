import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/Credentials';

export default NextAuth({
  providers: [
    // CredentialsProvider({
    //   name: 'Credentials',
    //   credentials: {
    //     id: {
    //       label: 'ID',
    //       type: 'text',
    //       placeholder: 'ID',
    //     },
    //     password: {
    //       label: 'PW',
    //       type: 'password',
    //       placeholder: 'PW',
    //     },
    //   },
    //   async authorize(credentials, req) {
    //     if (!credentials) throw new Error('정보를 다시 확인해주세요.');
    //     const { id, password } = credentials;
    //     return credentials;
    //   },
    // }),
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID_OAUTH,
      clientSecret: process.env.NEXT_PUBLIC_SECRET_KEY_OAUTH,
    }),
  ],
  session: { strategy: 'jwt' },
  callbacks: {
    async signIn({ account, profile, email, credentials, user }) {
      return true;
    },
    async jwt({ token, account, profile }) {
      if (account) {
        token.accessToken = account.access_token;
        token.id = profile.id;
      }

      if (profile) {
        token.profile = profile;
      }
      return token;
    },
    async session({ session, token, user }) {
      session.profile = token.profile;
      session.accessToken = token.accessToken;
      session.user.id = token.id;
      return session;
    },
  },
  secret: process.env.NEXT_PUBLIC_SECRET_KEY_OAUTH,
});
