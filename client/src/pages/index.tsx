import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <div>
      {session?.user ? '로그인 되어있다.' : '로그인 필요'}
      <Link href={'/dashboard'}>TEST</Link>
    </div>
  );
};

export default Home;
