let balance = 5000;
const correctPin = "1234";

function login() {
  const pin = document.getElementById("pin").value;
  if (pin === correctPin) {
    document.getElementById("login-section").classList.add("hidden");
    document.getElementById("menu-section").classList.remove("hidden");
    document.getElementById("welcome").innerText = "Welcome!";
  } else {
    alert("Incorrect PIN. Try again.");
  }
}

function checkBalance() {
  document.getElementById("message").innerText = `Your balance is ₹${balance}`;
}

function withdraw() {
  let amount = prompt("Enter amount to withdraw:");
  amount = parseFloat(amount);
  if (isNaN(amount) || amount <= 0) {
    alert("Invalid amount.");
  } else if (amount > balance) {
    alert("Insufficient balance.");
  } else {
    balance -= amount;
    document.getElementById("message").innerText = `₹${amount} withdrawn. New balance: ₹${balance}`;
  }
}

function deposit() {
  let amount = prompt("Enter amount to deposit:");
  amount = parseFloat(amount);
  if (isNaN(amount) || amount <= 0) {
    alert("Invalid amount.");
  } else {
    balance += amount;
    document.getElementById("message").innerText = `₹${amount} deposited. New balance: ₹${balance}`;
  }
}

function logout() {
  location.reload();
}