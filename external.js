function randomQuote() {
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if(httpRequest.readyState === 4) {
            if(httpRequest.status === 200) {
                var quoteJSON = JSON.parse(httpRequest.responseText);
                dealWithQuoteJSON(quoteJSON);
            } else {
                alert('There was a problem with the request');
            }
        }
    };
    httpRequest.open('GET', 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1', true);
    httpRequest.setRequestHeader("X-Mashape-Key", "dfesModKT4mshUmULZg6D4CeHrXzp1g8VamjsnI2YK0S29xKX4", "Content-Type", "application/x-www-form-urlencoded", "Accept", "application/json")
    httpRequest.send();
}
function dealWithQuoteJSON(quoteJSON) {
    var quote = document.getElementById('quote');
    var author = document.getElementById('author');
    quote.innerText = JSON.stringify(quoteJSON.quote);
    var authorStr = JSON.stringify(quoteJSON.author);
    author.innerText = '- ' + authorStr.substr(1,authorStr.length-2);
    quote.classList.remove('fadein');
    author.classList.remove('fadein');
    void quote.offsetWidth;
    quote.classList.add('fadein');
    author.classList.add('fadein');

    var tweet = document.getElementById('tweet');
    tweet.setAttribute('href', 'https://www.twitter.com/intent/tweet?text=' + 
    '"' + encodeURIComponent(quoteJSON.quote) + '" -' + quoteJSON.author
    + '&hashtags=randomquote&via=freecodecamp&via=johnscomp');
}