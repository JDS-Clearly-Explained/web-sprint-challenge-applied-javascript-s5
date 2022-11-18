const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const headerElem = document.createElement('div')
  const dateElem = document.createElement('span')
  const titleElem = document.createElement('h1')
  const tempElem = document.createElement('span')

  headerElem.appendChild(dateElem)
  headerElem.appendChild(titleElem)
  headerElem.appendChild(tempElem)

  headerElem.classList.add('header')
  dateElem.classList.add('date')
  tempElem.classList.add('temp')

  dateElem.textContent = date
  titleElem.textContent = title
  tempElem.textContent = temp

  return headerElem
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  document.querySelector(selector)
    .appendChild(Header('Lambda Times', 'JANUARY 6, 2021', '26°'))
}

export { Header, headerAppender }
