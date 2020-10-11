const url = 'https://kitsu.io/api/edge/characters'
let firstChar = document.querySelector("#char-one");
let secondChar = document.querySelector("#char-two");
let thirdChar = document.querySelector("#char-three");
let fourthChar = document.querySelector("#char-four");
let buttons = document.querySelectorAll(".header");
let articles = document.querySelectorAll(".article");

// API
// f67146a92c4344a6aaddc317e31ea9e5
fetch(url)
  .then(res => res.json())
  .then( res=> {
      // console.log("success!", res.data)
      // console.log(res.data.length)
    
      let firstDescription = document.createElement("p");
      firstDescription.innerHTML = res.data[1].attributes.description;
      // console.log(firstDescription)
      firstChar.appendChild(firstDescription);

      let secondDescription = document.createElement("p");
      secondDescription.innerHTML = res.data[3].attributes.description;
      // console.log(secondDescription)
      secondChar.appendChild(secondDescription);

      let thirdDescription = document.createElement("p");
      thirdDescription.innerHTML = res.data[0].attributes.description;
      // console.log(thirdDescription)
      thirdChar.appendChild(thirdDescription);

      let fourthDescription = document.createElement("p");
      fourthDescription.innerHTML = res.data[9].attributes.description;
      // console.log(fourthDescription)
      fourthChar.appendChild(fourthDescription);
      })
    
.catch(err => console.log("err", err))

// Accordian
buttons.forEach((button, i) => {
  button.addEventListener("click", function (evt) {
    evt.preventDefault();
    let currentClass = articles[i];
    articles.forEach((article) => {
      article.classList.remove("active");
    });
    currentClass.classList.add("active");
  });
});


// function removeHTML(str){ 
//   var tmp = document.createElement("DIV");
//   tmp.innerHTML = str;
//   return tmp.textContent || tmp.innerText || "";
// }
// var html = "/<[^>]*>/g";
// var onlyText = removeHTML(html); ""