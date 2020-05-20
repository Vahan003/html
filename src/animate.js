console.log("RUN...")
const swichable = document.getElementById("swichable")
const dots = document.getElementsByClassName("dot")
const imgCount = 5;
    swichable.style.backgroundImage = (`url('./components/bc-img0.png')`);
    dots[0].src = "./components/elipse-dot-blue.png"
//console.log(dots)
function slideshow(index, run){
  let imgIndex =  index
  var slide = setInterval (()=> {
    console.log("interval")
    if (imgIndex >= imgCount-1){
        imgIndex = 0
        dots[imgCount-1].src= "./components/elipse-dot.png"
        }
        else {
            imgIndex ++
        } 
        swichable.style.backgroundImage = (`url('./components/bc-img${imgIndex}.png')`);
        dots[imgIndex].src = "./components/elipse-dot-blue.png"
       dots[imgIndex-1] ? dots[imgIndex-1].src= "./components/elipse-dot.png" : null;
      
  } ,4000)
  return slide
}


const f = slideshow(0)