import utils from '../../helpers/utils';
import './fight.scss'

let strength = 100;

const fightCard = () => {
  let domString = '';
  domString += `
  <h1>FIGHT</h1>
  <h2>Strength: ${strength}</h2>
  <button id="run">RUN AWAY (BRAVELY)</button> <button id="stab">VIOLENCE</button>
  `;
  utils.printToDom('#fight', domString);
};

const runAway = () => {
  if (strength === 100) return;
  strength += 1;
  if (strength > 100) strength = 100;
  fightCard();
};

const stab = () => {
  if (strength === 0) return;
  strength -= 10;
  if (strength < 0) strength = 0;
  fightCard();
};

$('body').on('click', '#run', runAway);
$('body').on('click', '#stab', stab);

export default { fightCard };
// fight component should appear in lower left quadrant
// module should have two buttons
// one button for running away (bravely) that adds 1 to strength when pressed
// second button should be for committing violence & substracts 10 from strength when pressed
// quadrant should display name, strength score, and two buttons.
// Each time a button is clicked the quadrant should be re-drawn to show the correct strength score.
//  The Strength score should NEVER be larger than 100.
