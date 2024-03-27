document.querySelectorAll(".remove-button").forEach(button => {
    button.addEventListener("click", () => {
        let row = button.closest("tr");
        row.remove();
    });
});
// let quantityAdd = document.getElementById("quantity-add-1");
// let quantityDeduct = document.getElementById("quantity-deduct-1");
// let quantityInput = document.getElementById("quantity-1");
// let itemPrice1 = document.getElementById("price-1");
// const price1 = parseFloat(itemPrice1.innerHTML);

// // Initialize quantityValue
// let quantityValue = parseInt(quantityInput.value);

// quantityAdd.addEventListener("click", () => {
//     quantityValue += 1;
//     quantityInput.value = quantityValue;
//     itemPrice1.innerHTML = (quantityValue * price1).toFixed(2); // Formatting total price to two decimal places
// });

// quantityDeduct.addEventListener("click", () => {
//     if (quantityValue > 1) {
//         quantityValue -= 1;
//         quantityInput.value = quantityValue;
//         itemPrice1.innerHTML = (quantityValue * price1).toFixed(2); // Formatting total price to two decimal places
//     }
// });


class ShoppingCartItem {
    constructor(itemId) {
        this.itemId = itemId;
        this.priceElement = document.getElementById(`price-${itemId}`);
        this.quantityInput = document.getElementById(`quantity-${itemId}`);
        this.quantityAdd = document.getElementById(`quantity-add-${itemId}`);
        this.quantityDeduct = document.getElementById(`quantity-deduct-${itemId}`);

        this.price = parseFloat(this.priceElement.innerHTML);
        this.quantityValue = parseInt(this.quantityInput.value);

        this.quantityAdd.addEventListener("click", () => {
            this.incrementQuantity();
        });

        this.quantityDeduct.addEventListener("click", () => {
            this.decrementQuantity();
        });
    }

    incrementQuantity() {
        this.quantityValue += 1;
        this.quantityInput.value = this.quantityValue;

        let totalPrice = this.price * this.quantityValue;
        this.priceElement.innerHTML = totalPrice.toFixed(2);
    }

    decrementQuantity() {
        if (this.quantityValue > 1) {
            this.quantityValue -= 1;
            this.quantityInput.value = this.quantityValue;

            let totalPrice = this.price * this.quantityValue;
            this.priceElement.innerHTML = totalPrice.toFixed(2);
        }
    }
}

// Usage
const item1 = new ShoppingCartItem(1);
const item2 = new ShoppingCartItem(2);
const item3 = new ShoppingCartItem(3);
const item4 = new ShoppingCartItem(4);



