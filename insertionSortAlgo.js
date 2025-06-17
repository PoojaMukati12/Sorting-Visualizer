//Insertion Sort Algorithm

const mediaQuery__1 = window.matchMedia('(max-width:600px)')
// Define a media query for screens with a max-height of 600px
const mediaQuery__2 = window.matchMedia('(max-height:600px')

async function insertionSortAlgo(){
    // console.log("ok3");

    // for(let i=1; i<arr.length; i++){
    //     const key=Number(arr[i]);
    //     let j=i-1;
    //     while(Number(arr[j])>key && j>=0){
    //         arr[j+1]=arr[j];
    //         j--;
    //     }
    //     arr[j+1]=key;
    // }
    // for(let i=0; i<arr.length; i++){
    //     console.log("CC",arr[i]);
    // }

    // const sortingArea = document.querySelector('#sortingArea')

    // for (let i = 0; i < arr.length; i++) {
    //     bars[i].style.position="absolute"
    //     bars[i].style.left=`${20}px`
    // }

    await new Promise ((resolve)=>{setTimeout(resolve, range)})
    for(let i=1; i<arr.length; i++){
        slider.oninput = function() {              // I can write it at 
            range=this.value;
        }
        // let key = Number(bars[i].innerHTML)
        await new Promise ((resolve)=>{setTimeout(resolve, range)})
        msg.innerHTML=`Selecting element ${bars[i].innerHTML} for insertion.`
        bars[i].style.backgroundColor="#19ac33"     // green color
        await new Promise ((resolve)=>{setTimeout(resolve, range)})
        await new Promise ((resolve)=>{setTimeout(resolve, range)})
        
        let j=i-1;

        await new Promise ((resolve)=>{setTimeout(resolve, range)})
        while( j>=0 && Number(bars[j].innerHTML)>Number(bars[j+1].innerHTML)){

            await new Promise ((resolve)=>{setTimeout(resolve, range)})
            msg.innerHTML=`Shifting large elements to right side.`
            bars[j].style.backgroundColor="black";
            bars[j].style.color="red";
            await new Promise ((resolve)=>{setTimeout(resolve, range)})
            await new Promise ((resolve)=>{setTimeout(resolve, range)})

            // bars[j].style.transform = `translateX(${53}px)`;
            // bars[j+1].style.transform = `translateX(-${53}px)`;
            function handleMediaChange_1(e){
                if(e.matches){
                    // for max-width:600px 
                    bars[j].style.transform=`translateX(${9.7}vw)`     //index=index=arr.length-1-i
                    bars[j+1].style.transform=`translateX(-${9.7}vw)`
                }
                else{
                    // for laptop
                    bars[j].style.transform = `translateX(${53}px)`;
                    bars[j+1].style.transform = `translateX(-${53}px)`;
                }
            }
            // Add an event listener that listens for changes in the media query state
            mediaQuery__1.addEventListener('change', function(e){
                handleMediaChange_1(e)
            })
            // Call the function to check the initial state of the media query
            handleMediaChange_1(mediaQuery__1)
            
            function handleMediaChange_2(e){
                if(e.matches){
                    bars[j].style.transform=`translateX(${5.95}vw)`
                    bars[j+1].style.transform=`translateX(-${5.95}vw)`
                }
            }
            mediaQuery__2.addEventListener('change', (e)=>{handleMediaChange_2(e)})
            handleMediaChange_2(mediaQuery__2)

            await new Promise ((resolve)=>{setTimeout(resolve, range)})
            const temp=bars[j+1].innerHTML
            bars[j+1].innerHTML=bars[j].innerHTML;           //insertion process
            bars[j+1].style.height=`${bars[j+1].innerHTML*9}%`
            bars[j+1].style.backgroundColor="black";
            bars[j+1].style.color="red";
            bars[j].innerHTML=temp;
            bars[j].style.height=`${bars[j].innerHTML*9}%`
            bars[j].style.backgroundColor="#19ac33";      //green color
            bars[j].style.color="black";      //green color
            

            await new Promise ((resolve)=>{setTimeout(resolve, range)})
            bars[j].style.transform = `translateX(${0}px)`;
            bars[j+1].style.transform =`translateX(${0}px)`;
            await new Promise ((resolve)=>{setTimeout(resolve, range)})
            bars[j+1].style.backgroundColor="#ff00009c";   //red
            bars[j+1].style.color="black";

            await new Promise ((resolve)=>{setTimeout(resolve, range)})
            j--;

        }
        await new Promise ((resolve)=>{setTimeout(resolve, range)})
        msg.innerHTML=`${bars[j+1].innerHTML} is inserted in its rightful place.`
        await new Promise ((resolve)=>{setTimeout(resolve, range)})
        await new Promise ((resolve)=>{setTimeout(resolve, range)})
        await new Promise ((resolve)=>{setTimeout(resolve, range)})
        bars[i].style.backgroundColor="#ff00009c";    //red
        bars[j+1].style.backgroundColor="#ff00009c";

    }

    msg.innerHTML=`All elements are in place.`
    await new Promise ((resolve)=>{setTimeout(resolve, range)})
    for(let i=0; i<arr.length; i++){
        await new Promise ((resolve)=>{setTimeout(resolve, range/2)})
        bars[i].style.backgroundColor="#19ac33"
    }

    await new Promise ((resolve)=>{setTimeout(resolve, range)})
    await new Promise ((resolve)=>{setTimeout(resolve, range)})
    msg.innerHTML=`✅ Selection Sort Complete!`
    msg.style.color="#4CAF50"
    enabledResetBtn()

}