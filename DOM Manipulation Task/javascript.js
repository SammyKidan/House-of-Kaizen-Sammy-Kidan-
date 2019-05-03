
// 1.) Show the page after 2 seconds.

function showPage(){
  document.body.style.display = 'block';
}

setInterval(showPage, 2000);



 // 2.) Add an additional article to the 4 that are in place currently

let articles = document.getElementsByTagName("article");
let newArticle = articles[3].cloneNode(true);
document.getElementsByTagName("section")[2].appendChild(newArticle);


// 3.) After that article is added, move it's to the 2nd within the list.
newArticle.style.order = "-1";



// 4.) Answer can be found in styles.css


//  5.) When the button in the "Most Important Story" is added, change the copy to "This copy has been amended".
let selector = document.getElementById('banner');
setTimeout(function btn() {
    selector.insertAdjacentHTML('beforeend', '<button onclick="overlay()" class="button">This copy has been amended</button>');

},5000);

// 6.) Overlayy
function overlay(){
let modal = document.createElement('div');
modal.classList.add("modal");
selector.classList.toggle("modal");
}











//styled overlay
