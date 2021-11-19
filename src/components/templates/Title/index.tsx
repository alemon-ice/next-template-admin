import React from 'react';

import { ITitleAndSubtitle } from 'interfaces/shared';

interface IProps extends ITitleAndSubtitle {}

const Title: React.FC<IProps> = (props) => {
  const { title, subtitle } = props;

  return (
    <div>
      <h1 className={``}>{title}</h1>
      <h2 className={``}>{subtitle}</h2>
    </div>
  );
}

export default Title;