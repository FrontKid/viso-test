import { FC, ReactNode } from 'react';

type TLayoutProps = {
  content?: ReactNode;
};

const Layout: FC<TLayoutProps> = props => {
  return <main>{props.content}</main>;
};

export { Layout };
