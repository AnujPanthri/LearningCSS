document.addEventListener("keydown",event=>{

    
    if(event.ctrlKey && event.shiftKey && event.key=="<"){
        event.preventDefault();
        // decrease size
        increaseFontSize(-5);
        
    }
    if(event.ctrlKey && event.shiftKey && event.key==">"){
        event.preventDefault();
        // increase size
        increaseFontSize(5);

    }
})

function increaseFontSize(factor){
    const element = document.querySelector(".glow");
    const style = window.getComputedStyle(element);
    const fontSize = style.fontSize;

    new_size = parseInt(fontSize);
    new_size+=factor;
    if(new_size<1)  new_size=1;

    custom_style.innerHTML = `
            body{
                font-size:${new_size}px;
            }
        `;

    
}