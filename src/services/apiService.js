import {
  createDataOnServer,
  deleteDataFromServer,
  getDataFromServer,
  editDataOnServer,
} from "./httpService";
import { getNewId } from "./idService";

export async function apiGetAllFlashCards() {
  const flashCardsList = await getDataFromServer("/flashcards");
  return flashCardsList;
}

export async function apiDeleteFlashCard(cardID) {
  await deleteDataFromServer(`/flashcards/${cardID}`);
}

export async function apiCreateFlashcard(title, description) {
  const newFlashCard = await createDataOnServer("/flashcards", {
    id: getNewId(),
    title,
    description,
  });
  return newFlashCard;
}

export async function apiEditFlashcard(cardID, title, description) {
  const updatedFlashCard = await editDataOnServer(`/flashcards/${cardID}`, {
    title,
    description,
  });
  return updatedFlashCard;
}
