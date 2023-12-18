import { getCurrentTime } from '@/utils';
import { useEffect, useState } from 'react';

function Time() {
  const [time, setTime] = useState('00:00');

  useEffect(() => {
    setTime(getCurrentTime());
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>{time}</div>
  );
}

export default Time;
