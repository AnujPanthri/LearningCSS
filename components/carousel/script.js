slides = document.querySelector(".carousel .slides");   // container having slides
all_slide = slides.querySelectorAll('.slide');  // array of every slide

// slides.scrollWidth is the total scroll width
// slides.scrollLeft width of the left part which is not visible after scrolling
// slides.clientWidth total visible width of slides


function slide_to(position){
    // position means 1 for first slide ,2 for second slide
    var index = position-1;
    all_slide.forEach(slide=>{
        slide.classList.remove('active');
    })
    all_slide[index].classList.add("active");
    var pos = slides.clientWidth*index;
    slides.scrollTo(pos,0);

}

function findactiveidx(elems){
    for(var i=0;i<elems.length;i++){
        if(elems[i].classList.contains('active'))  return i;
    }
    return -1;
}

function slide_next(){
    curr_slide_idx = findactiveidx(all_slide);
    new_slide_idx = (curr_slide_idx+1);
    new_slide_idx = new_slide_idx%all_slide.length;
    console.log(new_slide_idx);
    slide_to(new_slide_idx+1);
}
function slide_prev(){
    curr_slide_idx = findactiveidx(all_slide);
    new_slide_idx = (curr_slide_idx-1);
    if(new_slide_idx<0)     new_slide_idx = all_slide.length+new_slide_idx;
    console.log(new_slide_idx);
    slide_to(new_slide_idx+1);
}


// auto slideshow
curr_idx=0;
setInterval(function(){
    curr_idx+=1;
    curr_idx%=all_slide.length;
    slide_to(curr_idx+1);
},1000*10);
