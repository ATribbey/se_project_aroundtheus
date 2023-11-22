import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import {
  initialCards,
  cardList,
  profileEditBtn,
  profileEditForm,
  profileTitleInput,
  profileDescriptionInput,
  addCardBtn,
  cardAddForm,
  cardTitleInput,
  cardUrlInput,
  options,
} from "../utils/constants.js";
import "./index.css";

//--------------------POPUPWITHIMAGE INSTANTIATION-------------------->>

const imagePopup = new PopupWithImage("#card-preview-modal");

imagePopup.setEventListeners();

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

// cardSection.renderItems(initialCards);

//--------------------USER-INFO INSTANTIATION-------------------->>

const userInfo = new UserInfo({
  profileName: ".profile__title",
  profileJob: ".profile__description",
});

//-------------------- EDIT PROFILE POPUP-WITH-FORM INSTANTIATION-------------------->>

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

//--------------------ADD CARD POPUP-WITH-FORM INSTANTIATION-------------------->>

const addModal = new PopupWithForm("#profile-add-modal", () => {
  const { title, url } = addModal.getInputValues();
  const newCard = renderCard({ name: title, link: url });
  cardSection.addItem(newCard);
  addModal.close();
});

addModal.setEventListeners();

addCardBtn.addEventListener("click", () => {
  addModal.open();
});

//--------------------FUNCTIONS-------------------->>

function renderCard(data) {
  const cardElement = new Card(data, "#card-template", () => {
    imagePopup.open(data);
  });
  return cardElement.getNewCard();
}

//--------------------VALIDATION INSTANTIATORS-------------------->>

const profileEditValidation = new FormValidator(options, profileEditForm);
const addCardValidation = new FormValidator(options, cardAddForm);

profileEditValidation.enableValidation();
addCardValidation.enableValidation();

//--------------------API TESTING-------------------->>

const test = new Api();

test.getUserInfo();
