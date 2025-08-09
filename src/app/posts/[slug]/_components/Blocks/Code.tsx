import React, { ComponentProps } from 'react';

import { Code as _Code } from 'react-notion-x/build/third-party/code';
import './Code.css';

type Props = ComponentProps<typeof _Code>;

function Code(props: Props) {
  return <_Code {...props} />;
}

export default Code;
