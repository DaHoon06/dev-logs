import { DahoonIntroduce } from '@components/profile/DahoonIntroduce';
import withGetServerSideProps from '@utils/withGetServerSideProps';
import { GetServerSideProps, NextPage } from 'next';
import { ReactElement } from 'react';

const Home: NextPage = (): ReactElement => {

  return (
    <div test-id="test">
      <DahoonIntroduce />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = withGetServerSideProps(
  async (ctx) => {
    const { status = 200 } = ctx.req?.query
    const response = await fetch(`/api/hello?status=${status}`)

    const result = await response.json()

    return {
      props: {
        result,
      },
    }
  },
)
