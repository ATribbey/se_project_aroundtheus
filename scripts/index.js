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

const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardList = document.querySelector(".cards__list");

//--------------------PROFILE EDIT MODAL ELEMENTS-------------------->>

const profileEditBtn = document.querySelector("#profile-edit-btn");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileEditModalClose = document.querySelector(
  "#profile-edit-modal-close"
);
const profileEditForm = document.querySelector("#profile-edit-form");
const profileTitle = document.querySelector("#profile-name");
const profileDescription = document.querySelector("#profile-description");
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

function openModal(modal) {
  modal.classList.add("modal_opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  cardImageEl.src = cardData.link;
  const cardTitleEl = cardElement.querySelector(".card__title");
  cardTitleEl.textContent = cardData.name;
  cardImageEl.alt = cardData.name;

  // find delete button

  // add event listener to delete button
  // cardElement.remove();

  // add click listener to cardImageEl for new modal
  // keep it DRY, use openModal(); with previewImageModal (this still needs to be found in the DOM)

  const likeButton = cardElement.querySelector(".card__button-like");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__button-like_active");
  });

  return cardElement;
}

function renderCard(cardData) {
  const cardElement = getCardElement(cardData);
  cardList.prepend(cardElement);
}
//--------------------EVENT HANDLERS-------------------->>

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
  renderCard({ name, link });
  closeModal(addCardModal);
}

//--------------------EVENT LISTENERS-------------------->>

profileEditBtn.addEventListener("click", () => {
  openModal(profileEditModal);
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
});

profileEditModalClose.addEventListener("click", () => {
  closeModal(profileEditModal);
});

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

addCardBtn.addEventListener("click", () => {
  openModal(addCardModal);
});

addCardModalClose.addEventListener("click", () => {
  closeModal(addCardModal);
});

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardList.append(cardElement);
});

cardAddForm.addEventListener("submit", handleAddCardFormSubmit);
