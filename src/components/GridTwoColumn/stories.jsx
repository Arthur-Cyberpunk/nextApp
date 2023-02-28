import { GridTwoColum } from '.';

import mock from './mock';

export default {
  title: 'GridTwoColum',
  component: GridTwoColum,
  args: {
    title: 'Grid two columns',
    args: mock,
    srcImg: 'assets/images/javascript.svg',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColum {...args} />
    </div>
  );
};
