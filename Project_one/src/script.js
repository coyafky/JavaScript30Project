function removeTransition (event){
    if(event.propertyName !== 'transform') return; //skip if not a transform
    this.classList.remove('playing'); 
}

function palySound (event){
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    if(!audio) return; //stop the function from running all together
    key.classList.add('playing');
    audio.currentTime = 0; //rewind to the start
    audio.play();
}
const keys = Array.from(document.querySelectorAll('.key'));

keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', palySound);