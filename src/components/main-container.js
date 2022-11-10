import '../stylesheets/main-container.scss';
import { Controls } from './controls';
import { PadBank } from './pad-bank';
 
export function Container() {
  return (
    <div id='drum-machine' className='main-container'>
      <PadBank />
      <Controls />
    </div>

  )
}