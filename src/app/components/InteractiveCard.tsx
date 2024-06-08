"use client";

import React from "react";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import Image, { StaticImageData } from "next/image";

type Drink = {
  title: string;
  description: string;
  imgSrc: StaticImageData;
  onClick: () => void;
};

const InteractiveCard: React.FC<Drink> = ({
  title,
  description,
  imgSrc,
  onClick,
}) => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<Image style={{ height: 140 }} alt={title} src={imgSrc} />}
      onClick={onClick}
    >
      <Meta title={title} description={description} />
    </Card>
  );
};

export default InteractiveCard;
