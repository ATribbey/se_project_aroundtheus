export default class Api {
  constructor() {
    // constructor body
  }

  getInitialCards() {
    fetch("https://around-api.en.tripleten-services.com/v1/cards", {
      method: "GET",
      headers: {
        authorization: "97f6b443-08dd-4f1c-9189-025b318b185d",
      },
    })
      .then((res) => {
        if (res.okay) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  getUserInfo() {
    fetch("https://around-api.en.tripleten-services.com/v1/users/me", {
      method: "GET",
      headers: {
        authorization: "97f6b443-08dd-4f1c-9189-025b318b185d",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "97f6b443-08dd-4f1c-9189-025b318b185d",
    "Content-Type": "application/json",
  },
});
