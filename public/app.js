var Quote = function(text, author){
  this.text = text;
  this.author = author;
};
var quote1 = new Quote("Visual Basic is the way forward, I don't know why we are doing Javascript.", 'Jay Chetty');
var quote2 = new Quote("The only CSS you need to know is background-color: tomato", 'Rick Henry');
var quote3 = new Quote("No Blockers *smug tone*", 'Keith Douglas');
var quote4 = new Quote("Scaffold is nothing but a fiery hell.", 'Valarie Gibson');

var quotes = [quote1, quote2, quote3, quote4];

window.onload = function(){

  var selectElement = document.getElementById('allQuotes');
  
  var addQuoteToView = function(quote) {

    var articleTag = document.createElement('article')
    selectElement.appendChild(articleTag);

    var quoteTag = document.createElement('blockquote')
    quoteTag.innerText = ('"' + quote.text + '"');
    articleTag.appendChild(quoteTag)

    var authorTag = document.createElement('cite')
    authorTag.innerText = quote.author; 
    articleTag.appendChild(authorTag);

    var deleteButton = document.createElement('input');
    deleteButton.setAttribute('type', 'submit');
    deleteButton.setAttribute('id', 'delete');
    deleteButton.setAttribute('value', 'Delete');
    articleTag.appendChild(deleteButton)

    deleteButton.onclick = function(){
    console.log('got clicked');
    targetQuote = this.parentNode.parentNode.removeChild(this.parentNode);
    deletedQuote = quotes.indexOf(targetQuote);
    quotes.splice(deletedQuote, 1);
    }
  }

  for (var i = 0; i < quotes.length; i++) {
    addQuoteToView(quotes[i]);
  };

  var button = document.getElementById("add-button");

  console.log('button', button);
  
  var handleClick = function(){
    console.log('Woh I got clicked');

  var getQuote = document.getElementById('quote-text-input').value;
  console.log('got text', getQuote);

  var getAuthor = document.getElementById('author-text-input').value;
  console.log('got text', getAuthor);

  var articleTag = document.createElement('article')
  selectElement.appendChild(articleTag);

  var quoteTag = document.createElement('blockquote')
  quoteTag.innerText = ('"' + getQuote + '"');
  articleTag.appendChild(quoteTag)

  var authorTag = document.createElement('cite')
  authorTag.innerText = getAuthor; 
  articleTag.appendChild(authorTag);
  }
//prevents refresh when pressing return
  var form = document.getElementById('quote-form');

  form.onsubmit = function(event){
    event.preventDefault();
    handleClick();
  }
  button.onclick = handleClick;

  





  // console.log(selectElement);


  // var tagline = document.getElementById("tagline");
  // tagline.innerText = "Whatup?!?!?!";

  // var articles = document.querySelectorAll("article");
  // for (var i = 0; i < articles.length; i++) {
  //   if (i % 2 === 0) {
  //     articles[i].style.backgroundColor = "tomato";
  //     articles[i].style.color = "wheat";
  //   }else{
  //     articles[i].style.backgroundColor = "wheat";
  //     articles[i].style.color = "tomato";
  //   }
  // };

  // var h2 = document.querySelector("h2");
  // h2.innerText = "Featured Quotes";

  // var quoteArticle = document.createElement("article");
  // quoteArticle.classList.add("quote");

  // var blockquote = document.createElement("blockquote");
  // blockquote.innerText = "I made new quote today!";

  // var cite = document.createElement("cite")
  // cite.innerText = "Junior"

  // blockquote.appendChild(cite);
  // quoteArticle.appendChild(blockquote);

  // var quotes = document.querySelector("section");
  // quotes.appendChild(quoteArticle);

}

