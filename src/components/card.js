import axios from "axios";


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

  const newCard = document.createElement('div');
  const headLine = document.createElement('div');
  const auThor = document.createElement('div');
  const imgContainer = document.createElement('div');
  const image = document.createElement('img');
  const span = document.createElement('span');
 
  headLine.textContent = article.headline;
  span.textContent = article.authorName;
  image.src = article.authorPhoto;
  image.alt = "author photo";

  newCard.classList.add('card');
  headLine.classList.add('headline');
  auThor.classList.add('author');
  imgContainer.classList.add('img-container');
  image.classList.add('img');
  span.classList.add('span');

  newCard.appendChild(headLine);
  newCard.appendChild(auThor);
  auThor.appendChild(imgContainer);
  imgContainer.appendChild(image);
  auThor.appendChild(span);

  newCard.addEventListener("click", () => {
    newCard.classList.toggle("span");
  })

  return newCard;
}
console.log(Card({headline: 'headline', authorPhoto: 'authorPhoto', authorName: 'authorName'}));

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios.get(`http://localhost:5001/api/articles`)

  .then(resp => {

    for(let i = 0; i < resp.data.articles.bootstrap.length; i++){
document.querySelector(selector).appendChild(Card(resp.data.articles.bootstrap[i]));
    }
    for(let j = 0; j < resp.data.articles.javascript.length; j++){
document.querySelector(selector).appendChild(Card(resp.data.articles.javascript[j]))
    }
    for(let k = 0; k < resp.data.articles.technology.length; k++){
document.querySelector(selector).appendChild(Card(resp.data.articles.technology[k]))
    }
    for(let o = 0; o < resp.data.articles.jquery.length; o++){  document.querySelector(selector).appendChild(Card(resp.data.articles.jquery[o]))
}
    for(let y = 0; y < resp.data.articles.node.length; y++){
document.querySelector(selector).appendChild(Card(resp.data.articles.node[y]))
    }
    console.log(resp.data.articles);
// document.querySelector(selector).appendChild(Card(resp.data.articles.bootstrap[0]));
  })
  .catch(err => 
    console.error(err))



}

export { Card, cardAppender }
