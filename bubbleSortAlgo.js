// Bubble Sort Algorithm 

// Bubble Sort is a simple and intuitive sorting algorithm that repeatedly steps through the list, compares 
// adjacent elements, and swaps them if they are in the wrong order. This process is repeated until the list 
// is sorted.

const mediaQuery1 = window.matchMedia('(max-width:600px)');
const mediaQuery2 = window.matchMedia('(max-height:600px)');

// this 2 line I can write in main js file and use here
const bars = document.querySelectorAll('.bar')           //when i write this line in main js file than soritng is not working
const msg=document.getElementById('msg')

// TC : O(n^2)  // here n is nothing but arrays
async function bubbleSortAlgo(range){
    // console.log("ok1");
    // console.log(bars);

    //Array will be sorted in n-1 iteration
    for(let i=0; i<arr.length-1; i++){
        slider.oninput = function() {              // I can write it at 
            range=this.value;
        }
        // Array iteartion decreses as the array value will be placed at right index(at last) in each iteration
        for(let j=0; j<arr.length-1-i; j++){
            // console.log(bars[i].textContent);
                await new Promise(function(resolve) {
                    setTimeout(function() {
                        resolve();
                    }, range);
                });
                bars[j].style.backgroundColor='black'           // yellow hex code:#f7ed45 
                bars[j].style.color="red"
                bars[j+1].style.backgroundColor='black'
                bars[j+1].style.color="red"
                // bars[j].style.color="aqua"
                // bars[j+1].style.color="aqua"
                msg.innerHTML=`Comparing elements : ${bars[j].innerHTML} and ${bars[j+1].innerHTML}`
                await new Promise((resolve) => {setTimeout(resolve, range)}); 

                await new Promise((resolve) => {setTimeout(resolve, range)});      // range at place of 500, i.e decided by slider 
                // if(arr[j]>arr[j+1]){ }  // if you use array don't write directly arr[j]>arr[j+1] if ur element are string as you directly take them from div after split the string 
                if(Number(bars[j].innerHTML)>Number(bars[j+1].innerHTML)){      //same here Number used to convert string to number for comparison
                    await new Promise((resolve) => {setTimeout(resolve, range/2)});
                    msg.innerHTML=`Swap elements: ${bars[j].innerHTML} ⇄ ${bars[j+1].innerHTML}`

                    // bars change their place (so that they can take their respective values)
                    function handleMediachange_1(e){
                        // for max-width:600px and laptop
                        console.log(e.matches)     // false for tablet screen and if mobile rotate
                        if(e.matches){
                            bars[j].style.transform = `translateX(${9.7}vw)`;       // for portrait device 
                            bars[j + 1].style.transform = `translateX(${-9.7}vw)`;
                        }
                        else{
                            bars[j].style.transform = `translateX(${53}px)`;       // for landscape device
                            bars[j + 1].style.transform = `translateX(${-53}px)`;
                        }
                    }
                    // Call the function to check the initial state of the media query
                    handleMediachange_1(mediaQuery1);
                    // Add an event listener that listens for changes in the media query state
                    mediaQuery1.addEventListener('change',handleMediachange_1);      // if any changes in mediaQuery that we defined at top most
                    
                    function handleMediaChange_2(e){
                        // for max-height:600px    // ...for tablet also....
                        if(e.matches){
                            bars[j].style.transform = `translateX(${5.9}vw)`;       // for portrait device 
                            bars[j + 1].style.transform = `translateX(${-5.9}vw)`;
                        }
                    }
                    handleMediaChange_2(mediaQuery2);
                    mediaQuery2.addEventListener('change',handleMediaChange_2);

                    // if you only  want for laptop
                    // bars[j].style.transform = `translateX(${53}px)`;          //we will write this fn inside the fn that decide media query for transform, translate
                    // bars[j + 1].style.transform = `translateX(${-53}px)`;
                    

                    //with place change, some changes going to happen and The bars will receive their values.
                    await new Promise(resolve => setTimeout(resolve, range));
                    const temp = bars[j].innerHTML
                    bars[j].innerHTML = bars[j+1].innerHTML
                    // bars[j].style.height = `${bars[j].innerHTML*30}px`
                    bars[j].style.height = `${bars[j].innerHTML*9}%`        // update for responsiveness
                    bars[j+1].innerHTML = temp
                    // bars[j+1].style.height = `${bars[j+1].innerHTML*30}px`
                    bars[j+1].style.height = `${bars[j+1].innerHTML*9}%`

                    // After receiveing their values they go back to their correct place
                    await new Promise(resolve => setTimeout(resolve, range));
                    bars[j].style.transform = `translateX(${0}px)`;
                    bars[j + 1].style.transform = `translateX(${0}px)`;

                }
                bars[j].style.backgroundColor = '#ff00009c'          //red
                bars[j].style.color="black"
                bars[j + 1].style.backgroundColor = '#ff00009c'
                bars[j+1].style.color="black"
        }
        await new Promise(resolve => setTimeout(resolve, range/2));
        bars[arr.length - i - 1].style.backgroundColor = '#19ac33';   //green
    }
    await new Promise(resolve => setTimeout(resolve, range));
    bars[0].style.backgroundColor='#19ac33'     // to color the first bar that is not at correct index
    msg.innerHTML=`✅ Bubble Sort Complete!`
    msg.style.color="#4CAF50"
    
    enabledResetBtn()
    // arr.forEach((elements)=>{     // value of array not change with swaping
    //     console.log(elements);
        
    // })

}