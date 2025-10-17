\# Assignment 1 – Clock Page



A simple interactive web page that shows the current time when you click a button. Each time you click, the time is added to a list below.



\## How It Works



\- \*\*HTML\*\* (`index.html`) creates the structure: header, main content, footer, button, and a list for timestamps.

\- \*\*CSS\*\* (`css/style.css`) styles the page (layout, background, font, …etc.)

\- \*\*JavaScript\*\* (`js/app.js`) makes the button work: it gets the current time and updates the page.



The files are connected in `index.html`:

<link rel="stylesheet" href="css/style.css"> <script src="js/app.js"></script> ``` CSS loads first (in `<head>`) so the page looks good right away. JavaScript loads at the end of `<body>` so it doesn’t run before the HTML is ready.



What happens when you click?

1\.	The button click triggers a function in app.js

2\.	JavaScript gets the current time using new Date().toLocaleTimeString()

3\.	It updates the <p> element with the new time

4\.	It saves the time in an array called timestamps

5\.	It clears the <ul> list and rebuilds it by:

•	Creating a new <li> element for each saved time

•	Adding it to the list using appendChild()

This means every click adds a new item to the page (the list grows automatically).

How to Run

1\.	Open index.html in any browser

2\.	Click the "Show Current Time" button

3\.	See the time appear and the list update



