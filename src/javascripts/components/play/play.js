import utils from '../../helpers/utils';

const fun = 50;

const playCard = () => {
  let domString = '';
  domString += `
  <h1>PLAY</h1>
  <h2>Fun: ${fun}</h2>
  <button id="superFun>STUPID FUN</button><button id="mildFun">MEH</button>
  `;
  utils.printToDom('#play', domString);
};

export default { playCard };
// build two buttons
// one button is "super fun" and adds 50 to fun variable when pushed
// second button should be a mild fun button that adds 2 to fun variable
// this quadrant should display name, fun score, and two buttons
// every time button is licked quadrant should refresh to show fun score
// fun score should never be larger than 100
