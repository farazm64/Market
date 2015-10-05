// This is your first fully working tabris.js app. Feel free to hack around ;)
// Every keystroke will be saved and is immediatly available on your device.

// Create a top-level "Page" that contains our UI
var page = tabris.create("Page", {
  title: "دومین اپلیکیشن من",
  topLevel: true
});

// Create a push button and add it to the page
var button = tabris.create("Button", {
  text: "This Button",
  layoutData: {centerX: 0, top: 100}
}).appendTo(page);

// Create a text view and add it too
var textView = tabris.create("TextView", {
  font: "26px",
  layoutData: {centerX: 0, top: [button, 50]}
}).appendTo(page);

// Change the text view's text when the button is pressed

var i = 0;
button.on ("select", 
  function ()
  {
  textView.set("text", "Totally Clicked : " + i);
  i++;
});

page.open();

// Hit enter to add more lines...



      
      
