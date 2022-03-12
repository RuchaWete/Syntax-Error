let countg = 0;
let countd = 0;
function addDay(){
    countd++;
    let idName = "d" + `${countd}`;
    let myDay = document.getElementById("parent");
    const day = document.createElement("div");
    myDay.appendChild(day);
    day.classList.add("date");

    day.setAttribute('id',`${idName}`);
   
    let dayt = document.getElementById("day").value;
    document.getElementById(`${idName}`).innerHTML = dayt;
}
function addToDo() {
    countg++;
    let idName = "t" + `${countg}`;

    // console.log(idName);
    let myDiv = document.getElementById("parent");
    
    const toDo = document.createElement("div");
    myDiv.appendChild(toDo);
    toDo.classList.add("toDo");
    toDo.setAttribute('id',idName);
   
    let goal = document.getElementById("myText").value;
    document.getElementById(`${idName}`).innerHTML = goal;

    addbtn(idName);
}
let x = 0;
function addbtn(idName){
    let myBtn = document.getElementById(`${idName}`);
    let test = "x"+`${idName}`;
    const btn = document.createElement("button");
    myBtn.appendChild(btn);
    btn.classList.add("btnn");
    btn.type = 'button';
   btn.innerHTML = "Done";
   btn.setAttribute('id',`${test}`);
   divname= document.getElementById(`${idName}`);
    

if(document.getElementById(`${test}`).clicked == true)
{
  x = 1;
  console.log(x);
}

if(x == 1){
 x = 0;
 divname.style.display = "none";
}else{
    divname.style.display = "block"
}}