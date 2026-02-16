//  console.log("js add hoiche ")

fetch("https://fakestoreapi.com/products")
.then((res) => res.json())
.then((products) => {

products.forEach(products) => {
    console.log(products.rating.rate)
}



})