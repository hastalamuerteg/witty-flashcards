import {IFlashcard} from '../@types/flashcard'

interface IFlashCardsProps {
  children: IFlashcard[];
}

export default function FlashCards({ children: flashcards }:IFlashCardsProps) {
  return (
    <div className="p-3 flex justify-center items-center flex-wrap">
      {flashcards}
    </div>
  );
}
