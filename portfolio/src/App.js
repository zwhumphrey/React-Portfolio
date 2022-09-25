import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';

function App() {
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
    <div>
      <Nav>
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      </Nav>
      <main>
        <Projects></Projects>
        <About></About>
      </main>
    </div>
  );
}

export default App;
