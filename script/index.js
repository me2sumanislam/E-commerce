
fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => displayProducts(data));

const displayProducts = (products) => {
     
    const sortedProducts = products.sort((a, b) => b.rating.rate - a.rating.rate);
 
    const top3 = sortedProducts.slice(0, 3);
    //   console.log(top3)

    // container
    const container = document.getElementById("product-containerOne");
    container.innerHTML = "";

    
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
        <button onclick="loadProductDetailOne(${product.id})" class="btn btn-primary">Details</button>
     <button class="btn btn-primary flex-1 px-4 py-2 ">Add to Cart</button>
        </div>
      </div>
      </div>
    `;

        container.appendChild(div);
    });
};

 const loadProductDetailOne = async (id) => {
  const url = `https://fakestoreapi.com/products/${id}`;

  const res = await fetch(url);
  const details = await res.json();

  displayProductDetailsOne(details);
};

const displayProductDetailsOne = (Dproduct) => {
  const detailsBox = document.getElementById("details-containerOne");

  detailsBox.innerHTML = `
    <div class="p-10 m-5 rounded">
      <img class="w-[200px]" src="${Dproduct.image}" />

      <h1 class="font-bold mt-3">${Dproduct.title}</h1>
      <p>${Dproduct.description.slice(0, 100)}...</p>
      <p><b>Price:</b> $${Dproduct.price}</p>

      <span class="text-yellow-400">&#9733;</span>
      <b class="ml-1 text-black">${Dproduct.rating.rate}</b>

      <div class="flex mt-5 gap-5">
        <button class="btn btn-primary">Buy Now</button>
        <button class="btn btn-secondary">Add to Cart</button>
      </div>
    </div>
  `;

  document.getElementById("word_modal").showModal();
};











// }

// // displayProducts();