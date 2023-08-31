Box Model


in html everything is a box


box-sizing in css:
box-sizing:content-box; //(default):it means that the width property only sets the width of the content and ignores the padding 
                        //so the total width of  the element will be width+padding

box-sizing:border-box;  //(more sensible):it means that the  width property will set the total width of the element including the
                        //padding
    

margin is outside the element.

margin: top right bottom left 
margin: top right-left bottom 
margin: top-bottom right-left



padding is inside the element.

padding: top right bottom left 
padding: top right-left bottom 
padding: top-bottom right-left


border is used to add a border to any element
border: unit style color;   // border: 4px solid #000;


outline is used to add outline ,Note it not part of the box model
outline: unit style color;   // outline: 4px solid #000;
outline-offset:unit; // used to scale the outline unit can be positive(10px) or negative(-10px). Example: outline-offset: -15px;