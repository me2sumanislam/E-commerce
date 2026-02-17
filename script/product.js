 
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

        <button class =" btn rounded-xl px-5 py-2 border" >
        ${btncatagorie}
        </button>
        
        `;
        container.appendChild(div);
    }
 }



 loadCategories();