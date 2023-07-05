import { CardUi } from '@components/ui/card/CardUi';
import { useEffect, useState } from 'react';
import axios from 'axios';

/*
TODO: https://api.github.com/repos/DaHoon06/forYourRecipe/issues
  와 같이 repos type에 owner / repository / issues로 불러와야함
 */

export const IssueLists = () => {
  const [issueList, setIssueList] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    try {
      const { data } = await axios.get(
        'https://api.github.com/repos/DaHoon06/forYourRecipe/issues',
      );
      setIssueList(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <CardUi>
      {issueList.map((issue) => {
        return (
          <div key={issue.id}>
            <p>{issue.title}</p>
          </div>
        );
      })}
    </CardUi>
  );
};
