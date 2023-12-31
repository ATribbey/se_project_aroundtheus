const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

//--------------------GENERIC ELEMENTS-------------------->>

const cardList = document.querySelector(".cards__list");

//--------------------PROFILE EDIT MODAL ELEMENTS-------------------->>

const profileName = document.querySelector("#profile-name");
const profileAbout = document.querySelector("#profile-about");
const profileAvatar = document.querySelector("#profile-avatar");
const profilePictureEditBtn = document.querySelector(
  "#profile-picture-edit-btn"
);
const profilePictureEditForm = document.querySelector("#profile-picture-form");
const profilePictureSubmitBtn = document.querySelector(
  "#profile-picture-submit-btn"
);
const profilePictureFormInput = document.querySelector(
  "#profile-picture-input"
);
const profileEditBtn = document.querySelector("#profile-edit-btn");
const profileEditForm = document.querySelector("#profile-edit-form");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);

//--------------------PROFILE ADD MODAL ELEMENTS-------------------->>

const addCardBtn = document.querySelector("#profile-add-btn");
const addCardModal = document.querySelector("#profile-add-modal");
const addCardSubmitBtn = document.querySelector("#add-card-btn");
const cardAddForm = addCardModal.querySelector("#card-add-form");
const cardTitleInput = cardAddForm.querySelector("#profile-add-title-input");
const cardUrlInput = cardAddForm.querySelector("#profile-add-url-input");

//--------------------VALIDATION OPTIONS-------------------->>

const options = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__error",
  errorClass: "modal__error_visible",
};

//--------------------API OPTIONS-------------------->>

const apiOptions = {
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "97f6b443-08dd-4f1c-9189-025b318b185d",
    "Content-Type": "application/json",
  },
};

export {
  initialCards,
  cardList,
  profileName,
  profileAbout,
  profileAvatar,
  profilePictureEditBtn,
  profilePictureEditForm,
  profilePictureSubmitBtn,
  profilePictureFormInput,
  profileEditBtn,
  profileEditForm,
  profileTitleInput,
  profileDescriptionInput,
  addCardBtn,
  cardAddForm,
  addCardSubmitBtn,
  cardTitleInput,
  cardUrlInput,
  options,
  apiOptions,
};
