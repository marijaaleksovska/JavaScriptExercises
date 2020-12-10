let addMovieBtn=document.getElementById("addMovie");
let movies=[];
let wacthed=[];
let favorite=[];
let watchlist=[];
let Movie=function(name,type,description){
    this.name=name;
    this.type=type;
    this.description=description;
    

}
function createCard(imgInput, nameInput, typeInput, descriptionInput,imgSrc1,imgSrc2) {
    let { divAll, divFav, divW, divWL } = getDivs();
    let column = document.createElement("div");
    column.className = "col-12 col-md-6 col-lg-3";

    let card = document.createElement("div");
    card.className = "card";

    let image = document.createElement("img");
    image.className = "card-img-top";
    image.src = imgInput.value;

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    let cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.innerHTML = nameInput.value + "<br>" + typeInput.value;

    let cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.innerText = descriptionInput.value;

    let divImg=document.createElement("div");
    divImg.style.display="flex";
    divImg.style.justifyContent="space-around";
    divImg.style.flexDirection="row";
    divImg.style.alignItems="right";

    let img1=document.createElement("img");
    img1.src=imgSrc1;
    img1.style.width="30px";
    img1.onclick=function(e){
        console.log(e.target.parentNode.parentNode.parentNode.parentNode.parentNode);
      if(e.target.parentNode.parentNode.parentNode.parentNode.parentNode==divAll){
          console.log("hi");
          if(imgSrc1=="./images/success.png"){
            console.log("hi");
            imgSrc1="./images/verified.png";
            let images=divImg.querySelectorAll("img");
            images[0].src=imgSrc1;
           

          }else{
            console.log("hi");
            imgSrc1="./images/success.png";
            let images=divImg.querySelectorAll("img");
            images[0].src=imgSrc1;
            //dodaj vo watced
            
          }
          
      }else if(e.target.parentNode.parentNode.parentNode.parentNode.parentNode==divW){
        e.target.parentNode.parentNode.parentNode.parentNode.outerHTML="";
        //smeni vo all img za not watched

      }else if(e.target.parentNode.parentNode.parentNode.parentNode.parentNode==divWL){
        e.target.parentNode.parentNode.parentNode.parentNode.outerHTML="";
        //dodaj go vo wached

      }
    }
    

    let img2=document.createElement("img");
    img2.src=imgSrc2;
    img2.style.width="30px";
    img2.onclick=function(e){
        console.log(e.target.parentNode.parentNode.parentNode.parentNode.parentNode);
      if(e.target.parentNode.parentNode.parentNode.parentNode.parentNode==divAll){
          console.log("hi");
          if(imgSrc2=="./images/like.png"){
            console.log("hi");
            imgSrc2="./images/heart.png";
            let images=divImg.querySelectorAll("img");
            images[1].src=imgSrc2;
            //izbrisi od favs
          }else{
            console.log("hi");
            imgSrc2="./images/like.png";
            let images=divImg.querySelectorAll("img");
            images[1].src=imgSrc2;
            //dodaj vo favs
          }
          
      }else if(e.target.parentNode.parentNode.parentNode.parentNode.parentNode==divFav){
        e.target.parentNode.parentNode.parentNode.parentNode.outerHTML="";
        //smeni vo all img za not favorite
       
      }else if(e.target.parentNode.parentNode.parentNode.parentNode.parentNode==divWL){
        console.log("hi");
          imgSrc2="./images/heart.png";
          let images=divImg.querySelectorAll("img");
          images[1].src=imgSrc2;
          //dodaj vo favs
    }
    }

    divImg.appendChild(img1);
    divImg.appendChild(img2);

    
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(divImg);
    card.appendChild(image);
    card.appendChild(cardBody);
    column.appendChild(card);
    return column;
}
function refreshInputs(nameInput, typeInput, descriptionInput, imgInput) {
    nameInput.value = "";
    typeInput.value = "Comedy";
    descriptionInput.value = "";
    imgInput.value = "";
}
function getInputs() {
    let nameInput = document.getElementById("nameInput");
    let typeInput = document.getElementById("typeInput");
    let descriptionInput = document.getElementById("descriptionInput");
    let imgInput = document.getElementById("imgInput");
    let checkBox1 = document.getElementById("checkbox1");
    let checkBox2 = document.getElementById("checkbox2");
    return { checkBox1, checkBox2, nameInput, typeInput, descriptionInput, imgInput };
}
function getDivs() {
    let divAll = document.getElementById("rowContainerAll");
    let divW = document.getElementById("rowContainerW");
    let divWL = document.getElementById("rowContainerWL");
    let divFav = document.getElementById("rowContainerFav");
    return { divAll, divFav, divW, divWL };
}


