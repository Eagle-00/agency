import React from 'react'
import ContentLoader from 'react-content-loader'

export const ThreeDots = props => (
  <ContentLoader
    viewBox="0 0 400 160"
    height={160}
    width={400}
    backgroundColor="transparent"
    {...props}
  >
    <circle cx="10" cy="10" r="8" />
    <circle cx="50" cy="10" r="8" />
    <circle cx="90" cy="10" r="8" />
  </ContentLoader>
);