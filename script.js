let expenses = [];

// Add new expense
function addExpense() {

    let name = document.getElementById("name").value.trim();

    let amountValue = document.getElementById("amount").value;
    let amount = Number(amountValue);

    let category = document.getElementById("category").value;

    // Check input values
    if (name === "" || amountValue === "" ||
        !Number.isFinite(amount) || amount <= 0) {

        alert("Please enter valid expense details");
        return;
    }

    // Create expense object
    let expense = {
        name: name,
        amount: amount,
        category: category
    };

    expenses.push(expense);

    // Clear input fields
    document.getElementById("name").value = "";
    document.getElementById("amount").value = "";

    showExpenses();
}

// Display expenses
function showExpenses() {

    let list = document.getElementById("list");

    let filter = document.getElementById("filter").value;

    list.innerHTML = "";

    expenses.forEach(function(item, index) {

        if (filter === "All" || filter === item.category) {

            let li = document.createElement("li");

            let details = document.createElement("span");

            details.textContent = item.name + " - ₹" +
                item.amount + " (" + item.category + ")";

            let deleteBtn = document.createElement("button");

            deleteBtn.textContent = "Delete";

            deleteBtn.onclick = function() {
                deleteExpense(index);
            };

            li.appendChild(details);
            li.appendChild(deleteBtn);

            list.appendChild(li);
        }
    });

    calculateTotal();
}

// Calculate total expenses
function calculateTotal() {

    let sum = 0;

    expenses.forEach(function(item) {
        sum = sum + item.amount;
    });

    document.getElementById("total").textContent =
        sum.toFixed(2);
}

// Delete expense
function deleteExpense(index) {

    expenses.splice(index, 1);

    showExpenses();
}