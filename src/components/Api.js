export default class Api {
  constructor(options) {
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

  addNewCard() {
    fetch("https://around-api.en.tripleten-services.com/v1/cards", {
      method: "POST",
      headers: {
        authorization: "97f6b443-08dd-4f1c-9189-025b318b185d",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Yosemite Valley",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
      }),
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

  setUserInfo() {
    fetch("https://around-api.en.tripleten-services.com/v1/users/me", {
      method: "PATCH",
      headers: {
        authorization: "97f6b443-08dd-4f1c-9189-025b318b185d",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Jacques Cousteau",
        about: "Explorer",
      }),
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
