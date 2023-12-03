import { apiOptions } from "../utils/constants.js";
export default class Api {
  constructor() {
    this._baseUrl = apiOptions.baseUrl;
    this._baseHeaders = apiOptions.headers;
    this._userPath = `${this._baseUrl}/users/me`;
    this._cardPath = `${this._baseUrl}/cards`;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  _logError(err) {
    console.error(err);
  }

  returnPromiseAll([promise1, promise2]) {
    return Promise.all([promise1, promise2]);
  }

  getInitialCards() {
    return fetch(this._cardPath, {
      method: "GET",
      headers: this._baseHeaders,
    })
      .then((res) => {
        return this._checkResponse(res);
      })
      .catch((err) => {
        this._logError(err);
      });
  }

  addNewCard({ name, link }) {
    return fetch(this._cardPath, {
      method: "POST",
      headers: this._baseHeaders,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    })
      .then((res) => {
        return this._checkResponse(res);
      })
      .catch((err) => {
        this._logError(err);
      });
  }

  deleteCard(cardId) {
    return fetch(`${this._cardPath}${cardId}`, {
      method: "DELETE",
      headers: this._baseHeaders,
    })
      .then((res) => {
        return this._checkResponse(res);
      })
      .catch((err) => {
        this._logError(err);
      });
  }

  addCardLike(cardId) {
    return fetch(`${this._cardPath}${cardId}/likes`, {
      method: "PUT",
      headers: this._baseHeaders,
    })
      .then((res) => {
        return this._checkResponse(res);
      })
      .catch((err) => {
        this._logError(err);
      });
  }

  removeCardLike(cardId) {
    return fetch(`${this._cardPath}${cardId}/likes`, {
      method: "DELETE",
      headers: this._baseHeaders,
    })
      .then((res) => {
        return this._checkResponse(res);
      })
      .catch((err) => {
        this._logError(err);
      });
  }

  getUserInfo() {
    return fetch(this._userPath, {
      method: "GET",
      headers: this._baseHeaders,
    })
      .then((res) => {
        return this._checkResponse(res);
      })
      .catch((err) => {
        this._logError(err);
      });
  }

  setUserInfo({ name, about }) {
    return fetch(this._userPath, {
      method: "PATCH",
      headers: this._baseHeaders,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    })
      .then((res) => {
        return this._checkResponse(res);
      })
      .catch((err) => {
        this._logError(err);
      });
  }

  setProfilePicture(link) {
    return fetch(`${this._userPath}/avatar`, {
      method: "PATCH",
      headers: this._baseHeaders,
      body: JSON.stringify({
        avatar: link,
      }),
    })
      .then((res) => {
        return this._checkResponse(res);
      })
      .catch((err) => {
        this._logError(err);
      });
  }
}
