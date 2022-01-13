export function getMe() {
  return fetch(`${process.env.REACT_APP_API_SERVER}/users/me`, {
    headers: {
      authorization: `Bearer ${localStorage.token}`,
    },
  }).then((response) => {
    if (response.ok) return response.json();
    throw new Error('Auth error');
  });
}

export function postLogin(email, password) {
  return fetch(`${process.env.REACT_APP_API_SERVER}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then((response) => {
    if (response.ok) return response.json();
    throw new Error('Auth error');
  });
}
