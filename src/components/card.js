const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  // Create elements passing in type.
  const card = document.createElement('div')
  const headline = document.createElement('div')
  const author = document.createElement('div')
  const imgContainer = document.createElement('div')
  const image = document.createElement('img')
  const authorName = document.createElement('span')

  // Append elements to parent.
  card.appendChild(headline)
  card.appendChild(author)
  author.appendChild(imgContainer)
  author.appendChild(authorName)
  imgContainer.appendChild(image)

  // Add classes to elements.
  card.classList.add('card')
  headline.classList.add('headline')
  author.classList.add('author')
  imgContainer.classList.add('img-container')

  // Add text content to elements. Article is an object being passed in.
  headline.textContent = article.headline
  image.src = article.authorPhoto
  authorName.textContent = `By ${article.authorName}`

  // Add event listener to card.
  card.addEventListener('click', () => {
    console.log(headline.textContent)
  })

  //make sure to return the card element!
  return card
}

const cardAppender = async (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  // Get articles from endpoint.
  const res = await fetch('http://localhost:5001/api/articles')
  //Extract data from response and convert to json.
  const json = await res.json()
//Store values from json object in variables.
  const articles = Object.values(json.articles).flat()
  //or:     const response = res.data.articles;
    // const bootstrap = response.bootstrap;
    // const javascript = response.javascript;
    // const jquery = response.jquery;
    // const node = response.node;
    // const tech = response.technology;

  // Create card for each article.
  const container = document.querySelector(selector)
  articles.forEach(article => container.appendChild(Card(article)))
}

export { Card, cardAppender }
