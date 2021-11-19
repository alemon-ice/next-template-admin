import React from 'react';

import { ITitleAndSubtitle } from 'interfaces/shared'
import { Sidebar, Header, Content } from 'components/templates'

interface IProps extends ITitleAndSubtitle {}

const Layout: React.FC<IProps> = (props) => {
  const { title, subtitle, children } = props
  return (
    <div>
      <Sidebar />
      <Header title={title} subtitle={subtitle} />

      {children ? <Content>{children}</Content> : null}
    </div>
  );
}

export default Layout;