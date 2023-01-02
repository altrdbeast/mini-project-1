    //fetch and display data in template
    function fetchData() {
      document.querySelector("#rmdata").innerHTML = "";
      fetch("https://rickandmortyapi.com/api/location?page=" + currentPage)
        .then((response) => response.json())
        .then((data) => {
          data.results.forEach((post) => {
            const template = document
              .getElementById("rm-data")
              .content.cloneNode(true);
            template.querySelector("#name").innerText = post.name;
            template.querySelector("#type").innerText = post.type;
            template.querySelector("#dimension").innerText = post.dimension;
            document.querySelector("#rmdata").appendChild(template);
          });
          console.log("hello");
        });
    }

    //edit fetch source to different page number
    let currentPage = 1;

    function changePage(isNext) {
      if (isNext) {
        currentPage = currentPage < 7 ? currentPage + 1 : 7;
      } else {
        currentPage = currentPage > 1 ? currentPage - 1 : 1;
      }
      fetchData();
      document.getElementById(
        "page-counter"
      ).innerHTML = `Page ${currentPage} of 7`;
    }
    fetchData();