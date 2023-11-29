import apiOptions from "../utils/constants.js";
export default class Api {
  constructor() {
    this._baseUrl = apiOptions.baseUrl;
    this._headers = apiOptions.headers;
    this._userPath = `${this._baseUrl}/users/me`;
    this._cardPath = `${this._baseUrl}/cards`;
  }

  getInitialCards() {
    fetch(this._cardPath, {
      method: "GET",
      headers: {
        authorization: "97f6b443-08dd-4f1c-9189-025b318b185d",
        "Content-Type": "application/json",
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

  addNewCard({ name, link }) {
    fetch(this._cardPath, {
      method: "POST",
      headers: {
        authorization: "97f6b443-08dd-4f1c-9189-025b318b185d",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        link: link,
      }),
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

  deleteCard(cardId) {
    fetch(`${this._cardPath}${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: "97f6b443-08dd-4f1c-9189-025b318b185d",
        "Content-Type": "application/json",
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

  addCardLike(cardId) {
    fetch(`${this._cardPath}${cardId}/likes`, {
      method: "PUT",
      headers: {
        authorization: "97f6b443-08dd-4f1c-9189-025b318b185d",
        "Content-Type": "application/json",
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

  removeCardLike(cardId) {
    fetch(`${this._cardPath}${cardId}/likes`, {
      method: "DELETE",
      headers: {
        authorization: "97f6b443-08dd-4f1c-9189-025b318b185d",
        "Content-Type": "application/json",
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

  getUserInfo() {
    fetch(this._userPath, {
      method: "GET",
      headers: {
        authorization: "97f6b443-08dd-4f1c-9189-025b318b185d",
        "Content-Type": "application/json",
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
    fetch(this._userPath, {
      method: "PATCH",
      headers: {
        authorization: "97f6b443-08dd-4f1c-9189-025b318b185d",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Jacques Cousteau",
        about: "Explorer",
      }),
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

  setProfilePicture(link) {
    fetch(`${this._userPath}/avatar`, {
      method: "PATCH",
      headers: {
        authorization: "97f6b443-08dd-4f1c-9189-025b318b185d",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: link,
      }),
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
}
