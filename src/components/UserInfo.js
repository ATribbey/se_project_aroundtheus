export default class UserInfo {
  constructor(profileName, profileJob, profileAvatar) {
    this._profileName = document.querySelector(profileName);
    this._profileJob = document.querySelector(profileJob);
    this._profileAvatar = document.querySelector(profileAvatar);
  }

  getUserInfo() {
    const userInfo = {
      name: this._profileName.textContent,
      job: this._profileJob.textContent,
    };

    return userInfo;
  }

  setUserInfo(data) {
    this._profileName.textContent = data.name;
    this._profileJob.textContent = data.job;
  }

  setUserAvatar(data) {
    this._profileAvatar.src = data;
  }
}
