import '../stylesheets/main-container.scss';
import { Display } from './display';
 
export function Container() {
  return (
    <div id='drum-machine' className='main-container'>
      <Display />
    </div>

  )
}