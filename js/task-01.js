

const categoriesRef = document.querySelectorAll("li.item");
console.log(`Numbers of categories: ${categoriesRef.length}`);
console.log("");

//                 Методом - forEach
// categoriesRef.forEach(category => {
//     console.log(`Category: ${category.querySelector("h2").textContent}`);
//     console.log(`Elements:  ${category.querySelectorAll("li").length}`);
//     console.log("");
// })

//                 Методом - map
const categoriesArr = [...categoriesRef].map(category => 
    `Category: ${category.querySelector("h2").textContent}
    Elements: ${category.querySelectorAll("li").length}`
);
categoriesArr.forEach(el => console.log(el));