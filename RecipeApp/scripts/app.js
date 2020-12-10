var arrayRecipe=[];
let Create =function(name,type,descriptions,directions,img){
    this.name=name;
    this.type=type;
    this.descriptions=descriptions;
    this.directions=directions;
    this.img=img;

}

let cardDiv=document.getElementById("cardDiv");

let add=function(){
    let nameInput=document.getElementById("nameInput");
    let typeInput=document.getElementById("typeInput");
    let descriptionInput=document.getElementById("descriptionInput");
    let directionsInput=document.getElementById("directionInput");
    let imageInput=document.getElementById("imageInput");
    let recipe= new Create(nameInput.value,typeInput.value,descriptionInput.value,directionsInput.value,imageInput.value);
    arrayRecipe.push(recipe);
    console.log(recipe);
    console.log(arrayRecipe);

    let card=document.createElement("div");
    card.style.maxWidth="18rem";
    card.className=" card bg-light mb-3 border-primary";
    let img=document.createElement("img");
    img.src=imageInput.value;
    img.style.width="100%";
    img.style.height="200px";

    img.className="card-img-top";
    card.appendChild(img);
    let cardbody=document.createElement("div");
    cardbody.className="card-body";
    let name=document.createElement("h5");
    name.className="card-title";
    name.innerHTML=nameInput.value;

    let p=document.createElement("p");
    p.className="card-text";
    p.innerHTML=descriptionInput.value;

    let btn=document.createElement("button");
    btn.innerHTML="See Recipe";
    btn.type="button";
    btn.id="seeBtn";
    btn.className="btn btn-secondary";
    btn.onclick=function(){
        showModal(nameInput.value);
    }
  
    cardbody.appendChild(name);
    cardbody.appendChild(p);
    cardbody.appendChild(btn);
    card.appendChild(cardbody);
    cardDiv.appendChild(card);
}
let showModal=function(name1){

    let recipe;
    for(let i=0;i<arrayRecipe.length;i++){
        if(arrayRecipe[i].name==name1){
            recipe=arrayRecipe[i];
            
        }
    }
    console.log(recipe);
    let recipeName=document.getElementById("recipeName");
    recipeName.innerText=recipe.name;
    let image=document.getElementById("recipeImg");
    image.src=recipe.img;
    let description=document.getElementById("recipeDescription");
    description.innerText=recipe.descriptions;
    let directions=document.getElementById("recipeDirections");
    directions.innerHTML=recipe.directions;
    let type=document.getElementById("recipeType");
    type.innerText=recipe.type;

    $("#exampleModalCenter1").modal("show");
    


}
let btn=document.getElementById("saveBtn");
btn.onclick=add;