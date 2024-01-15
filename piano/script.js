function createSynth(){
    var synth = new Tone.PolySynth(Tone.Synth).toDestination();
    return synth;
}

function createPianoSynth(){
    var synth = new Tone.Sampler({
        urls: {
            "C4":"C4.mp3",
            "D#4":"Ds4.mp3",
            "F#4":"Fs4.mp3",
            "A4":"A4.mp3",
        },
        release: 1,
        baseUrl: "https://tonejs.github.io/audio/salamander/",
    }).toDestination();
    return synth;
}
function createSynth2(){
    var synth = new Tone.Sampler({
        urls: {
            A1: "A1.mp3",
            A2: "A2.mp3",
        },
        // release: 0.1,
        baseUrl: "https://tonejs.github.io/audio/casio/",
    }).toDestination();

    return synth;
}

function playNote(elem){
    Tone.loaded().then(()=>{
        synth.triggerAttack(elem.dataset.note)
    })
}

function stopNote(elem){
    Tone.loaded().then(()=>{
        synth.triggerRelease(elem.dataset.note);
    })
}

const all_keys = document.querySelectorAll(".key , .key>.sharp");
// const synth = createSynth();
const synth = createPianoSynth();
// const synth = createSynth2();


all_keys.forEach((elem,idx)=>{
    elem.addEventListener('touchstart',ev=>{
        ev.stopPropagation();

        all_keys[idx].classList.add("active");
        playNote(elem);
    })
    elem.addEventListener('touchend',ev=>{
        ev.stopPropagation();
        all_keys[idx].classList.remove("active");
        stopNote(elem);
    })

    elem.addEventListener('mousedown',ev=>{
        ev.stopPropagation();
        all_keys[idx].classList.add("active");
        playNote(elem);
    })
    elem.addEventListener('mouseup',ev=>{
        ev.stopPropagation();
        all_keys[idx].classList.remove("active");
        stopNote(elem);
    })
});


const characterset = "zsxdcvgbhnjmq2w3er5t6y7u".split("");

document.addEventListener("keydown",ev=>{
    var char = ev.key.toLowerCase();
    var idx = characterset.indexOf(char);
    
    if(idx==-1) return;
    if(all_keys[idx].classList.contains('active'))  return;
    ev.preventDefault();

    console.log(char);
    all_keys[idx].classList.add("active");
    playNote(all_keys[idx]);

})

document.addEventListener("keyup",ev=>{
    var char = ev.key.toLowerCase();
    var idx = characterset.indexOf(char);
    
    if(idx==-1) return;
    ev.preventDefault();

    console.log(char);
    all_keys[idx].classList.remove("active");
    stopNote(all_keys[idx]);
    
})