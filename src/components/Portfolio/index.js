import React from 'react';

const Portfolio = () => {
  return (
    <section>
      <div>
        <p>Workout Tracker</p>
        <a href='workout-tracker-app2.herokuapp.com/'>
          <img
            src={require(`../../assets/workout-tracker.png`)}
            alt={`workout tracker`}
          />
        </a>
      </div>
      <div>
        <p>Runbuddy</p>
        <a href='https://zwhumphrey.github.io/run-buddy/'>
          <img src={require(`../../assets/runbuddy.png`)} alt={`runbuddy`} />
        </a>
      </div>
      <div>
        <p>Obscura</p>
        <a href='https://zwhumphrey.github.io/Obscura/'>
          <img src={require(`../../assets/obscura.png`)} alt={`obsurca`} />
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
