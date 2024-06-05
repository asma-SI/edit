var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}


const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [
    {
      text: 'If you want to shine like a sun, first burn like a sun.',
      author: '-APJ Abdul Kalam',
    },
    {
      text: 'To succeed in your mission, you must have single-minded devotion to your goal.',
      author: '-APJ Abdul Kalam',
    },
    {
      text: 'Great teachers emanate out of knowledge, passion, and compassion.',
      author: '-APJ Abdul Kalam',
    },
    {
      text: 'Look at the sky. We are not alone. The whole universe is friendly to us and conspires only to give the best to those who dream and work.',
      author: '-APJ Abdul Kalam',
    },
    {
      text: 'Millions of kids across the world victims of war while millions other witnessing it. Imagine their state of mind.',
      author: '-Meraj Faheem',
    },
    {
      text: 'Loyalty is tested by both giving and denying an opportunity. The loyal ones prove everytime, why they were worth the trust.',
      author: '-Meraj Faheem',
    },
    {
      text: 'If you are young you can win the world with trial and error. If you are  old, you can win it with experience. Eventually, you will win.',
      author: '-Meraj Faheem',
    },
    {
      text: 'The world has to look different with you and without you. You can’t just come and go.',
      author: '-Meraj Faheem',
    },
    {
      text: 'It is in that which you love the most that you find the greatest tests.',
      author: '-Yasmin Mogahed',
    },
    {
      text: 'The body has many needs. But the soul has only one: to be with God.',
      author: '-Yasmin Mogahed',
    },
    {
      text: 'Holding on to hope when everything is dark, is the greatest test of faith.',
      author: '-Yasmin Mogahed',
    },
    {
      text: 'If you want this life to stop breaking your heart, stop giving your heart to this life.',
      author: '-Yasmin Mogahed',
    },

];

// Show loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//Hide loading
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// Show new Quote
function newQuote() {
    loading();
    // Pick a random quote fro apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
    // Check if Author field is blank and replace it with
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }
    // Check Quote length to determine styling
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    // Set quote, Hide loader
    quoteText.textContent = quote.text;
    complete();
    
    quoteText.textContent = quote.text;
}

//Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

//Event Listener
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

//On load
complete();
getQuotes();