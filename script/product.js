
 const loadCategories = () =>{
    fetch ("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((data) => showButton(data))
 }
  
 const showButton = (btnCatagories) =>{
    // console.log(btnCatagories) //ok data asche
    const container = document.getElementById("4btn-Container");
    container.innerHTML = "";

 const fourButton = btnCatagories.slice(0, 4)

    for( let btncatagorie of fourButton ){
        // console.log(btncatagorie); //ok catagories 

        const div = document.createElement("div");

        div.innerHTML = `

        <button id="lesson-btn- ${btncatagorie}"  class =" btn rounded-xl px-5 py-2 border" >
        ${btncatagorie}
        </button>
        
        `;
        container.appendChild(div);
    }
 }

 loadCategories();

 
 const loadProduct = () =>{
    const url = `https://fakestoreapi.com/products`
    // console.log(url);
    fetch(url)
    .then((res) => res.json())
    .then ((data) => seenProduct(data))
 } 

 const loadProductDetail = async(id) => {
     const url = `https://fakestoreapi.com/products/${id}`
    //  console.log(url)

    const res = await fetch(url);
const details = await res.json();
displayProductDetails(details.data)

 }

const displayProductDetails = (Dproduct) =>{
    // console.log(Dproduct)
    const detailsBox = document.getElementById("details-container")
    detailsBox.innerHTML ="hi iam from js";
    document.getElementById("word_modal").showModal();
}






const seenProduct = (Products) => {
    const productContainer = document.getElementById("product-container");
   productContainer.innerHTML = "";

    Products.forEach(product => {
        const card = document.createElement("div");
        
         
        card.innerHTML = `
        <div class=" rounded-lg p-5 flex flex-col w-full h-[500px] bg-white shadow-sm">
            
            <img class="w-full h-48 object-contain mb-3" src="${product.image}" />
            
            <div class="flex justify-between text-sm text-gray-500 mb-2">
                <span class="uppercase font-semibold">${product.category}</span>
                <span class="flex items-center">
                    <span class="text-yellow-400">&#9733;</span>
                    <b class="ml-1 text-black">${product.rating.rate}</b>
                    <span class="ml-1 text-gray-400">(${product.rating.count})</span>
                </span>
            </div>

            <div class="flex-grow">
                <h3 class="font-bold text-lg line-clamp-2">${product.title}</h3>
                <p class="text-xl font-bold mt-2 text-blue-600">$${product.price}</p>
            </div>

            <div class="flex justify-between items-center mt-4 gap-2"> 
                <button onclick ="loadProductDetail(${product.id})" class="btn  px-4 py-2 rounded flex-1 hover:bg-gray-100 transition">Details</button>
                <button class="btn btn-primary bg-blue-600 text-white px-4 py-2 rounded flex-1 hover:bg-blue-700 transition">Add to Cart</button>
            </div>
            
        </div>
        `;

        productContainer.append(card);
    });
}
loadProduct();
 



 