import React from 'react';
import TabContent from '../TabContent';
import AboutMe from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';

function Tabs({ currentTab }) {
  const tabRender = () => {
    switch (currentTab.name) {
      case 'AboutMe':
        return <AboutMe />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div>
      <TabContent>{tabRender()}</TabContent>
    </div>
  );
}

export default Tabs;
