import React from 'react';

// import { Container } from './styles';

const Content: React.FC = (props) => {
  const { children } = props;
  return (
    <div className={``}>{children}</div>
  );
}

export default Content;