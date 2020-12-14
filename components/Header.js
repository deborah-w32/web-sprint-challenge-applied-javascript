// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const headerParent = document.querySelector('div.header-container');

function Header(date, h1, temp) {
    const headerDiv = document.createElement('div');
    const spanDate = document.createElement('span');
    const lambdaH1 = document.createElement('h1');
    const spanTemp = document.createElement('span');

    headerParent.appendChild(headerDiv);
    headerDiv.appendChild(spanDate);
    headerDiv.appendChild(lambdaH1);
    headerDiv.appendChild(spanTemp);

    headerDiv.className = 'header';
    spanDate.className = 'date';
    spanTemp.className = 'temp';

    spanDate.textContent = date;
    lambdaH1.textContent = h1;
    spanTemp.textContent = temp;

    return headerDiv;
}

Header('MARCH 28, 2020', 'Lambda Times', '98°');

