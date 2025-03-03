//Selecting Side navbar

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")
menuicon.addEventListener("click", function () {
    sidenav.style.right = 0
})
closenav.addEventListener("click", function () {
    sidenav.style.right = "-50%"
}
)
var container =document.getElementById("product_container")    
var search = document.getElementById("search")
var productlist = container.querySelectorAll("div")
search.addEventListener("keyup", function () {
    var evalue = this.value.toUpperCase()
    for (count = 0; count < productlist.length; count = count + 1) {
        var productname =productlist[count].querySelector("h1").textContent
        if (productname.toUpperCase().indexOf(evalue) <0) {
            productlist[count].style.display = "none"

        }
        else {
            productlist[count].style.display = "block"
        }
    }

})