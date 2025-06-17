
// Selection Sort Algorithm 

// Selection Sort is a simple and intuitive sorting algorithm that works by repeatedly selecting the 
// smallest (or largest) element from the unsorted portion of a list and moving it to the beginning 
// (or end) of the sorted portion.

const mediaQuery_1 = window.matchMedia('(max-width:600px)')
const mediaQuery_2 = window.matchMedia('(max-height:600px)')

async function selectionSortAlgo(){
    console.log("ok2");
    console.log(bars);
    //Array will be sorted in n-1 iteration
    for(let i=0; i<arr.length-1; i++){
        //in each iteration of outer loop, the innerloop itearion decreases as array value is going to be placed at left side (left to right)
        slider.oninput = function() {              // I can write it at 
            range=this.value;
        }
        let maxIndex=0; 
        await new Promise((resolve) => {setTimeout(resolve, range)})
        msg.innerHTML=`Current Max : ${bars[maxIndex].innerHTML} at ${maxIndex}`
        // bars[maxIndex].style.backgroundColor="black"      //here MaxIndex  is nothing but zero
        // bars[maxIndex].style.color="red"
        bars[maxIndex].style.backgroundColor="yellow"       //green
        bars[maxIndex].style.color="black"       //green
        await new Promise((resolve) => {setTimeout(resolve, range)})
        await new Promise((resolve) => {setTimeout(resolve, range)})
        
        await new Promise((resolve) => {setTimeout(resolve, range)})
        for(let j=1; j<arr.length-i; j++){
            await new Promise((resolve) => {setTimeout(resolve,range)})
            msg.innerHTML=` Selecting New Max... `
            bars[j].style.backgroundColor="black"
            bars[j].style.color="red"
            await new Promise(resolve => setTimeout(resolve, range));
            await new Promise((resolve) => {setTimeout(resolve,range)})
            await new Promise(resolve => {setTimeout(resolve, range)}); 
            if(Number(bars[maxIndex].innerHTML) < Number(bars[j].innerHTML)){
                //default bar color to privious maxIndex bar                await new Promise(resolve => {setTimeout(resolve, range/2)}); 
                // await new Promise((resolve) => {setTimeout(resolve, range/2)})
                bars[maxIndex].style.backgroundColor="#ff00009c"     //red color
                bars[maxIndex].style.color="black"
                maxIndex=j;
                await new Promise(resolve => setTimeout(resolve, range));
                msg.innerHTML=`New Max Found : ${bars[j].innerHTML} at ${j}.`
                bars[maxIndex].style.backgroundColor="yellow"
                bars[maxIndex].style.color="black"
                await new Promise(resolve => setTimeout(resolve, range));
                await new Promise(resolve => setTimeout(resolve, range));
                await new Promise(resolve => {setTimeout(resolve, range)}); 
                continue;
            }
            //if condition not satisfy than  we have to give default color/backgroundColor to our bar that is color by iterator
            bars[j].style.backgroundColor="#ff00009c"      //red
            bars[j].style.color="black"
        }

        await new Promise((resolve) => {setTimeout(resolve, range)})
        msg.innerHTML=`Placing Max in its correct position.`
        await new Promise((resolve) => {setTimeout(resolve, range)})
        await new Promise((resolve) => {setTimeout(resolve, range)})
        await new Promise((resolve) => {setTimeout(resolve, range)})
        const index=arr.length-1-i

        await new Promise((resolve) => {setTimeout(resolve, range)})
        // bars change their place (so that they can take their respective values)
        function handleMediaChange_1(e){
            // for max-width:600px and laptop
            if(e.matches){
                bars[maxIndex].style.transform=`translateX(${(index-maxIndex)*9.7}vw)`     //index=index=arr.length-1-i
                bars[arr.length-1-i].style.transform=`translateX(-${(index-maxIndex)*9.7}vw)`
            }
            else{
                bars[maxIndex].style.transform=`translateX(${(index-maxIndex)*53}px)`
                bars[arr.length-1-i].style.transform=`translateX(-${(index-maxIndex)*53}px)`
            }
        }
        await new Promise((resolve) => {setTimeout(resolve, range)})
        handleMediaChange_1(mediaQuery_1)   // we call fn here only to execute the transform
        mediaQuery_1.addEventListener('change', handleMediaChange_1)
        function handleMediaChange_2(e){
            // for max-height:600px   // ...for tablet also....
            if(e.matches){
                bars[maxIndex].style.transform=`translateX(${(index-maxIndex)*5.95}vw)`
                bars[arr.length-1-i].style.transform=`translateX(-${(index-maxIndex)*5.95}vw)`
            }
        }
        await new Promise((resolve) => {setTimeout(resolve, range)})
        handleMediaChange_2(mediaQuery_2)
        mediaQuery_2.addEventListener('change', handleMediaChange_2)

        // if you only  want for laptop
        // bars[maxIndex].style.transform=`translateX(${(index-maxIndex)*55}px)`
        // bars[arr.length-1-i].style.transform=`translateX(-${(index-maxIndex)*55}px)`
        
        // with place change, some changes going to happen and the bars have received their values.
        await new Promise((resolve) => {setTimeout(resolve, range)})
        const temp = bars[arr.length-1-i].innerHTML
        // minIndex
        bars[arr.length-1-i].innerHTML = bars[maxIndex].innerHTML
        // bars[arr.length-1-i].style.height= `${bars[arr.length-1-i].innerHTML*30}px`
        bars[arr.length-1-i].style.height= `${bars[arr.length-1-i].innerHTML*9}%`
        bars[arr.length-1-i].style.backgroundColor="yellow"
        bars[arr.length-1-i].style.color="black"
        //last index
        bars[maxIndex].innerHTML = temp
        // bars[maxIndex].style.height=`${bars[maxIndex].innerHTML*30}px`
        bars[maxIndex].style.height=`${bars[maxIndex].innerHTML*9}%`      
        bars[maxIndex].style.backgroundColor="#ff00009c"
        bars[maxIndex].style.color="black"

        // After receiveing their values they go back to their correct place
        await new Promise((resolve) => {setTimeout(resolve, range)})
        bars[maxIndex].style.transform=`translateY(${0}px)`
        bars[arr.length-1-i].style.transform=`translateY(${0}px)`
        
        
        await new Promise((resolve) => {setTimeout(resolve, range)})
        msg.innerHTML=`Max is now in its correct position.`
        bars[arr.length-1-i].style.backgroundColor="#19ac33"      //green
        bars[arr.length-1-i].style.color="black"
        await new Promise((resolve) => {setTimeout(resolve, range)})
        await new Promise((resolve) => {setTimeout(resolve, range)})
        await new Promise((resolve) => {setTimeout(resolve, range)})

    }
    await new Promise((resolve) => {setTimeout(resolve, range)})
    bars[0].style.backgroundColor="#19ac33"   //greeen
    bars[0].style.color="black"
    for(let j=0; j<arr.length; j++){
        console.log(bars[j].innerHTML)
    }

    msg.innerHTML=`✅ Selection Sort Complete!`
    msg.style.color="#4CAF50"
    enabledResetBtn()
}