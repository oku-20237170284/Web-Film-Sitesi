const arrows = document.querySelectorAll(".arrow");
const movielists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
   let clickcounter=0;
   const imageitem=movielists[i].querySelectorAll("img").length;
   arrow.addEventListener("click", function(){
    clickcounter++;
    if(imageitem - (4+clickcounter) >=0) {
        movielists[i].style.transform= `trasnlateX(${
            movielists[i].computedStyleMap().get("trasnform")[0].x.value -300
        }px)`;

    } else{
        movielists[i].style.transform="trasnlateX(0)";  
    }
   }
)
}
/* dark mode */
const ball=document.querySelector(".toggle-ball")
const items=document.querySelectorAll(".container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.movie-list-tittle")

ball addEventListener("click", function){
    items forEach((item) >= item.classlist.toggle("active"));
    
    
}
