function createSynth(){
    var synth = new Tone.Synth().toDestination();
    return synth;
}

function playNote(elem,synth){
    Tone.loaded().then(()=>{
        synth.triggerAttack(elem.dataset.note)
    })
}

function stopNote(elem,synth){
    Tone.loaded().then(()=>{
        synth.triggerRelease();
    })
}

const all_keys = document.querySelectorAll(".key , .key>.sharp");
const synths = [];
for( i=0;i<all_keys.length;i++){
    synths.push(createSynth());
}


all_keys.forEach((elem,idx)=>{
    elem.addEventListener('touchstart',ev=>{
        ev.stopPropagation();

        all_keys[idx].classList.add("active");
        playNote(elem,synths[idx]);
    })
    elem.addEventListener('touchend',ev=>{
        ev.stopPropagation();
        all_keys[idx].classList.remove("active");
        stopNote(elem,synths[idx]);
    })

    elem.addEventListener('mousedown',ev=>{
        ev.stopPropagation();
        all_keys[idx].classList.add("active");
        playNote(elem,synths[idx]);
    })
    elem.addEventListener('mouseup',ev=>{
        ev.stopPropagation();
        all_keys[idx].classList.remove("active");
        stopNote(elem,synths[idx]);
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
    playNote(all_keys[idx],synths[idx]);

})

document.addEventListener("keyup",ev=>{
    var char = ev.key.toLowerCase();
    var idx = characterset.indexOf(char);
    
    if(idx==-1) return;
    ev.preventDefault();

    console.log(char);
    all_keys[idx].classList.remove("active");
    stopNote(all_keys[idx],synths[idx]);
    
})