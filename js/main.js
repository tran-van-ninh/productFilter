var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

fetch("https://fakestoreapi.com/products/")
    .then(res =>{
        return res.json();
    })
    .then(data =>{
        var products = $('.products');
        products.innerHTML = '';
        data.forEach(item =>{

            var newProduct = document.createElement('div');
            newProduct.classList.add('product');
            
            newProduct.innerHTML = `<div class="wrap-image">
                                        <img src="${item.image}" alt="">
                                    </div>
                                    <div class="info">
                                        <div class="name">${item.title}</div>
                                        <div class="price">${item.price}$</div>
                                    </div>`
            products.appendChild(newProduct);
            

            
        })
    })

    var searchInput = $('.search input');

    searchInput.addEventListener('input', event =>{
        console.log(event.target.value);
        let txtSearch = event.target.value.toLowerCase().trim();
        let listProductDom = $$('.product');
        console.log(listProductDom)
        listProductDom.forEach(item => {
            console.log(item.innerText.includes(txtSearch));
            if(item.innerText.toLowerCase().includes(txtSearch)){
                item.classList.remove('hidden');
            }else{
                item.classList.add('hidden');
            }
        })
    })
