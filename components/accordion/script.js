document.querySelectorAll("section.accordion").forEach(accord=>{
    var header = accord.querySelector("header");
    var content_container = accord.querySelector(".content_container");
    header.onclick = function(event){
        accord.classList.toggle('open');
    };
    // set content height 
    content_container.style.height = `${content_container.scrollHeight}px`;

});