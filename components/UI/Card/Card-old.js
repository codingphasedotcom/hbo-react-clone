import React from 'react';

import Card from './Card';

export default {
  title: 'UI/Card',
  component: Card,
  argTypes: {
    bg: {
      control: 'color'
    }
  }
}

const Template = (args) => {
  return(
    <Card {...args} />
  )
}

export const defaultState = Template.bind({});
defaultState.args = {
  title: 'Pikachu',
  imageUrl: 'https://d.newsweek.com/en/full/822411/pikachu-640x360-pokemon-anime.jpg?w=1600&h=1200&q=88&f=3ed1c0d6e3890cbc58be90f05908a8f5'
}


export const small = Template.bind({});
small.args = {
  type: 'small'
}


export const medium = Template.bind({});
medium.args = {
  type: 'medium'
}


export const large = Template.bind({});
large.args = {
  type: 'large'
}

export const roundCorner = Template.bind({});
roundCorner.args = {
  roundCorner: true
}

export const noTitle = Template.bind({});
noTitle.args = {
  title: ''
}

