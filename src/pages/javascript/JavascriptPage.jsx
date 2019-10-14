import React from 'react';
import {Link} from 'react-router-dom';
import '../Page.css'

class JavascriptPage extends React.Component{
  render() {
    return(
      <div className="about-container">
        <div className="about-title">javascr1pt</div>
        <div className="section-title">1n my initial foray into the world of javascript of my software engineering journey, i made some serious progress in working with vanilla javascript, html and css with the creation of Pirate's Booty.  Pirate's Booty is a fun, casino-style, slot machine game!</div>
        <a  id="colored-link" className="about-title" target="_blank" href="https://41holmes41.github.io/myproject1/">Play Pirate's B00ty here!</a>
        <img className="pirate-title" src="https://i.imgur.com/yctJLxj.png"/>
        <div className="section-item">Pirate's Booty requires some rather complex game logic in calculating the winnings for each round.  Shown below is the event listener that is attached to the spin button.</div>
        <img className="pirate-title" src="https://i.imgur.com/CUp45RQ.png"/>
        <div classsName="section-item">the initial gameboard is produced with the getResult() function that fills each spot on the two-dimensional array that represents the game board with a integer between 1 and 5.</div>
        <img className="pirate-title" src="https://i.imgur.com/xKL00cK.png"/>
        <div classsName="section-item">after the gameboard has been populated with a random integer, it is then passed to the getCombo() function.  The getCombo() function checks for matching integers in all dimensions of the current gameboard.  then the multiplier for the cash payout is set based on the amount of winning combinations.</div>
        <div className="flex">
          <img className="pirate-getcombo" src="https://i.imgur.com/5N8Y5Sq.png"/>
          <img className="pirate-getcombo" src="https://i.imgur.com/Z0Ejcqf.png"/>
        </div>
          <img className="pirate-getcombo2" src="https://i.imgur.com/f102Mv3.png"/>
        <div classsName="section-item">after the winning combinations and multipliers are calculated, the final aspect of the event listener attached to the spin button is the render() function </div>
          <img className="pirate-result1" src="https://i.imgur.com/jo3b9aB.png"/>
        <div classsName="section-item">and finally, based off the randomized combonations, the gameboard is rendered</div>
          <img className="pirate-result2" src="https://i.imgur.com/pV1XF8m.png"/>


        <Link  id="colored-link" className="section-title" to="/portfolio">Back</Link>
      </div>
    )
  }
}

export default JavascriptPage;