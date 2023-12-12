let listdata=[]

async function getdata(type){
let res=await fetch(`https://forkify-api.herokuapp.com/api/search?q=${type}`)
let dataa= await res.json()
 listdata=dataa.recipes
console.log(listdata)
display()

}
getdata("pizza")

function display(){
    let temp=""
  listdata.forEach((e)=>{
       temp+=` <div data-bs-toggle="modal" data-bs-target="#exampleModal" id="${e.recipe_id}" class="itemm col-lg-4 col-sm-6 col-sm-3">
       <div class="item bg-light text-center rounded-3 border-1 border-info border">
         <img src="${e.image_url}" class="w-50 rounded-circle position-relative shadow ">
         <p class="fs-4 ">${e.title}</p>
         <h2 class="text-muted">${e.recipe_id}</h2>
       </div>
     </div>` 
    })
    document.querySelector(".row").innerHTML=temp
  
      getitem()
    
    
} 



let navs=document.querySelectorAll(".nav-link ")

for(let i=0 ; i<navs.length;i++){
    navs[i].addEventListener("click",function(e){
let typee=e.target.getAttribute("type")
getdata(typee)
    })
}

let resdataa={}
async function spacData(id){
let res=await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
 let resdata=await res.json()
 resdataa=resdata.recipe
console.log(resdata)
displaySpacData()

}
function getitem(){

let items=document.querySelectorAll(".itemm")
console.log(items)

for(let i=0;i<items.length;i++){
items[i].addEventListener("click",function(e){
  let idd=this.id
  spacData(idd)
})
}


}
function displaySpacData(){
document.querySelector(".modalimg").setAttribute("src",resdataa.image_url)
document.querySelector(".modaltitle").innerHTML=resdataa.title
let temp=''
resdataa.ingredients.forEach(e=>{
  
  temp+=`<li>${e}</li>`

})

// for(let e=0;e<resdataa.ingredients;e++)
// {
//   console.log(1)
//   temp+=`<li>${resdataa.ingredients[e]}</li>`
// }

document.querySelector(".modalList").innerHTML=temp
}
