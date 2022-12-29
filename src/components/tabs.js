import axios from "axios";

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
  const topic = document.createElement('div');
  const javascript = document.createElement('div');
  const bootstrap = document.createElement('div');
  const technology = document.createElement('div');
  const jque = document.createElement('div');
  const node = document.createElement('div');
  

  topic.classList.add('topics')
  javascript.classList.add('tab')
  bootstrap.classList.add('tab')
  technology.classList.add('tab')
  jque.classList.add('tab')
  node.classList.add('tab');

  topic.appendChild(javascript);
  topic.appendChild(bootstrap);
  topic.appendChild(technology);
  topic.appendChild(jque);
  topic.appendChild(node);

  javascript.textContent = topics[0];
  bootstrap.textContent = topics[1];
  technology.textContent = topics[2];
  jque.textContent = topics[3];
  node.textContent = topics[4];

  return topic;
}




const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  
  axios.get('http://localhost:5001/api/topics')
    .then((resp) =>{
      document.querySelector(selector).appendChild(Tabs(resp.data.topics));
    })
  }

export { Tabs, tabsAppender }
