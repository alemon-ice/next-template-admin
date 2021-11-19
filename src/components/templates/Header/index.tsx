import React from 'react';

import { ITitleAndSubtitle } from 'interfaces/shared'
import { Title } from 'components/templates'

interface IProps extends ITitleAndSubtitle {}

const Header: React.FC<IProps> = (props) => {
  return (
    <div>
      <Title {...props} />
    </div>
  );
}

export default Header;