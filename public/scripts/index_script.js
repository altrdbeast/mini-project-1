 //get rm characters
    
      document.querySelector("#rmcharacters").innerHTML = "";
      fetch("/rickmorty/firstfivecharacters")
        .then((response) => response.json())
        .then((data) => {
          data.characters.forEach((post) => {
            const template = document
              .getElementById("rm-characters")
              .content.cloneNode(true);
            template.querySelector(".name").innerText = post.name;
            template.querySelector(
              ".status"
            ).innerText = `Status: ${post.status}`;
            template.querySelector(
              ".species"
            ).innerText = `Species: ${post.species}`;
            template.querySelector(".img").src = post.image;
            document.querySelector("#rmcharacters").appendChild(template);
          });
        });
    

    //get rm episodes
    
      document.querySelector("#rmepisodes").innerHTML = "";
      fetch("/rickmorty/firstfiveepisodes")
        .then((response) => response.json())
        .then((data) => {
          data.episodes.forEach((post) => {
            const template = document
              .getElementById("rm-episodes")
              .content.cloneNode(true);
            template.querySelector(
              ".episode"
            ).innerText = `Episode: ${post.episode}`;
            template.querySelector(
              ".episode-name"
            ).innerText = `Name: ${post.name}`;
            template.querySelector(
              ".airdate"
            ).innerText = `Air date: ${post.air_date}`;
            document.querySelector("#rmepisodes").appendChild(template);
          });
        });
    

    //get rm locations
    
      document.querySelector("#rmlocations").innerHTML = "";
      fetch("rickmorty/firstfivelocations")
        .then((response) => response.json())
        .then((data) => {
          data.locations.forEach((post) => {
            const template = document
              .getElementById("rm-locations")
              .content.cloneNode(true);
            template.querySelector(
              ".location-name"
            ).innerText = `Name: ${post.name}`;
            template.querySelector(".type").innerText = `Type: ${post.type}`;
            template.querySelector(
              ".dimension"
            ).innerText = `Dimension: ${post.dimension}`;
            document.querySelector("#rmlocations").appendChild(template);
          });
        });


    

