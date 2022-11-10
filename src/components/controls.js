import '../stylesheets/controls.scss';
import { Power } from './power';


export function Controls() {
  return(
    <div id='controls' className='controls'>
      <p>Power</p>
      <Power />
    </div>
  )
};