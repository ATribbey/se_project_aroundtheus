import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

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

//--------------------VALIDATION OPTIONS-------------------->>

const options = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__error",
  errorClass: "modal__error_visible",
};

//--------------------POPUPWITHIMAGE INSTANTIATION-------------------->>

const imagePopup = new PopupWithImage("#card-preview-modal");

imagePopup.setEventListeners();

//--------------------GENERIC ELEMENTS-------------------->>

const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardList = document.querySelector(".cards__list");
const previewModal = document.querySelector("#card-preview-modal");
const previewModalClose = previewModal.querySelector(
  "#card-preview-modal-close"
);

//--------------------PROFILE EDIT MODAL ELEMENTS-------------------->>

const profileEditBtn = document.querySelector("#profile-edit-btn");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileEditModalClose = document.querySelector(
  "#profile-edit-modal-close"
);
const profileEditForm = document.querySelector("#profile-edit-form");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);

//--------------------PROFILE ADD MODAL ELEMENTS-------------------->>

const addCardBtn = document.querySelector("#profile-add-btn");
const addCardModal = document.querySelector("#profile-add-modal");
const addCardModalClose = document.querySelector("#profile-add-modal-close");
const cardAddForm = addCardModal.querySelector("#card-add-form");
const cardTitleInput = cardAddForm.querySelector("#profile-add-title-input");
const cardUrlInput = cardAddForm.querySelector("#profile-add-url-input");

//--------------------FUNCTIONS-------------------->>

const isEscEvent = (event, action) => {
  if (event.key === "Escape") {
    const activeModal = document.querySelector(".modal_opened");
    action(activeModal);
  }
};

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keyup", handleEscUp);
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keyup", handleEscUp);
}

function renderCard(data) {
  const cardElement = new Card(data, "#card-template", handleImageClick);
  return cardElement.getNewCard();
}

function fillProfileForm() {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
}
//--------------------EVENT HANDLERS-------------------->>

function handleImageClick(data) {
  imagePopup.open(data);
}

const handleEscUp = (event) => {
  event.preventDefault();
  isEscEvent(event, closeModal);
};

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal(profileEditModal);
}

function handleAddCardFormSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  const newCard = renderCard({ name, link });
  cardSection.addItem(newCard);
  closeModal(addCardModal);
  e.target.reset();
}

//--------------------EVENT LISTENERS-------------------->>

// profileEditModal.addEventListener("click", (event) => {
//   if (event.target.classList.contains("modal_opened")) {
//     closeModal(profileEditModal);
//   }
// });

addCardModal.addEventListener("click", (event) => {
  if (event.target.classList.contains("modal_opened")) {
    closeModal(addCardModal);
  }
});

// profileEditBtn.addEventListener("click", () => {
//   openModal(profileEditModal);
//   fillProfileForm();
// });

profileEditModalClose.addEventListener("click", () => {
  closeModal(profileEditModal);
});

// profileEditForm.addEventListener("submit", handleProfileEditSubmit);

addCardBtn.addEventListener("click", () => {
  openModal(addCardModal);
});

addCardModalClose.addEventListener("click", () => {
  closeModal(addCardModal);
});

cardAddForm.addEventListener("submit", handleAddCardFormSubmit);

//--------------------VALIDATION INSTANTIATORS-------------------->>

const profileEditValidation = new FormValidator(options, profileEditForm);
const addCardValidation = new FormValidator(options, cardAddForm);

profileEditValidation.enableValidation();
addCardValidation.enableValidation();

//--------------------CARD INITIALIZATION-------------------->>

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      const newCard = renderCard(cardData);
      cardSection.addItem(newCard);
    },
  },
  cardList
);

cardSection.renderItems(initialCards);

//--------------------USER-INFO INSTANTIATION-------------------->>
const userInfo = new UserInfo({
  profileName: ".profile__title",
  profileJob: ".profile__description",
});

//--------------------POPUP-WITH-FORM TESTING-------------------->>
const editModal = new PopupWithForm("#profile-edit-modal", (values) => {
  userInfo.setUserInfo(values);
  editModal.close();
});

editModal.setEventListeners();

profileEditBtn.addEventListener("click", () => {
  const { name, job } = userInfo.getUserInfo();

  profileTitleInput.value = name;
  profileDescriptionInput.value = job;

  editModal.open();
});
