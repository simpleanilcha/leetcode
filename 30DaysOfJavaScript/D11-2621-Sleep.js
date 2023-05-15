/**
 * @param {number} millis
 */
async function sleep(millis) {
  // Approach 1: Asynchronous Programming with Promises and setTimeout
  async function sleep(millis) {
    return new Promise(resolve => {
      setTimeout(resolve, millis);
    });
  }

  // Approach 2: Asynchronous Programming with Promises and setTimeout without Return
  // await new Promise((resolve, reject) => {
  //   setTimeout(resolve, millis)
  // })
}

/** 
* let t = Date.now()
* sleep(100).then(() => console.log(Date.now() - t)) // 100
*/