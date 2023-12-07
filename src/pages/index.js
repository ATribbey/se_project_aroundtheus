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
  profileName,
  profileAbout,
  profileAvatar,
  profilePictureEditBtn,
  profilePictureEditForm,
  profilePictureFormInput,
  profileEditBtn,
  profileEditForm,
  profileTitleInput,
  profileDescriptionInput,
  addCardBtn,
  cardAddForm,
  cardTitleInput,
  cardUrlInput,
  options,
  apiOptions,
} from "../utils/constants.js";
import "./index.css";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

//--------------------API INSTANTIATION-------------------->>

const api = new Api(apiOptions);

//--------------------POPUPWITHIMAGE INSTANTIATION-------------------->>

const imagePopup = new PopupWithImage("#card-preview-modal");

imagePopup.setEventListeners();

//--------------------CARDSECTION INSTANTIATION-------------------->>

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

api
  .getInitialCards()
  .then((cardData) => {
    cardSection.renderItems(cardData);
  })
  .catch((err) => {
    api.logError(err);
  });

//--------------------USER-INFO INSTANTIATION-------------------->>

const userInfo = new UserInfo(
  "#profile-name",
  "#profile-about",
  "#profile-avatar"
);

api
  .getUserInfo()
  .then((userData) => {
    userInfo.setUserInfo(userData.name, userData.about);
    userInfo.setUserAvatar(userData.avatar);
  })
  .catch((err) => {
    api.logError(err);
  });

//-------------------- EDIT PROFILE POPUP-WITH-FORM INSTANTIATION-------------------->>

const editModal = new PopupWithForm("#profile-edit-modal", (values) => {
  api
    .setUserInfo({ name: values.name, about: values.job })
    .then((data) => {
      userInfo.setUserInfo(data.name, data.about);
    })
    .catch((err) => {
      api.logError(err);
    });
  editModal.close();
});

editModal.setEventListeners();

profileEditBtn.addEventListener("click", () => {
  const { name, job } = userInfo.getUserInfo();

  profileTitleInput.value = name;
  profileDescriptionInput.value = job;

  editModal.open();
});

//--------------------PROFILE PICTURE POPUP-WITH-FORM INSTANTIATION-------------------->>

const profilePictureModal = new PopupWithForm(
  "#profile-picture-edit-modal",
  () => {
    api
      .setProfilePicture(profilePictureFormInput.value)
      .then((res) => {
        profilePicture.src = res.avatar;
      })
      .catch((err) => {
        api.logError(err);
      });
    profilePictureModal.close();
  }
);

profilePictureModal.setEventListeners();

profilePictureEditBtn.addEventListener("click", () => {
  profilePictureModal.open();
});

//--------------------ADD CARD POPUP-WITH-FORM INSTANTIATION-------------------->>

const addModal = new PopupWithForm("#profile-add-modal", () => {
  const { title, url } = addModal.getInputValues();
  api
    .addNewCard({ name: title, link: url })
    .then((cardData) => {
      const newCard = renderCard({
        name: cardData.name,
        link: cardData.link,
        _id: cardData._id,
        isLiked: cardData.isLiked,
      });
      cardSection.addItem(newCard);
    })
    .catch((err) => {
      api.logError(err);
    });
  addModal.close();
});

addModal.setEventListeners();

addCardBtn.addEventListener("click", () => {
  addModal.open();
});

//--------------------DELETE CARD POPUP INSTANTIATION-------------------->>

const deleteModal = new PopupWithConfirmation("#card-delete-modal");

deleteModal.setEventListeners();

//--------------------FUNCTIONS-------------------->>

function renderCard(data) {
  const cardElement = new Card(
    data,
    "#card-template",
    () => {
      imagePopup.open(data);
    },
    deleteModal,
    () => {
      const id = cardElement.getId();

      deleteModal.open();

      deleteModal.setSubmitAction(() => {
        deleteModal.loadingButtonState();
        api
          .deleteCard(id)
          .then(() => {
            cardElement.deleteHandler();
            deleteModal.close();
            deleteModal.defaultButtonState();
          })
          .catch((err) => {
            api.logError(err);
          });
      });
    },
    () => {
      const id = cardElement.getId();

      if (!data.isLiked) {
        api
          .addCardLike(id)
          .then(() => {
            cardElement.likeHandler();
          })
          .catch((err) => {
            api.logError(err);
          });
      } else {
        api
          .removeCardLike(id)
          .then(() => {
            cardElement.likeHandler();
          })
          .catch((err) => {
            api.logError(err);
          });
      }
    }
  );
  return cardElement.getNewCard();
}

//--------------------VALIDATION INSTANTIATORS-------------------->>

const profileEditValidation = new FormValidator(options, profileEditForm);
const addCardValidation = new FormValidator(options, cardAddForm);
const profilePictureValidation = new FormValidator(
  options,
  profilePictureEditForm
);

profileEditValidation.enableValidation();
addCardValidation.enableValidation();
profilePictureValidation.enableValidation();
