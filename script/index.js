
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
    const container = document.getElementById("product-containerOne");
    container.innerHTML = "";

    // show top 3
    top3.forEach((product) => {
        // console.log(product.category)
        const div = document.createElement("div");
        div.innerHTML = `
 
   <div class =" p-10 m-5 rounded ">
      
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
        <div class ="mt-auto flex gap-2"> 
        <button class="btn flex-1 px-4 py-2">Details</button>
        <button class="btn btn-primary flex-1 px-4 py-2 ">Primary</button>
        </div>
      </div>
      </div>
    `;

        container.appendChild(div);
    });
};












// }

// // displayProducts();