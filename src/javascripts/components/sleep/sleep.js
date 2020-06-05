import utils from '../../helpers/utils';

const energy = 50;

const sleepCard = () => {
  let domString = '';
  domString += `
  <h1>SLEEP<h1>
  <h2>Energy: ${energy}</h2>
  <button id="nap">Nappy</button> <button id="slumber">Deep Slumber</button>
  `;
  utils.printToDom('#sleep', domString);
};

export default { sleepCard };

// Component should appear in lower right quadrant
// This module should have 2 buttons and appear
// One should be for a nap and should add 50 to energy when pressed.
// The other button should be for a deep slumber and add 60 to sleep when pushed.
// The quadrant should display the name, energy score, and the two buttons.
// Each time a button is clicked the quadrant should be re-drawn to show the correct energy score.
// Energy score should neve be larger than 100
