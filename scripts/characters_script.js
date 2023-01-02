    //fetch and display data in template
    function fetchData() {
      document.querySelector("#rmdata").innerHTML = "";
      fetch("https://rickandmortyapi.com/api/character?page=" + currentPage)
        .then((response) => response.json())
        .then((data) => {
          data.results.forEach((post) => {
            const template = document
              .getElementById("rm-data")
              .content.cloneNode(true);
            template.querySelector(".name").innerText = post.name;
            template.querySelector(
              ".status"
            ).innerText = `Status: ${post.status}`;
            template.querySelector(
              ".species"
            ).innerText = `Species: ${post.species}`;
            template.querySelector(".img").src = post.image;
            document.querySelector("#rmdata").appendChild(template);
          });
        });
    }

    //edit fetch source to different page number
    let currentPage = 1;
    function changePage(isNext) {
      if (isNext) {
        currentPage = currentPage < 42 ? currentPage + 1 : 42;
      } else {
        currentPage = currentPage > 1 ? currentPage - 1 : 1;
      }
      fetchData();
      document.getElementById(
        "page-counter"
      ).innerHTML = `Page ${currentPage} of 42`;
    }
    fetchData();
