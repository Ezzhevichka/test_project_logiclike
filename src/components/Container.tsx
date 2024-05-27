import React from 'react';
import Card from './Card';
import { EntityType } from '../api';

type ContainerPropTypes = {
  data: EntityType[];
};

const Container: React.FC<ContainerPropTypes> = ({ data }) => {
  return (
    <ul
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(max(18rem, calc((100% - 3rem) / 3)), 1fr))',
        gap: '18px',
        width: '100%',
      }}
    >
      {data.map((el) => (
        <li key={el.id}>
          <Card name={el.name} image={el.image} bg={el.bgColor} />
        </li>
      ))}
    </ul>
  );
};

export { Container };
