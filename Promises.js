
const myPromise = new Promise((resolve, reject) => {
    const success = true; 
    if (success) {
      resolve("Promise resolved!");
    } else {
      reject("Promise rejected!");
    }
  });
  
  
  myPromise
    .then((message) => {
      console.log(message); 
    })
    .catch((error) => {
      console.error(error); 
    });
  