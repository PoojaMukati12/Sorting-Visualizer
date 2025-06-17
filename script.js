// animation work code
window.onload = function(){
    setTimeout(function(){
        const intro = document.getElementById('intro_by_animation')
        const mainContent = document.querySelector('.main')

        intro.style.display='none'           // hide the intro
        mainContent.style.display='block'       // show the main content

        setTimeout(function(){
            mainContent.style.opacity=1;   
        }, 100)         // Slight delay to ensure display change takes effect
    },5000)       // 5 seconds delay before showing main content
}

const elements=document.getElementById('elements');
console.log(elements);   //5,3,11,1,6,2,7,9,4,10
const string = elements.textContent
console.log(string);

console.log(typeof string);    //string

const tempArr = string.split(',')
const arr = string.split(',')     //conversion string into array of string
console.log(typeof arr);

const sortingArea=document.querySelector('#sortingArea')
function generateNewArray(){
    arr.forEach(function(element, index){
        const div = document.createElement('div')
        div.className="bar"
        div.id=`${index}`
        const textNode = document.createTextNode(`${element}`)
        div.appendChild(textNode)
        // div.style.height=`${element*30}px`
        div.style.height=`${element*9}%`
        div.style.width="45px"
        div.style.backgroundColor="#ff00009c"
        div.style.color="black"
        div.style.fontWeight="bold"
        div.style.fontSize="25px"
        div.style.display="flex"    // for element 
        div.style.justifyContent="center"
        div.style.alignItems="end"
        div.style.transform=`translate(0)`
        sortingArea.appendChild(div)
    })
}

const slider = document.getElementById("myRange");
let range=400

slider.oninput = function() {
    range=this.value;
}

const sortingOptions = document.querySelectorAll('.sort');
console.log(sortingOptions);       //nodelist

sortingOptions.forEach(function(option,index){
    console.log(option.id);
    const element = document.getElementById(option.id)
    // const arr = [false, false, false]

      element.addEventListener('click', (e)=>{ 
       
        const optionElement = document.getElementById(`${e.target.id}`)
        reset()
        console.log(reset());
        optionElement.style.color="#0909FF"    //blue
        msg.style.color="black"                 //recolor black on each selection black so that only sorting cmplt msg in green only 
        msg.innerHTML=``

        disabledResetBtn()
        // to make option disable 
        sortingOptions.forEach(function(option,index){
            if(e.target.id!=option.id){
                console.log("jjj"+option.id);
                
                document.getElementById(option.id).style.color="gray"
            }
            // we make all option disable to react to pointer event (also the selected one)
            document.getElementById(option.id).style.pointerEvents="none"  
        })

        startSorting(e.target.id)


    })
})

//fn that that reset number
function reset(){
    // 1 reset work
    // console.log(bars);
    const bars=document.querySelectorAll('.bar')
    arr.forEach((value,i)=>{
        // console.log(bars[i]);
        bars[i].innerHTML=value
        bars[i].style.color="black";
        bars[i].style.backgroundColor="#ff00009c";
        // bars[i].style.height=`${value*30}px`
        bars[i].style.height=`${value*9}%`
    })
     // 2 reset work
    sortingOptions.forEach((option) => {
        // in reset i only need that the one selected option get deleted, but i reset all of them (no changes going to effect)
        document.getElementById(`${option.id}`).style.color='black'
        // make all option able to react to pointer event
        document.getElementById(option.id).style.pointerEvents="auto"
    })
    
    tempArr.forEach(function(element, index){
        bars[index].innerHTML=`${element}`
    })


    slider.value=400                 // to relocate range circle at center with setting its default value
    range=400;     // range ki value bhi update krna hi pde gi
    msg.innerHTML="Select your sorting algorithm..."
    msg.style.color="blue"
}

const resetBtn = document.getElementById('reset')

resetBtn.addEventListener('click',(e)=>{
    reset()
    disabledResetBtn()
})

function disabledResetBtn(){
    resetBtn.classList.add('disabled')    // disabled is nothing but style block added/remove according situation
}
function enabledResetBtn(){
    resetBtn.classList.remove('disabled')
}

function startSorting(sortType){
    //console.log(typeof sortType);   // string   //sortType is string to use it as fn  we will use object

    const sortingMethods= {
        bubbleSortAlgo : async function(){
            await new Promise(function(resolve) { setTimeout(function() {resolve();}, range); });     // await requires async keyword with fn
            await new Promise(function(resolve) { setTimeout(function() {resolve();}, range); });      // await requires async keyword with fn
            msg.innerHTML=`Algorithm is beginning to sort...`
            await new Promise(resolve => setTimeout(resolve, range));
            await new Promise(resolve => setTimeout(resolve, range));
            msg.innerHTML=``
            await new Promise(resolve => setTimeout(resolve, range));
            await bubbleSortAlgo(range)               // we can also direct fn  // i put await so that after bubble sort only the disable option can convert into able
            await new Promise(resolve => setTimeout(resolve, range));
            // to make other option able to react to pointer event
            sortingOptions.forEach(function(option,index){
                if(sortType!=option.id){
                    console.log("jjj"+option.id);
                    document.getElementById(option.id).style.color="black"
                }
                document.getElementById(option.id).style.pointerEvents="auto"
            })
        },
        selectionSortAlgo : async function(){
            await new Promise(resolve => setTimeout(resolve, range));   
            await new Promise(resolve => setTimeout(resolve, range));   
            msg.innerHTML=`Algorithm is beginning to sort...`
            await new Promise(resolve => setTimeout(resolve, range));
            await new Promise(resolve => setTimeout(resolve, range));
            msg.innerHTML=``
            await new Promise(resolve => setTimeout(resolve, range));
            await selectionSortAlgo(range)
            await new Promise(resolve => setTimeout(resolve, range));
            // to make other option able to react to pointer event
            sortingOptions.forEach(function(option,index){
                if(sortType!=option.id){
                    console.log("jjj"+option.id);
                    document.getElementById(option.id).style.color="black"
                }
                document.getElementById(option.id).style.pointerEvents="auto"
            })
        },
        insertionSortAlgo : async function(){
            await new Promise(resolve => setTimeout(resolve, range));     
            await new Promise(resolve => setTimeout(resolve, range));     
            msg.innerHTML=`Algorithm is beginning to sort...`
            await new Promise(resolve => setTimeout(resolve, range));
            await new Promise(resolve => setTimeout(resolve, range));
            msg.innerHTML=``
            await new Promise(resolve => setTimeout(resolve, range));
            await insertionSortAlgo (range)
            await new Promise(resolve => setTimeout(resolve, range));
            // to make other option able to react to pointer event
            sortingOptions.forEach(function(option,index){
                if(sortType!=option.id){
                    console.log("jjj"+option.id);
                    document.getElementById(option.id).style.color="black"
                }
                document.getElementById(option.id).style.pointerEvents="auto"
            })
        }
    }
    console.log(sortingMethods[sortType]);    // o/p : f() {  bubbleSortAlgo() }
    sortingMethods[sortType]();      //sortType is string for string we always use only this syntax, but how we easily use it in form of fn
}

generateNewArray()
disabledResetBtn()