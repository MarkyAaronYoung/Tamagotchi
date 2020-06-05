import utils from '../../helpers/utils';

const full = 100;

const eatCard = () => {
  let domString = '';
  domString += `
  <h1>NomNom</h1>
  <h2>Fullness Score: ${full}</h2>
  <button id="nutritious>Nutritious Food</button> <button id="garbage">Edible Garbage</button>
  `;
  utils.printToDom('#eat', domString);
};

export default { eatCard };

// should appear in upper left quadrant
// module should have two buttons
// one buttons hould be a healthy food that adds 10 to variable full when pressed
// the other button should be unhealthy food that subtracts 3 from full when pressed.
// quadrant should display name, fullness score, and the two buttons
// each time button is clicked quadrant should be re-drawn to show fullness score
// fullness score should never exceed 100
