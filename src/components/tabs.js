import axios from 'axios'

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  // Create container elements
  const container = document.createElement('div')
  //add class to element
  container.classList.add('topics')

  topics.forEach(topic => {
    // Create elements
    const tab = document.createElement('div')
    //add class to element
    tab.classList.add('tab')
    //add text content to element
    tab.textContent = topic
    //append elements to parent
    container.appendChild(tab)
  })

  return container
}

const tabsAppender = async (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  // const res = await axios.get('http://localhost:5001/api/topics')
  // //set topics to data from response
  // const tabs = Tabs(res.data.topics)
  // document.querySelector(selector).appendChild(tabs)

  //or:
  axios.get (`http://localhost:5001/api/topics`)
  .then(res => {
    const docu = document.querySelector(selector)
    docu.appendChild(Tabs(res.data.topics));
  })
  .catch(error => {
    console.error(error)
  })
}

export { Tabs, tabsAppender }
