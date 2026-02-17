 
   <div class ="border-2 p-10 m-5 rounded ">
      
        <img class =" w-100  h-80" src="${product.image}" />
        <div class = "flex justify-between">
        <span>${product.category}</span>
       <span class="flex items-center">
  <span class="text-yellow-400">&#9733;</span>   
  <b class="ml-1 text-black">${product.rating.rate}</b>  
</span>
<div>
        </div>
        <h3>${product.title}</h3>
        <p><b>Price:</b> $${product.price}</p>
        <p><b>Total Reviews:</b> ${product.rating.count}</p>
        <p>${product.description.slice(0, 100)}...</p>
      </div>
      </div>
    
