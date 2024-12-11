import NextAuth from 'next-auth';

export const { handler, authOptions } = NextAuth({
  providers: [
  ]
});

export { handler as GET, handler as POST };
