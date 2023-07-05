import { CardUi } from '@components/ui/card/CardUi';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Props {
  repoUrl: string;
}

export const RepositoryLists = (props: Props) => {
  const [repoList, setRepoList] = useState([]);
  const { repoUrl } = props;

  useEffect(() => {
    load();
  }, [repoUrl]);

  const load = async () => {
    try {
      if (repoUrl) {
        const { data } = await axios.get(repoUrl);
        setRepoList(data);
      }
    } catch (e) {
      throw new Error('401 UnAuthorization');
    }
  };
  return (
    <CardUi>
      {repoList.length === 0 && <p>Repository List Empty!!!</p>}
      {repoList.map((repository) => {
        return <div key={repository.id}>{repository.name}</div>;
      })}
    </CardUi>
  );
};
