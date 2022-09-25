import React from 'react';
import photo from '../../assets/runbuddy.png';

function projects() {
  const currentCategory = {
    name: 'Projects',
    description: 'Photos and links of past projects.',
  };
  return (
    <section>
      <h1>{currentCategory.name}</h1>
      <p>Runbuddy</p>
      <div className='flex-row'>
        <img
          src={photo}
          alt='Runbuddy project'
          className='img-thumbnail mx-1'
        />
      </div>
    </section>
  );
}
export default projects;
