import React from 'react';

type NavigationPropTypes = {
  onClickHandler: (value: string) => void;
  activeType: string;
  tags: string[];
};

type NavigationItemPropTypes = {
  name: string;
  activeType: string;
  onClickHandler: (value: string) => void;
};

const NavigationItem: React.FC<NavigationItemPropTypes> = ({ name, activeType, onClickHandler }) => {
  const isActiveType = activeType === name;
  return (
    <li
      style={{
        fontFamily: 'Nunito',
        color: isActiveType ? '#FFFFFF' : '#39414B',
        backgroundColor: isActiveType ? '#5FBF77' : 'transparent',
        letterSpacing: '-0.1px',
      }}
      onClick={() => onClickHandler(name)}
      className="p-[12px] w-[240px] text-[18px] font-extrabold leading-[18px] cursor-pointer rounded-[12px]"
    >
      {name}
    </li>
  );
};

const Navigation: React.FC<NavigationPropTypes> = ({ activeType, onClickHandler, tags }) => {
  const allTags = ['Все темы', ...tags];
  return (
    <nav className="w-[264px] h-full rounded-[18px] p-[11px] h-full border border-solid border-border">
      <ul>
        {allTags.map((el) => (
          <NavigationItem activeType={activeType} key={el} onClickHandler={() => onClickHandler(el)} name={el} />
        ))}
      </ul>
    </nav>
  );
};

export { Navigation };
