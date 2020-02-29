//TODO: STEP 1 - Import the useState hook.
import React,{useState} from "react";
import "./App.scss";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
const [homeScore, setHomeScore] = useState(0);
const [awayScore, setAwayScore] = useState(0);
const [quarter, setQuarter] = useState(1)

const TouchDownHome = (e) =>{
  setHomeScore(homeScore+7)
}
const fieldGoalHome = (e) =>{
  setHomeScore(homeScore+3)
}
const TouchdownAway = (e) =>{
  setAwayScore(awayScore+7)
}
const fieldGoalAway = (e) =>{
  setAwayScore(awayScore+3)
}

const handleQuarter = (e) =>{
  if(quarter ===4) {setQuarter(1)}
else{
  setQuarter(quarter+1)
}
}

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Cowboyz</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Redskins</h2>
  <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow quarter={quarter}/>
      </section>
      <section className="buttons">
        <button onClick ={handleQuarter}>Next Quarter</button>
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick = {TouchDownHome} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick = {fieldGoalHome} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick = {TouchdownAway} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick = {fieldGoalAway} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
