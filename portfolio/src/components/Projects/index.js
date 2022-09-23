import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from '../../assets';

function projects() {
  const currentCategory = {
    name: 'Projects',
    description: 'Photos and links of past projects.',
  };
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.name}</p>
      <div className='flex-row'>
        <img
          src={photo}
          alt='Commercial Example'
          className='img-thumbnail mx-1'
        />
      </div>
    </section>
  );
}
export default projects;
