import React from 'react';
import { HBOProvider } from '../../HBOProvider';

import MediaRow from './MediaRow';

export default {
  title: 'Components/UI/MediaRow',
  component: MediaRow,
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
        minHeight: '500px'
      }}>
        
        <MediaRow {...args} />
      </div>
      
    </HBOProvider>
  )
}

export const Movies = Template.bind({});
Movies.args = {
  mediaType: 'movie',
	title: "Movies",
	type: "small-v",
	endpoint:"discover/movie?sort_by=popularity.desc&primary_release_year=2021"
}


export const TVSeries = Template.bind({});
TVSeries.args = {
  mediaType: 'tv',
	title: "TV",
	type: "small-v",
	endpoint:"discover/tv?sort_by=popularity.desc&primary_release_year=2021"
}

export const SmallVerticalPoster = Template.bind({});
SmallVerticalPoster.args = {
  mediaType: 'movie',
	title: "Movies",
	type: "small-v",
	endpoint:"discover/movie?sort_by=popularity.desc&primary_release_year=2021"
}

export const SmallHorizontalPoster = Template.bind({});
SmallHorizontalPoster.args = {
  mediaType: 'movie',
	title: "Movies",
	type: "small-h",
	endpoint:"discover/movie?sort_by=popularity.desc&primary_release_year=2021"
}

export const LargeVerticalPoster = Template.bind({});
LargeVerticalPoster.args = {
  mediaType: 'movie',
	title: "Movies",
	type: "large-v",
	endpoint:"discover/movie?sort_by=popularity.desc&primary_release_year=2021"
}

export const LargeHorizontalPoster = Template.bind({});
LargeHorizontalPoster.args = {
  mediaType: 'movie',
	title: "Movies",
	type: "large-h",
	endpoint:"discover/movie?sort_by=popularity.desc&primary_release_year=2021"
}


export const Loading = Template.bind({});
Loading.args = {
  mediaType: 'movie',
	title: "Movies",
	type: "large-v",
	endpoint:""
}

export const LoadingDifferentType = Template.bind({});
LoadingDifferentType.args = {
  mediaType: 'movie',
	title: "Movies",
	type: "small-h",
	endpoint: ""
}




