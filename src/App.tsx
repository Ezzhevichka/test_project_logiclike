import { useEffect, useState } from 'react';
import { type EntityType, getResponse } from './api';
import { Navigation } from './components/Navigation';
import { Container } from './components/Container';

type InitialStateType = { data: EntityType[]; availableTags: string[] };

const App = () => {
  const [initialData, setInitialData] = useState<InitialStateType>({ data: [], availableTags: [] });
  const [data, setData] = useState<EntityType[]>([]);
  const [type, setType] = useState('Все темы');

  const onClickHandler = (value: string) => {
    if (type === value) return;
    return setType(value);
  };

  useEffect(() => {
    const initializeResponse = async () => {
      try {
        const response = await getResponse();
        setInitialData(response);
      } catch (error) {
        alert(error);
      }
    };
    initializeResponse();
  }, []);

  useEffect(() => {
    const isAllItems = initialData.data.filter((el) => el.tags.includes(type)).length === 0;
    isAllItems ? setData(initialData.data) : setData(initialData.data.filter((el) => el.tags.includes(type)));
  }, [initialData.data, type]);

  return (
    <div className="flex flex-row gap-[24px] p-[24px]">
      <Navigation
        activeType={type}
        tags={initialData.availableTags}
        onClickHandler={(value) => onClickHandler(value)}
      />
      <Container data={data} />
    </div>
  );
};

export default App;
