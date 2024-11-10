const titleElement = document.querySelector('#main-title')
titleElement.style.textAlign = 'center'


const bodyElement = document.querySelector('body')
bodyElement.style.backgroundColor = 'lightsteelblue'



const quoteElement = document.querySelector('#quote-of-the-day');
quoteElement.textContent = "Life happens, coffee helps.";




const highlightTitles = document.querySelectorAll('.highlight-title');
highlightTitles.forEach(function(element) {
  element.style.fontStyle = 'italic';
});





const pastMenuList = document.querySelector('#past-menu-items');
const newMenuItem = document.createElement('li');
newMenuItem.textContent = 'Rose Cake';
pastMenuList.appendChild(newMenuItem);






const cafeSpecialtiesList = document.querySelector('#cafe-specialties');
const newSpecialty = document.createElement('li');
newSpecialty.textContent = 'Karak Tea';
cafeSpecialtiesList.appendChild(newSpecialty);








const blogSection = document.querySelector('#blogs');
const newBlogPost = document.createElement('div');
newBlogPost.classList.add('blog-post');

const eventTitle = document.createElement('h3');
eventTitle.textContent = 'Karak Tea Tasting Event';

const eventDescription = document.createElement('p');
eventDescription.textContent = 'We served Karak tea and it was delicious, everyone liked it.';

newBlogPost.appendChild(eventTitle);
newBlogPost.appendChild(eventDescription);
blogSection.appendChild(newBlogPost);











const fishTacosItem = Array.from(pastMenuList.children).find(item => item.textContent === 'Fish Tacos');

if (fishTacosItem) {
  pastMenuList.removeChild(fishTacosItem);
}


