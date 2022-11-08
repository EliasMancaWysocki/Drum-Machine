import '../stylesheets/main-container.scss';
import { Display } from './display';
import { Pad } from './pad';
 
export function Container() {
  return (
    <div id='drum-machine' className='main-container'>
      <Pad />
      <Display />
    </div>

  )
}