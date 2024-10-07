const decrease = document.querySelector("#decrease");
const reset = document.querySelector("#reset");
const increase = document.querySelector("#increase");
const counting = document.querySelector(".counting");

let count = 0;
// let elem;

// const array = ['Decrease', 'Increase', 'Reset'];


// decrease.addEventListener("click", () => {
//     elem = console.log(decrease.innerText);
//     newFunction(elem);
// })

// increase.addEventListener("click", () => {
//     elem = console.log(increase.innerText);
//     newFunction(elem);
// })

// const countFunction = (element) => {
//     if(element === 'Decrease'){
//         console.log("hii!");
//         count--;
//     }
//     else if(element === 'Increase'){
//         console.log("helo");
//         console.log(count++);
//     }
//     else{
//         count = 0;
//     }
//     return count;
// }


decrease.addEventListener("click", () => {
    count--;
    counting.innerText = count; 
});

increase.addEventListener("click", () => {
        count++;
        counting.innerText = count; 
})

reset.addEventListener("click", () => {
    count = 0;
    counting.innerText = count;
})


