
fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => displayProducts(data));

const displayProducts = (products) => {
    // rating অনুযায়ী বড় থেকে ছোট sort
    const sortedProducts = products.sort((a, b) => b.rating.rate - a.rating.rate);

    // top 3 products
    const top3 = sortedProducts.slice(0, 3);
    //   console.log(top3)

    // container
    const container = document.getElementById("product-container");
    container.innerHTML = "";

    // show top 3
    top3.forEach((product) => {
        // console.log(product.category)
        const div = document.createElement("div");
        div.innerHTML = `
 
   <div class ="border-2 p-10 m-5 rounded ">
      
        <img class =" w-100  h-80" src="${product.image}" />
        <div class = "flex justify-between">
        <span>${product.category}</span>
       <span class="flex items-center">
  <span class="text-yellow-400">&#9733;</span>  <!-- Star হলুদ -->
  <b class="ml-1 text-black">${product.rating.rate}</b>
   <!-- Rating number কালো -->
    <p><b></b> (${product.rating.count})</p>
</span>
 </div>
        <h3>${product.title}</h3>
        <p><b>Price:</b> $${product.price}</p>
<span class = " flex justify-between mt-5"> 
<button class="btn px-6 py-3">Details</button>
<button class="btn btn-primary px-6 py-3">Primary</button>
<span>
      </div>
      </div>
    `;

        container.appendChild(div);
    });
};












// }

// // displayProducts();