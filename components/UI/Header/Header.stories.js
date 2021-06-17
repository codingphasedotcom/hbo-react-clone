import React from 'react';
import { HBOProvider } from '../../HBOProvider';
import Header from './Header';

export default {
  title: 'Components/UI/Header',
  component: Header,
  // decorators: [
  //   (Story) => (
  //     <div style={{ background: 'black', height: '500px' }}>
  //       <Story />
  //     </div>
  //   ),
  // ],
  // argTypes: {
  //   bg: {
  //     control: 'color'
  //   }
  // }
}

const Template = (args) => {
  return(
    <HBOProvider>
      <div style={{
        background: 'black',
        height: '500px'
      }}>
        
        <Header {...args} />
      </div>
      
    </HBOProvider>
  )
}

export const defaultState = Template.bind({});
defaultState.args = {

}

