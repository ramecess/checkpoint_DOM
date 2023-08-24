
// var parent=document.querySelector(".products")
// var productelement=document.querySelector(".product")


const parent = document.getElementsByClassName("product")
console.log(parent)
const parents = document.getElementsByClassName("products")

for (let i = 0; i < parent.length; i++) {

    //recupération du bouton plus
    let btnPlus = parent[i].children[5].children[2]
    //recupération du bouton moins
    let btnmoins = parent[i].children[5].children[0]
    //récupération de la bouton heart
    // let btnheart =parent[i].children[0].children[0]
    // console.log(btnheart);

    //recupération du nombres d'articles
    let quantity = parent[i].children[5].children[1]
    let qty = parseInt(quantity.innerText)
    //récup du prix unitaire
    let price = parent[i].children[3].children[1]
    let prix = parseInt(price.innerText)
    //récupération du bouton supprimer
    let btnremove =parent[i].children[0].children[1]
    //total unitaire
    let totalPrice = parent[i].children[4].children[1]

    // console.log(totalPrice);
    btnPlus.addEventListener("click",function() {
        qty ++;
        quantity.innerText = qty 
        totalPrice.innerText = qty * prix ;
        
    
    })
    btnmoins.addEventListener("click",function(){
        qty --;
        quantity.innerText =qty
        totalPrice.innerText = qty * prix;
    })
    console.log(btnremove)
    const bouton=parent[i];
    btnremove.addEventListener("click",function(){
       
    bouton.remove();

    })
    
    
    

}
var btnvar=document.getElementById('btn1');

function toggle1(){
    if(btnvar.style.color=="red"){
        btnvar.style.color = "grey"
    }
    else{
        btnvar.style.color="red"
    }
}
let btnvar2=document.getElementById('btn2');
function toggle2(){
    if(btnvar2.style.color=="red"){
        btnvar2.style.color = "grey"
    }
    else{
        btnvar2.style.color="red"
    }
}
let btnvar3=document.getElementById('btn3');
function toggle3(){
    if(btnvar3.style.color=="red"){
        btnvar3.style.color = "grey"
    }
    else{
        btnvar3.style.color="red"
    }
}
let btnvar4=document.getElementById('btn4');
function toggle4(){
    if(btnvar4.style.color=="red"){
        btnvar4.style.color = "grey"
    }
    else{
        btnvar4.style.color="red"
    }
}
let btnvar5=document.getElementById('btn5');
function toggle5(){
    if(btnvar5.style.color=="red"){
        btnvar5.style.color = "grey"
    }
    else{
        btnvar5.style.color="red"
    }
}
let btnvar6=document.getElementById('btn6');
function toggle6(){
    if(btnvar6.style.color=="red"){
        btnvar6.style.color = "grey"
    }
    else{
        btnvar6.style.color="red"
    }
}
let btnvar7=document.getElementById('btn7');
function toggle7(){
    if(btnvar7.style.color=="red"){
        btnvar7.style.color = "grey"
    }
    else{
        btnvar7.style.color="red"
    }
}
let btnvar8=document.getElementById('btn8');
function toggle8(){
    if(btnvar8.style.color=="red"){
        btnvar8.style.color = "grey"
    }
    else{
        btnvar8.style.color="red"
    }
}
let btnvar9=document.getElementById('btn9');
function toggle9(){
    if(btnvar9.style.color=="red"){
        btnvar9.style.color = "grey"
    }
    else{
        btnvar9.style.color="red"
    }
}
let btnvar10=document.getElementById('btn10');
function toggle10(){
    if(btnvar10.style.color=="red"){
        btnvar10.style.color = "grey"
    }
    else{
        btnvar10.style.color="red"
    }
}
let btnvar11=document.getElementById('btn11');
function toggle11(){
    if(btnvar11.style.color=="red"){
        btnvar11.style.color = "grey"
    }
    else{
        btnvar11.style.color="red"
    }
}
let btnvar12=document.getElementById('btn12');
function toggle12(){
    if(btnvar12.style.color=="red"){
        btnvar12.style.color = "grey"
    }
    else{
        btnvar12.style.color="red"
    }
}
let btnvar13=document.getElementById('btn13');
function toggle13(){
    if(btnvar13.style.color=="red"){
        btnvar13.style.color = "grey"
    }
    else{
        btnvar13.style.color="red"
    }
}
let btnvar14=document.getElementById('btn14');
function toggle14(){
    if(btnvar14.style.color=="red"){
        btnvar14.style.color = "grey"
    }
    else{
        btnvar14.style.color="red"
    }
}
let btnvar15=document.getElementById('btn15');
function toggle15(){
    if(btnvar15.style.color=="red"){
        btnvar15.style.color = "grey"
    }
    else{
        btnvar15.style.color="red"
    }
}
let btnvar16=document.getElementById('btn16');
function toggle16(){
    if(btnvar16.style.color=="red"){
        btnvar16.style.color = "grey"
    }
    else{
        btnvar16.style.color="red"
    }
}