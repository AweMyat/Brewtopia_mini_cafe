let order = [];
let total = 0;

function addToOrder(price, itemName) {
    // Add item to order
    order.push({ name: itemName, price: price });

    // Update total
    total += price;

    // Update the order list display
    updateOrderList();
}

function updateOrderList() {
    const orderList = document.getElementById("orderList");
    orderList.innerHTML = ""; // Clear the current list

    order.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;

        // Create a cancel button for each item
        const cancelButton = document.createElement("button");
        cancelButton.textContent = "Cancel";
        cancelButton.style.backgroundColor = "#ffc3dd";
        cancelButton.style.color = "#FFFFFF";
        cancelButton.style.borderRadius = "8px";
        cancelButton.style.marginLeft = "10px";
        cancelButton.style.marginTop = "10px"
        cancelButton.style.fontSize = "0.8rem";
        cancelButton.style.padding = "5px 10px";
        cancelButton.style.fontWeight = "400"
        cancelButton.onclick = () => removeFromOrder(index);

        li.appendChild(cancelButton);
        orderList.appendChild(li);
    });

    // Update total display
    document.getElementById("orderTotal").textContent = total.toFixed(2);
}

function removeFromOrder(index) {
    // Remove item from order
    total -= order[index].price; // Subtract the price from total
    order.splice(index, 1); // Remove the item from the order array

    // Update the order list display
    updateOrderList();
}

// Temperature Converter
function convertTemp() {
    const value = parseFloat(document.getElementById("tempInput").value);
    const unit = document.getElementById("tempUnit").value;
    const resultEl = document.getElementById("tempResult");

    if (isNaN(value)) {
        resultEl.innerText = "Please enter a temperature to start!";
        return;
    }

    let converted, celsius;
    let feedback = "";


    if (unit === "C") {
        converted = (value * 9 / 5) + 32;
        celsius = value;
        resultEl.innerText = `${value}°C = ${converted.toFixed(1)}°F`;
    } else {
        converted = (value - 32) * 5 / 9;
        celsius = converted;
        resultEl.innerText = `${value}°F = ${converted.toFixed(1)}°C`;
    }

    if (celsius < 40) {
        feedback = " - Too cold, need warming!";
    } else if (celsius >= 40 && celsius <= 60) {
        feedback = " - Perfect, enjoy your food/drink!";
    } else {
        feedback = " - Too Hot, let it cool down!";
    }

    resultEl.innerHTML += `${feedback}`;
}

// Customer Reviews
const reviews = ["Love this place, the Matcha from here is the best!", "The chocolate cookie is a bit too sweet for me but the red velvet cake is soooo good!", "Comfy and cozy cafe, perfect for introverts!"];
function addReview() {
    const review = document.getElementById("newReview").value.trim();
    if (review !== "") {
        reviews.push(review);
        document.getElementById("newReview").value = "";
    }
}
function restartReviews() {
    // Clear the input field
    document.getElementById("newReview").value = "";
    // Clear the reviews array
    reviews.length = 3;
    // Update the displayed list of reviews
    showReviews();
}
function showReviews() {
    let html = "<ul>";
    for (let r of reviews) {
        html += `<li>${r}</li>`;
    }
    html += "</ul>";
    document.getElementById("reviewList").innerHTML = html;
}

// Calorie calculator messages
const chaloArray = [];

// latte
function latteCalo() {
    let latte = document.getElementById("drink_1").value;

    total_latte = latte * 100;
    document.getElementById("text_1").innerHTML = `<span class="small-text">Your total calories for latte is: ${total_latte} calories</span>`;
}
function latteRestart() {
    document.getElementById("drink_1").value = "";
    document.getElementById("text_1").innerHTML = "";
}
function latteAdd() {
    console.log(total_latte);
    chaloArray.push(total_latte);
}

// matcha
function MatchaCalo() {
    let matcha = document.getElementById("drink_2").value;

    total_matcha = matcha * 70;
    document.getElementById("text_2").innerHTML = `<span class="small-text">Your total calories for matcha is: ${total_matcha} calories</span>`;
}
function MatchaRestart() {
    document.getElementById("drink_2").value = "";
    document.getElementById("text_2").innerHTML = "";
}
function MatchaAdd() {
    console.log(total_matcha);
    chaloArray.push(total_matcha);
}

// Bubble tea
function BubbleCalo() {
    let bubbletea = document.getElementById("drink_3").value;

    total_bubbletea = bubbletea * 150;
    document.getElementById("text_3").innerHTML = `<span class="small-text">Your total calories for bubble tea is: ${total_bubbletea} calories</span>`;
}
function BubbleRestart() {
    document.getElementById("drink_3").value = "";
    document.getElementById("text_3").innerHTML = "";
}
function MatchaAdd() {
    console.log(total_bubbletea);
    chaloArray.push(total_bubbletea);
}

// cheesecake
function CheeseCalo() {
    let cheese_cake = document.getElementById("cake_1").value;

    total_cheesecake = cheese_cake * 180;
    document.getElementById("text_4").innerHTML = `<span class="small-text">Your total calories for cheesecake is: ${total_cheesecake} calories</span>`;
}
function CheeseRestart() {
    document.getElementById("cake_1").value = "";
    document.getElementById("text_4").innerHTML = "";
}
function CheeseAdd() {
    console.log(total_cheesecake);
    chaloArray.push(total_cheesecake);
}

// red velvet cake
function rvCalo() {
    let redvelvet_cake = document.getElementById("cake_2").value;

    total_rvcake = redvelvet_cake * 200;
    document.getElementById("text_5").innerHTML = `<span class="small-text">Your total calories for red velvet cake is: ${total_rvcake} calories</span>`;
}
function rvRestart() {
    document.getElementById("cake_2").value = "";
    document.getElementById("text_5").innerHTML = "";
}
function rvAdd() {
    console.log(total_rvcake);
    chaloArray.push(total_rvcake);
}

// Tiramisu
function tiramisuCalo() {
    let tiramisu_cake = document.getElementById("cake_3").value;

    total_tiramisu = tiramisu_cake * 250;
    document.getElementById("text_6").innerHTML = `<span class="small-text">Your total calories for tiramisu is: ${total_tiramisu} calories</span>`;
}
function tiramisuRestart() {
    document.getElementById("cake_3").value = "";
    document.getElementById("text_6").innerHTML = "";
}
function tiramisuAdd() {
    console.log(total_tiramisu);
    chaloArray.push(total_tiramisu);
}
function chaloShow() {
    let text = "<ul>";
    let total = 0;

    for (let i = 0; i < chaloArray.length; i++) {
        text += "<li>" + chaloArray[i] + " cal</li>";
        total += chaloArray[i];
    }

    text += "</ul>";

    document.getElementById("Total").innerHTML = `Your total calories is: <strong>${total}</strong> cal <p>Details:</p>${text}`;
}
