/***
 below is my array of objects I chose not to put any years or citations
 
***/


var quotes = [
  {
      quote: "In a world where you can be anything be kind.",
      source: "Unknown"
  } ,
  {
      quote: "If you believe in yourself anything is possible.",
      source: "Miley Cyrus"
  } ,
  {
      quote: "You can do anything but not everything.",
      source: "David Allen"
  } ,
  {
      quote: "A person who never made a mistake never tried anything new.",
      source: "Albert Einstein"
  } ,
  {
      quote: "Believe in your dreams and that anything is possible.",
      source: "Usain Bolt"
  } ,
  {
      quote: "If you have a friend that you can talk to about anything and they won't judge you, never let them go.",
      source: "Pure Love Quotes.com"
  } ,


];


/***
  
below is my function which picks a random number from 0 to the length of my quotes array which is 5
***/
function getRandomQuote() {
  var randomQuote = quotes [Math.floor(Math.random() * (quotes.length))];
  return randomQuote;

}



/***
  Below is my print function which gets the result of getRandomQuote and prints the values of Quote 
  and Source
***/

function printQuote() {
  var theQuote = "";   
  var result = getRandomQuote(quotes);
  theQuote = "<p class='quote'>" + result.quote + "</p>";
  theQuote += "<p class='source'>" + result.source;
  theQuote += "</p>";

    document.getElementById('quote-box').innerHTML = theQuote;
}

printQuote();


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


