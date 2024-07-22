import React from 'react';
import { cloudImages } from '../cloudImages';

const background = [];

for (const cloud in cloudImages) {
  background.push(
    cloudImages[cloud].image
  )
}

const Clouds = () => (
  <div>
    {background}
  </div>
)

export default Clouds;