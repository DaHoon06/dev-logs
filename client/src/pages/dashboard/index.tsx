import { ReactElement, useEffect } from 'react';
import { NextPage } from 'next';
import { GitEventLists } from '@components/github/GitEventLists';
import { IssueLists } from '@components/github/IssueLists';
import { RepositoryLists } from '@components/github/RepositoryLists';
import { Social } from '@interfaces/Social';
import { SignIn } from '@apis/user';
import { useRouter } from 'next/router';

const Dashboard: NextPage = ({ data }: Social.Github): ReactElement => {
  const router = useRouter();
  useEffect(() => {
    sessionStorage.setItem('user', JSON.stringify(data));
    router.push('/');
  }, [data]);
  return (
    <div>
      <section>
        <GitEventLists gitEventUrl={data.events_url} />
        <IssueLists />
      </section>
      <section>
        <RepositoryLists />
      </section>
    </div>
  );
};
// TODO 넘겨 받은 정보 session 에 저장하고 다른 페이지로 리다이렉트
Dashboard.getInitialProps = async ({ query }) => {
  const { code } = query as { code: string };
  try {
    const data = await SignIn(code);
    return { data };
  } catch (e) {
    console.log(e);
    return { data: {} };
  }
};

export default Dashboard;
