export function PostData(type, userData) {
  let BaseURL = "http://localhost/Database/php/react-php/api/index.php";
  // let temp = "https://github.com/parixitsoni/feedback-system/blob/master/src/Database/php/react-php/api/config.php/";
  // let temp1 = "https://github.com/parixitsoni/feedback-system/blob/master/src/Database/php/react-php/api/index.php";
  return new Promise((resolve, reject) => {
    fetch(BaseURL + "?tp=" + type, {
      method: "POST",
      headers: {
        "Accept": "application/json;",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
      .then(response =>
        response.json().then(res => {
          resolve(res);
        })
      )
      .catch(error => {
        reject(error);
      });
  });
}
