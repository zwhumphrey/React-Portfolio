import React from 'react';

function projects() {
  const currentCategory = {
    name: 'Projects',
    description: 'Photos and links of past projects.',
  };
  return (
    <section>
      <h1>{currentCategory.name}</h1>
      <p>{currentCategory.name}</p>
    </section>
  );
}
export default projects;
