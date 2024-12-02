let btn=document.querySelector("#btn")
let hide=document.querySelector(".hide")
let yes= document.querySelector("#yes")
let no= document.querySelector("#no")


function  change(){
    no.innerText="Yes"
}
function change_no(){
    no.innerText="No"
}



btn.addEventListener("click", ()=>{
    btn.style.fontfamily="cursive"
    btn.innerText="Mujhse Shadi Karogi "
    btn.style.fontFamily="cursive"
    hide.classList.remove("hide")
    no.addEventListener("mouseover", (change))
    no.addEventListener("mouseout", (change_no))
})


