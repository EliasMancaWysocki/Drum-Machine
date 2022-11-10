import '../stylesheets/drum-pad.scss';
import { bankOne, bankTwo } from '../data/audio';
import React, { useState } from 'react';

export function DrumPad({ padStyle, text }) {
  
  padStyle = true;

  const handleKeyPres = (e) => {
    if(e.keyCode === bankOne[0].keyCode) {
      this.playSound();
    }
  }

  const playSound = (e) => {
    const sound = bankOne[0].keyTrigger;
    sound.currentTime = 0;
    sound.play();

  }

  return(
    <>
      <div id='drum-pad' className={padStyle ? 'active' : 'inactive'} onClick={bankOne[0].url}>
        { text }
        <audio className='clip' id={bankOne.keyTrigger} src={bankOne[0].url}></audio>
      </div>
    </>
  )
}