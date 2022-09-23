import React from 'react';

function Nav() {
  const categories = [
    { name: 'About', description: 'Photo of me and my about section' },
    { name: 'Contact', description: 'Infomation on where to contact me' },
    {
      name: 'Projects',
      description: 'Links and photos of past projects',
    },
    { name: 'Resume', description: 'Link to resume' },
  ];
  function categorySelected() {
    console.log('hello');
  }
  return (
    <header>
      <h2>
        <a href='/'>Zac Guse-Humphrey</a>
      </h2>
      <nav>
        <ul className='flex-row'>
          <li className='mx-2'>
            <a href='#about'>About me</a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {categories.map((category) => (
            <li className='mx-1' key={category.name}>
              <span onClick={categorySelected}>{category.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
