import React from 'react';
import { HBOProvider } from '../HBOProvider';
import MainLayout from './MainLayout';

export default {
  title: 'Layouts/MainLayout',
  component: MainLayout,
  // argTypes: {
  //   bg: {
  //     control: 'color'
  //   }
  // }
}

const Template = (args) => {
  return(
    <HBOProvider>
      <MainLayout {...args} />
    </HBOProvider>
  )
}

export const defaultState = Template.bind({});
defaultState.args = {

}

