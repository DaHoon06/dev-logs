import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { DahoonIntroduce } from '@components/profile/DahoonIntroduce';

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <div>
      <DahoonIntroduce />
    </div>
  );
};

export default Home;
