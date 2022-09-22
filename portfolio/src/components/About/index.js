import React from 'react';
import coverImage from '../../assets/mexico.png';

function About() {
  return (
    <section className='my-5'>
      <img
        src={coverImage}
        className='my-2'
        style={{ width: '20%' }}
        alt='cover'
      />
      <h1 id='about'>
        {' '}
        I am a full stack web developer going through a coding bootcamp with the
        University of Minnesota!
      </h1>
    </section>
    // <div>

    // </div>
  );
}

export default About;
