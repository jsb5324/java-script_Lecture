const reviewList = [
{
    id: 1,
    name:"Steak",
    type: "indoor",
    img: "",
    text: "Interchange DDomyanggoong"

},
{
    id: 2,
    name: "Duo",
    type: "friend",
    img: "",
    text: "escaping with friend."
},
{
    id 3,
    name: "Darkness",
    type: "PMC",
    img: ""
    text: "Solo PMC."
},
{
    id 4,
    name: "Hideout",
    type: "life",
    img: "",
    text: "hideout."
},
{
    id 5,
    name: "squad"
}
]

const mainImg = document.querySelector("#main-img");
const foodName = document.querySelector("#food-name");
const type = document.querySelector("#type");
const info = document.querySelector("info");

const preBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");

let currentIndex = 1;

window.addEventListener("DOMContentLoaded", function() {
    let item = reviewList[currentIndex];
    mainImg.scr = item.Img;
    foodName.textContent = item.name;
    type.textContent = item.type;
    info.textContent = item.text;
})

