//fetch and display data in template
function fetchData() {
  document.querySelector("#rmdata").innerHTML="";
  fetch("/rickmorty/episodes?page=" +currentPage)
    .then((response) => response.json())
    .then((data) => {
      data.results.forEach((post) => {
        const template = document
          .getElementById("rm-data")
          .content.cloneNode(true);
        template.querySelector(".accordion-button").innerText = (`Episode ${post.id}: ${post.name}`);
        template.querySelector(".accordion-button").setAttribute("data-bs-target", "#collapse" + post.id);
        template.querySelector(".accordion-collapse").id = "collapse" + post.id
        template.querySelector(".name").innerText = (`Name: ${post.name}`);
        template.querySelector(".airdate").innerText = (`Air Date: ${post.air_date}`);
        template.querySelector(".episode").innerText = (`Episode: ${post.episode}`);
        document.querySelector("#rmdata").appendChild(template);
        console.log('This is using the rickmortyController')
      });
    });
}    

//edit fetch source to different page number
let currentPage = 1;

function changePage(isNext) {
  if (isNext) {
    currentPage = (currentPage <3) ? currentPage + 1 : 3
  }
  else {
    currentPage = (currentPage > 1) ? currentPage - 1 : 1
  }
  fetchData();
  document.getElementById("page-counter").innerHTML= (`Page ${currentPage} of 3`)
}
fetchData();