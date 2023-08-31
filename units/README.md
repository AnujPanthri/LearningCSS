

absolute unit:-

1px  : one pixel size 


relative units:-

1rem : 1x root element's font size
1em  : 1x parent of current element's font size
1vw  : 1% width of the view width 
1vh  : 1% height of the view height
1ch  : 1 character width of the character '0' according to the font size

css reset:

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

h1's default margin-top pushs the body tag a little bit lower than the start of the page.

To make the body tag height to cover the whole height by default and grows when more content is added to the page:
   
    body{
        min-height: 100vh;
    }

