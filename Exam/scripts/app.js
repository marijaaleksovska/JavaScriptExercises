let createBtn=document.getElementById("createBtn");
let tbody=document.getElementById("tbody");
let candidates=[];
var Human=function(id,name,surname,age,position,experience,education,status,note){
    this.id=id;
    this.name=name;
    this.surname=surname;
    this.age=age;
    this.position=position;
    this.experience=experience;
    this.education=education;
    this.status=status;
    this.note=note;
}
function refreshInputs(idInput, nameInput, surnameInput, ageInput, applyPInput, yearsEInput, eduEInput, status1, status2, status3, noteInput) {
    idInput.value = "";
    nameInput.value = "";
    surnameInput.value = "";
    ageInput.value = "";
    applyPInput.value = "Full-Stack .Net Developer";
    yearsEInput.value = "";
    eduEInput.value = "";
    status1.checked = false;
    status2.checked = false;
    status3.checked = false;
    noteInput.value = "";
}
let createHuman=function(){
    
    let idInput=document.getElementById("idInput");
    let nameInput=document.getElementById("nameInput");
    let surnameInput=document.getElementById("surnameInput");
    let ageInput=document.getElementById("ageInput");
    let applyPInput=document.getElementById("applyPInput");
    let yearsEInput=document.getElementById("yearsEInput");
    let eduEInput=document.getElementById("eduEInput");
    let status1=document.getElementById("status1");
    let status2=document.getElementById("status2");
    let status3=document.getElementById("status3");
    let noteInput=document.getElementById("noteInput");
    let validate=true;
    if(idInput.value=="" || nameInput.value=="" || surnameInput.value=="" || ageInput.value=="" || applyPInput.value=="" || yearsEInput.value=="" || eduEInput.value=="" || noteInput.value=="" ){
        console.log("hi");  
        alert("All the inputs are requared");
        validate=false;
      }
    if(validate==true){
        var status;
    if(status1.checked==true){
        status=status1.value;
    }
    if(status2.checked==true){
        status=status2.value;
    }
    if(status3.checked==true){
        status=status3.value;
    }

    var human=new Human(idInput.value,nameInput.value,surnameInput.value,ageInput.value,applyPInput.value,yearsEInput.value,eduEInput.value,status,noteInput.value);
    let exists=false;
    for(let i=0;i<candidates.length;i++){
       
        if(candidates[i].id==human.id){
            alert("Already exist human with that ID,write another");
            exists=true;
        
        }
        

    }
    if(exists==false){
        candidates.push(human);
        // console.log(human);
    // console.log(candidates);

    
    let tr=document.createElement("tr");

    let td1=document.createElement("td");
    td1.innerHTML=nameInput.value;

    let td2=document.createElement("td");
    td2.innerHTML=surnameInput.value;

    let td3=document.createElement("td");
    td3.innerHTML=applyPInput.value;

    let td4=document.createElement("td");
    td4.innerHTML=status;
    if(status=="In Proccess"){
        td4.style.color="black";
    }else if(status=="Rejected"){
        td4.style.color="red";

    }else if(status=="Hired"){
        td4.style.color="green";

    }


    let td5=document.createElement("td");
    let btn=document.createElement("button");
    btn.innerText="Delete";
    btn.className="btn btn-secondary";
    btn.onclick=deleteFunc;
    td5.appendChild(btn);
    let td6=document.createElement("td");
    let btn1=document.createElement("button");
    btn1.className="btn btn-secondary";
    btn1.innerText="Overview";
    btn1.onclick=function(e){
        let td=e.target.parentNode;
        console.log(td);
        let row=td.parentNode;
        console.log(row);
        let arrayTd=row.querySelectorAll("td");
        console.log(arrayTd[0].innerText);
        showModal(arrayTd[0].innerText);


    }
    td6.appendChild(btn1);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tbody.appendChild(tr);

    }
    refreshInputs(idInput, nameInput, surnameInput, ageInput, applyPInput, yearsEInput, eduEInput, status1, status2, status3, noteInput);

    }
    
 
}
createBtn.onclick=createHuman;

let deleteFunc=function(e){
    let td=e.target.parentNode;
    console.log(td);
    let row=td.parentNode;
    console.log(row);
    row.innerHTML=" ";

}
let showModal=function(nameH){

    let human;
    for(let i=0;i<candidates.length;i++){
        if(candidates[i].name==nameH){
            console.log("hi");
            human=candidates[i];
            
        }
    }
    console.log(human);
    let id=document.getElementById("id");
    id.innerText=human.id;
    let name=document.getElementById("name");
    name.innerText=human.name;
    let surname=document.getElementById("surname");
    surname.innerText=human.surname;
    let age=document.getElementById("age");
    age.innerText=human.age;
    let position=document.getElementById("position");
    position.innerText=human.position;
    let experience=document.getElementById("experience");
    experience.innerText=human.experience;
    let education=document.getElementById("edu");
    education.innerText=human.education;
    let status=document.getElementById("status");
    status.innerText=human.status;
    let note=document.getElementById("note");
    note.innerText=human.note;
    $("#exampleModalCenter").modal("show");
    
}
let changeStatus=function(e){
    let row=e.target.parentNode;
    console.log(row);
    
    let array=row.querySelectorAll("td");
    console.log(array);
    let nameH=array[0].innerText;
    array[3].innerHTML=" ";
    let select=document.createElement("select");
    let option1=document.createElement("option");
    let option2=document.createElement("option");
    let option3=document.createElement("option");
    option1.innerText="In Proccess";
    option2.innerText="Hired";
    option3.innerText="Rejected";
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    array[3].appendChild(select);
    select.onkeypress=function(e){
        if(e.keyCode==13){
            let value=select.value;
            array[3].innerText=value;
            if(value=="In Proccess"){
                array[3].style.color="black";
            }else if(value=="Rejected"){
                array[3].style.color="red";
        
            }else if(value=="Hired"){
                array[3].style.color="green";
        
            }
            let human;
            for(let i=0;i<candidates.length;i++){
                if(candidates[i].name==nameH){
                    console.log("hi");
                    human=candidates[i];
                    
                }
            }
            human.status=value;
            
    
    
         }

    }

}
tbody.ondblclick=changeStatus;


