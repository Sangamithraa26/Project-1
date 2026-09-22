const productInput = document.getElementById("productInput");
const compareButton = document.getElementById("compareButton");
const results = document.getElementById("results");


const products = [
    {
        store: "Amazon",
        price: 69999,
        url: "#"
    },
    {
        store: "Flipkart",
        price: 68499,
        url: "#"
    },
    {
        store: "Croma",
        price: 70990,
        url: "#"
    }
];


compareButton.addEventListener("click", function () {

    const productName = productInput.value.trim();

    if (productName === "") {
        results.innerHTML = "<p>Please enter a product name.</p>";
        return;
    }


    // Find the product with the lowest price

    let cheapestProduct = products[0];

    for (let i = 1; i < products.length; i++) {

        if (products[i].price < cheapestProduct.price) {
            cheapestProduct = products[i];
        }

    }


    // Display results

    results.innerHTML = `
        <h2>Search Results</h2>

        <p>
            Comparing prices for:
            <strong>${productName}</strong>
        </p>

        <div class="lowest-price">

            <h3>💰 Lowest Price</h3>

            <p>
                ₹${cheapestProduct.price.toLocaleString("en-IN")}
            </p>

            <strong>
                ${cheapestProduct.store}
            </strong>

        </div>


        <h3 class="other-title">
            Other Prices
        </h3>
    `;


    // Display every store

    for (let product of products) {

        results.innerHTML += `
            <div class="product-card">

                <h3>${product.store}</h3>

                <p>
                    ₹${product.price.toLocaleString("en-IN")}
                </p>

                <a href="${product.url}">
                    View Deal
                </a>

            </div>
        `;

    }

});