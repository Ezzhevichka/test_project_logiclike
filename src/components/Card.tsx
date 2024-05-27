import React from 'react';

type CardPropTypes = {
  name: string;
  image: string;
  bg: string;
};

const Card: React.FC<CardPropTypes> = ({ name, image, bg }) => {
  return (
    <div
      style={{
        boxShadow: '0px 10px 13px -4px #23235F30',
      }}
      className="flex w-full h-[210px] rounded-[18px] flex-col"
    >
      <div className="flex h-[162px] items-center justify-center w-full rounded-t-[18px]" style={{ backgroundColor: bg }}>
        <img className="w-[144px] h-[144px]" alt={name} title={name} src={image} />
      </div>
      <p
        className="pt-[12px] pr-[18px] pb-[18px] pl-[18px] text-[18px] font-extrabold text-fontPrimary leading-[18px]"
        style={{ fontFamily: 'Nunito' }}
      >
        {name}
      </p>
    </div>
  );
};

export default Card;
