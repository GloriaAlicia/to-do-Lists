import { useState, useEffect, useContext } from 'react';
import { AllLists } from '../context';

export const useStatus = (filterLists, find, filter) => {
  const { lists } = useContext(AllLists);
  const [status, setStatus] = useState([]);

  useEffect(() => {
    if (lists) {
      const filterStatus = filterLists.filter((elem) => elem[find] === filter);
      setStatus(filterStatus);
    }
  }, [lists]);

  return {
    status,
  };
};
