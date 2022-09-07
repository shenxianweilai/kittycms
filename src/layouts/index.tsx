import { ProLayout } from '@ant-design/pro-layout';
import React, { ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

export default (props: IProps) => {
  return <>{props.children}</>;
};
