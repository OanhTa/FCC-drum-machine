import "./App.css";
import {useState} from 'react'
import Drum from "./Drum";

const audioClips = [
  {
    index: 1,
    keyTrigger: "Q",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    desc: "Heater 1",
  },
  {
    index: 2,
    keyTrigger: "W",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    desc: "Heater 2",
  },
  {
    index: 3,
    keyTrigger: "E",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    desc: "Heater 3",
  },
  {
    index: 4,
    keyTrigger: "A",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    desc: "Heater 4",
  },
  {
    index: 5,
    keyTrigger: "S",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    desc: "Clap",
  },
  {
    index: 6,
    keyTrigger: "D",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    desc: "Open-HH",
  },
  {
    index: 7,
    keyTrigger: "Z",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    desc: "Kick-n'-Hat",
  },
  {
    index: 8,
    keyTrigger: "X",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    desc: "Kick",
  },
  {
    index: 9,
    keyTrigger: "C",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    desc: "Closed-HH",
  },
];

function App() {
  const [] = useState();
  return (
    <div className="container" id="drum-machine">
      <h1>FCC Drum Machine</h1>
      <div className="whole-drum">
        {audioClips.map((clip, index)=>{
          return <Drum audioClip = {clip} className="drum-pad" key={index}/>
        })}
      </div>
    </div>
  );
}

export default App;