let add=function(){
    let { checkBox1, checkBox2, nameInput, typeInput, descriptionInput, imgInput } = getInputs();
    let { divAll, divFav, divW, divWL } = getDivs();
    console.log(divAll);
    console.log(checkBox1.checked);
    console.log(checkBox2.checked);

    if(checkBox1.checked==true && checkBox2.checked==true){
        console.log("hi");
        let movie=new Movie(nameInput.value,typeInput.value,descriptionInput.value);
        movies.push(movie);
        wacthed.push(movie);
        favorite.push(movie);
        let column = createCard(imgInput, nameInput, typeInput, descriptionInput,"./images/success.png","./images/like.png");
        let column1 = createCard(imgInput, nameInput, typeInput, descriptionInput,"./images/success.png","./images/like.png");
        let column2 = createCard(imgInput, nameInput, typeInput, descriptionInput,"./images/success.png","./images/like.png");
        
        

        divFav.appendChild(column);
        divAll.appendChild(column1);
        divW.appendChild(column2);

    }else{
        if(checkBox1.checked==true){
            let movie=new Movie(nameInput.value,typeInput.value,descriptionInput.value);
            movies.push(movie);
            wacthed.push(movie);
            let column = createCard(imgInput, nameInput, typeInput, descriptionInput,"./images/success.png","./images/heart.png");
            let column1 = createCard(imgInput, nameInput, typeInput, descriptionInput,"./images/success.png","./images/heart.png");
            divAll.appendChild(column);
            divW.appendChild(column1);
        }
        if(checkBox2.checked==true){
            let movie=new Movie(nameInput.value,typeInput.value,descriptionInput.value);
            movies.push(movie);
            favorite.push(movie);
            watchlist.push(movies);
            let column = createCard(imgInput, nameInput, typeInput, descriptionInput,"./images/verified.png","./images/like.png");
            let column1 = createCard(imgInput, nameInput, typeInput, descriptionInput,"./images/verified.png","./images/like.png");
            let column2 = createCard(imgInput, nameInput, typeInput, descriptionInput,"./images/verified.png","./images/like.png");
            divAll.appendChild(column);
            divFav.appendChild(column1);
            divWL.appendChild(column2);
        }
        if(checkBox1.checked==0 && checkBox2.checked==0){
            let movie=new Movie(nameInput.value,typeInput.value,descriptionInput.value);
            movies.push(movie);
            watchlist.push(movies);
            let column = createCard(imgInput, nameInput, typeInput, descriptionInput,"./images/verified.png","./images/heart.png");
            let column1 = createCard(imgInput, nameInput, typeInput, descriptionInput,"./images/verified.png","./images/heart.png");
            divAll.appendChild(column);
            divWL.appendChild(column1);


        }

    }
    refreshInputs(nameInput, typeInput, descriptionInput, imgInput);

}

let div=document.getElementById("divContainer");
addMovieBtn.onclick=function(){
    
    if(div.style.display=="none"){
        div.style.display="block";

    }else{
        div.style.display="none";

    }
}

let btn=document.getElementById("add");
btn.onclick=add;

let btn1=document.getElementById("cancel");
btn1.onclick=function(){
    div.style.display="none";


}




