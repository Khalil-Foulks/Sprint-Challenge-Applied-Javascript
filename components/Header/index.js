// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const headerContainer = document.querySelector('.header-container')
function Header(dateText, titleText, tempText) {
    const headerDiv = document.createElement('div')
    const date = document.createElement('span')
    const title = document.createElement('h1')
    const temp = document.createElement('span')

    headerDiv.appendChild(date)
    headerDiv.appendChild(title)
    headerDiv.appendChild(temp)

    headerDiv.classList.add('header')
    date.classList.add('date')
    temp.classList.add('temp')

    date.textContent = dateText
    title.textContent = titleText
    temp.textContent = tempText

    return headerDiv
}

headerContainer.appendChild(Header('MARCH 28, 2019','Lambda Times','98°'))
