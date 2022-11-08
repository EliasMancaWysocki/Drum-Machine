import { audio } from '../data/audio';
import React, { useState } from 'react';

export function DrumPad() {

  const activeStyle = {
    backgroundColor: 'orange',
    boxShadow: "0 3px orange",
    height: 77,
    marginTop: 13
  }
  
  const inactiveStyle = {
    backgroundColor: 'grey',
    marginTop: 10,
    boxShadow: "3px 3px 5px black"
  }

  const [padStyle, setPadStyle] = useState(inactiveStyle);

  function handleKeyPress(e) {
    if (e.keyCode === this.props.keyCode) {
      this.playSound();
    }
  }

  function activatePad() {
    if (this.props.power) {
      this.state.padStyle.backgroundColor === 'orange' ?
        this.setState({
          padStyle: inactiveStyle
        }) :
        this.setState({
          padStyle: activeStyle
        });
    } else {
      this.state.padStyle.marginTop === 13 ?
        this.setState({
          padStyle: inactiveStyle
        }) :
        this.setState({
          padStyle: {
            height: 77,
            marginTop: 13,
            backgroundColor: 'grey',
            boxShadow: "0 3px grey"
          }
        });
    }
  }
  
  function playSound(e) {
    const sound = audio;
    sound.currentTime = 0;
    sound.play();
    this.activatePad();
    setTimeout(() => this.activatePad(), 100);
    this.props.updateDisplay(this.props.clipId.replace(/-/g, ' '));

  return(
    <>
      <div id='drum-pad' className='drum-pad'>
        
      </div>
    </>
  )
};