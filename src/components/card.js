import axios from 'axios';


const Card = (article) => {
  const card = document.createElement('div');
  const head = document.createElement('div');
  const auth = document.createElement('div');
  const imgContainer = document.createElement('div');
  const img1 = document.createElement('img');
  const author = document.createElement('span');
  
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  card.classList.add('card');
  head.classList.add('headline');
  auth.classList.add('author');
  imgContainer.classList.add('img-container');
  
  head.textContent = article.headline;
  img1.src = article.authorPhoto;
  author.textContent = article.authorName;

  card.appendChild(head);
  card.appendChild(auth);
  auth.appendChild(imgContainer);
  imgContainer.appendChild(img1);
  auth.appendChild(author);

  return card
}


const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const selected = document.querySelector(selector)

 
  //hint: once you have all the data, separate the articles by topic and store each array to it's own variable. This will help you when you need to iterate over them and you can call the cardBuilder function for each topic where you pass in the array of articles for that topic, loop over them, call Card() for each one passing in each item from the array and append it to the DOM.

  axios.get (`http://localhost:5001/api/articles`)
  .then(res => {
    console.log(res.data.articles)
    //create a variable to hold all the articles
    const response = res.data.articles;
    // create a variable to hold only the articles for the bootstrap topic
    const bootstrap = response.bootstrap;
    // create a variable to hold only the articles for the javascript topic
    const javascript = response.javascript;
    // create a variable to hold only the articles for the jquery topic
    const jquery = response.jquery;
    // create a variable to hold only the articles for the node topic
    const node = response.node;
    // create a variable to hold only the articles for the technology topic
    const tech = response.technology;
    
    //takes in a set of data as an argument.
    function cardBuilder(data) {
      //loops through the data
      data.forEach(element => {
        //creates a card for each element in the data
        const currentCard = Card(element)
        //appends the card to the selected DOM element
          selected.appendChild(currentCard);
      })

    }

    //calls the cardBuilder function for each topic and passes in the data for that topic
    cardBuilder(bootstrap)
    cardBuilder(javascript)
    cardBuilder(jquery)
    cardBuilder(node)
    cardBuilder(tech)
  })
  .catch(error => {
    console.error(error)
  })
}

export { Card, cardAppender }