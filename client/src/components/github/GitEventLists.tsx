import { CardUi } from '@components/ui/card/CardUi';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Props {
  gitEventUrl: string;
}

export const GitEventLists = ({ gitEventUrl = '' }: Props) => {
  const [eventData, setEventDate] = useState([]);

  useEffect(() => {
    load();
  }, [gitEventUrl]);

  const load = async () => {
    try {
      const url = gitEventUrl.split('{')[0];
      if (url) {
        const { data } = await axios.get(url);
        setEventDate(data);
      }
    } catch (e) {
      throw new Error('401 UnAuthorization');
    }
  };

  return (
    <CardUi>
      {eventData.length === 0 && <p>Event List Empty!!!</p>}
      {eventData.map((event) => {
        return <div key={event.id}>{event.repo.name}</div>;
      })}
    </CardUi>
  );
};
