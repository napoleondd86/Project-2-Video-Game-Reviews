const signupForm = document.querySelector("#signup-form")

const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in.');
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if ( email && password) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);


// for session signing up on the front end

// async function sumbitSignup() {
//   // api/User/signup becasue it needs to go to a specific place.
//   const query = await fetch("api/user/signup", {
//     method: 'POST',
//     body: JSON.stringfy({
//       email: email,
//       password: password
//     }),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });
//   const result = await query.json()
//   if (result.status === 'success') {
//     document.location.replace('/');
//   } else {
//     alert('Failed to sign up.');
//   }
// }
// // This should handle regular login
// async function logIn() {
//   // api/User/signup becasue it needs to go to a specific place.
//   const query = await fetch("api/user/login", {
//     method: 'POST',
//     body: JSON.stringfy({
//       email: email,
//       password: password
//     }),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });
//   const result = await query.json()
//   if (result.status === 'success') {
//     document.location.replace('/');
//   } else {
//     alert('Failed to log in.');
//   }
// }

