const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input")
const keyShows = document.querySelectorAll(".keycheck-box input");


let allKeys =[],
    audio = new Audio('tunes/tunes/a.wav');

const playTune = (key)=>{
    audio.src = `tunes/tunes/${key}.wav`;
    audio.play();

    const clickedkey = document.querySelector(`[data-key ="${key}"]`);
    clickedkey.classList.toggle('active');
    console.log(allKeys)
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key)
    key.addEventListener("click", (e) => playTune(key.dataset.key))
    // console.log(key.dataset.key);
});

const  pressedkey= (e)=>{
    // playTune(e.key)

    if (allKeys.includes(e.key))playTune(e.key);
}

const handleVolume = (e) => {
    audio.volume = e.target.value;
};


const  showHideKeys = ()=>{
    pianoKeys.forEach(key=>{
        key.classList.toggle('hide');
    })
}

keyShows.forEach(checkbox => {
    checkbox.addEventListener('click', showHideKeys);
});
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedkey)
