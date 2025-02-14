let sidenav = document.getElementById("sidenav")
let menuicon = document.getElementById("menuicon")
let closenav = document.getElementById("closenav")

menuicon.addEventListener("click",function()
{
    sidenav.style.right=0
})

closenav.addEventListener("click",function()
{
    sidenav.style.right="-50%"
})

//product search funcionality
let productContainer = document.getElementById("product-container")
let search = document.getElementById("search")
let productlist = productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(){

    let enteredValue = event.target.value.toUpperCase()

    for(count = 0;count<productlist.length;count= count+1)
    {
        let productname = productlist[count].querySelector("h2").textContent

        if(productname.toUpperCase().indexOf(enteredValue)<0)
        {
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }
    }
})