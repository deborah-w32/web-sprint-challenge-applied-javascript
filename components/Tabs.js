// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

import axios from 'axios'

// {"topics":["javascript","bootstrap","technology","jquery","node.js"]}

// {
//     "topics": [
//         "javascript",
//         "bootstrap",
//         "technology",
//         "jquery",
//         "node.js"
//     ]
// }

const topicsEntry = document.querySelector('div.topics')


function createTheTabs(topicsData){
    let topicsTabs = document.createElement('div')
    topicsTabs.textContent = topicsData
    topicsTabs.classList.add('tab')
    

    return topicsTabs
}


axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then( response => {
        response.topicsData.forEach( item => {
            let theNewTabs = createTheTabs(item)
            topicsEntry.appendChild(theNewTabs)
        })
    })
    .catch( error => {
        console.log("Error:", error)
    })
    
    createTheTabs(axios.topics)