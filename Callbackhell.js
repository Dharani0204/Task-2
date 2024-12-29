console.log("Start");
setTimeout(() => {
  console.log("Fetching user data...");
  setTimeout(() => {
    console.log("Fetching orders for user...");
    setTimeout(() => {
      console.log("Processing payment...");
      setTimeout(() => {
        console.log("Sending confirmation email...");
        setTimeout(() => {
          console.log("Order complete!");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
