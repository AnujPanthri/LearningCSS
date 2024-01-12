function toggle_mobile_menu(){
    mobile_menu = document.querySelector(".mobile_menu");
    mobile_menu.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
}

function setDynamicCardImageHeight(){
    
    if(window.innerWidth<600)   return;
    document.querySelectorAll(".work .card").forEach(elem=>{
        var detail = elem.querySelector('.detail');
        var image = elem.querySelector('.image');
        // console.log(detail.clientHeight,image);
        image.style.height = `${detail.clientHeight}px`;
    
    })
}

setDynamicCardImageHeight();
window.addEventListener('resize',setDynamicCardImageHeight);
