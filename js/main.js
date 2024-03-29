let subtotalElement = document.getElementById("subtotal");
let subtotal = 0;

class ShoppingCartItem {
    constructor(itemId) {
        this.itemId = itemId;
        this.priceElement = document.getElementById(`price-${itemId}`);
        this.quantityInput = document.getElementById(`quantity-${itemId}`);
        this.quantityAdd = document.getElementById(`quantity-add-${itemId}`);
        this.quantityDeduct = document.getElementById(`quantity-deduct-${itemId}`);
        this.row = document.getElementById(`item${itemId}`);
        this.removeButton = document.getElementById(`deleteButton-${itemId}`);
    
        this.price = parseFloat(this.priceElement.innerHTML);
        this.quantityValue = parseInt(this.quantityInput.value);
    
        this.quantityAdd.addEventListener("click", () => {
            this.incrementQuantity();
        });
    
        this.quantityDeduct.addEventListener("click", () => {
            this.decrementQuantity();
        });
        this.incrementQuantity();
    
        this.removeButton.addEventListener("click", () => {
            subtotal -= (this.price * this.quantityValue)
            updateSubtotal();
            this.row.remove();
        });
    }




    incrementQuantity() {
        this.quantityValue += 1;
        this.quantityInput.value = this.quantityValue;

        let totalPrice = this.price * this.quantityValue;
        this.priceElement.innerHTML = totalPrice.toFixed(2);
        subtotal += this.price;
        updateSubtotal();
    }

    decrementQuantity() {
        if (this.quantityValue > 1) {
            this.quantityValue -= 1;
            this.quantityInput.value = this.quantityValue;

            let totalPrice = this.price * this.quantityValue;
            this.priceElement.innerHTML = totalPrice.toFixed(2);
            subtotal -= this.price;
            updateSubtotal();
        }
    }
}

function updateSubtotal() {
    subtotalElement.innerHTML = subtotal.toFixed(2);
}

const item1 = new ShoppingCartItem(1);
const item2 = new ShoppingCartItem(2);
const item3 = new ShoppingCartItem(3);
const item4 = new ShoppingCartItem(4);

console.log("working")