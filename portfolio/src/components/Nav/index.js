import React, { useState } from 'react';

function Nav() {
  const [categories] = useState([
    { name: 'About', description: 'Photo of me and my about section' },
    { name: 'Contact', description: 'Infomation on where to contact me' },
    {
      name: 'Projects',
      description: 'Links and photos of past projects',
    },
    { name: 'Resume', description: 'Link to resume' },
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <header className='flex-row px-1'>
      <h2>
        <a data-testid='link' href='/'>
          Zac Guse-Humphrey
        </a>
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
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && 'navActive'
              }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                }}
              >
                {category.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
