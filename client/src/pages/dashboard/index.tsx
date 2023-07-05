import { ReactElement } from 'react';
import { NextPage } from 'next';
import { GitEventLists } from '@components/github/GitEventLists';
import { IssueLists } from '@components/github/IssueLists';
import { RepositoryLists } from '@components/github/RepositoryLists';
import { useSession } from 'next-auth/react';

const Dashboard: NextPage = (): ReactElement => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div>
      <div>
        <GitEventLists gitEventUrl={session?.profile.events_url} />
        <IssueLists />
      </div>
      <div>
        <RepositoryLists repoUrl={session?.profile.repos_url} />
      </div>
    </div>
  );
};

export default Dashboard;
