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

export async function apiDeleteFlashCard(cardID: string) {
  await deleteDataFromServer(`/flashcards/${cardID}`);
}

export async function apiCreateFlashcard(title: string, description: string) {
  const newFlashCard = await createDataOnServer("/flashcards", {
    id: getNewId(),
    title,
    description,
  });
  return newFlashCard;
}

export async function apiEditFlashcard(
  id: string,
  title: string,
  description: string
) {
  const updatedFlashCard = await editDataOnServer(`/flashcards/${id}`, {
    title,
    description,
  });
  return updatedFlashCard;
}
