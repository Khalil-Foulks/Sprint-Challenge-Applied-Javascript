// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log('Cards Response', response)

        const array = Object.values(response.data.articles)
        console.log('this is array', array)

        array.forEach(element => {
            element.forEach(article =>{
            cardsContainer.appendChild(cardMaker(article))               
            })
        })
    })
    .catch(error =>{
        console.log('Error MSG:', error)
    }, [])

    function cardMaker(dataObj){
        const {authorName, authorPhoto,headline} = dataObj

        const card = document.createElement('div')
        const headlineDiv = document.createElement('div')
        const author = document.createElement('div')
        const imageContainer = document.createElement('div')
        const imageUrl = document.createElement('img')
        const name = document.createElement('span')

        card.appendChild(headlineDiv)
        card.appendChild(author)
        author.appendChild(imageContainer)
        imageContainer.appendChild(imageUrl)
        author.appendChild(name)

        card.classList.add('card')
        headlineDiv.classList.add('headline')
        author.classList.add('author')
        imageContainer.classList.add('img-container')

        imageUrl.src = authorPhoto
        headlineDiv.textContent = headline
        name.textContent = `By ${authorName}`

        return card
    }