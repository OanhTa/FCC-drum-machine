

function Drum({ audioClip }) {
  const playSound = () => {
    const audio = document.getElementById(audioClip.keyTrigger);
    audio.play();
  };
  return (
    <button className="drum-pad" onClick={() => playSound()}>
      <audio src={audioClip.url} id={audioClip.keyTrigger} className="clip"/>
      {audioClip.keyTrigger}
    </button>
  );
}

export default Drum;
