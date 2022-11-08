import '../stylesheets/power.scss';

export function Power() {
  return(
    <>
      <div class="switch-button">
        <input type="checkbox" name="switch-button" id="switch-label" className="switch-button__checkbox"/>
        <label for="switch-label" className="switch-button__label"></label>
    </div>
    </>
  )
}