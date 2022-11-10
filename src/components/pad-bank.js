import { useState } from 'react';
import '../stylesheets/pad-bank.scss';
import { DrumPad } from './drum-pad';

export function PadBank() {

  function pad() {

  }

  return (
    <>
      <div className='pad-bank'>
        <DrumPad />
        <DrumPad />
        <DrumPad />
        <DrumPad />
        <DrumPad />
        <DrumPad />
        <DrumPad />
        <DrumPad />
        <DrumPad />
      </div>
    </>
  )
}