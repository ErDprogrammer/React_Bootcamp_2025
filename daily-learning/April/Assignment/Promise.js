function confirmPayment(balance) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (balance >= 100) {
          resolve("Payment successful ✅");
        } else {
          reject("Insufficient balance ❌");
        }
      }, 1000);  
    });
  }
  
   confirmPayment(120)
    .then((message) => {
      console.log("Success:", message);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
  