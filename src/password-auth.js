const apiUrl = 'https://play.immortalcreed.com/game/api';

// Replace with your email and password. Password login must be enabled on the account.
// WARNING! Saving passwords in plaintext is not recommended! Usage here is for example purposes only.
const email = 'test@immortalcreed.com';
const password = '';


function throwErrors (res) {
  if (!res.ok) {
    return res.text().then(text => { throw new Error(text) })
  }
  return res;
}

function getOwnedCards() {

  // log in and obtain the authentication cookie
  fetch(`${apiUrl}/authorize/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
    .then(throwErrors)
    .then(authResponse => {
      // extract the cookie from the response
      const setCookieHeader = authResponse.headers.get('set-cookie');
      const cookie = setCookieHeader.split(';')[0];

      // make the API call using the authenticated cookie
      return fetch(`${apiUrl}/cards/owned`, {
        headers: {
          'Cookie': cookie
        }
      });
    })
    .then(throwErrors)
    .then(apiResponse => {
      return apiResponse.json();
    })
    .then(responseData => {
      // card data will be available here!
      // base contains card stats
      console.log(responseData);
    })
    .catch(error => {
      console.error(error.message);
    });
}

getOwnedCards();