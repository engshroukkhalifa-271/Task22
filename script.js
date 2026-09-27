function shoProducts() {

    fetch("https://dummyjson.com/products")
        .then((response) => response.json())
        .then((data) => {

            data.products.forEach((product) => {

                document.body.innerHTML += `
                    <div>
                        <img src="${product.images[0]}" width="200">

                        <h2>${product.title}</h2>

                        <p>${product.price}$</p>
                    </div>
                `;

            });

        });
}

shoProducts();