import {IFlashCardProps} from '../@types/flashcard';

export default function FlashCard({
  id,
  title = "Cards title",
  description = "Card description which may contain more words than the title",
  showFlashcardTitle = true,
  onToggleFlashCard,
}:IFlashCardProps) {
  function handleCardClick() {
    if (onToggleFlashCard) {
      onToggleFlashCard(id);
    }
  }

  const fontSizeClassName = showFlashcardTitle ? "text-lg" : "text-sm";

  return (
    <div
      className={`border-t border-blue-500 border-opacity-20 p-4 m-2 flex justify-center items-center shadow-lg h-48 w-80 font-semibold cursor-pointer ${fontSizeClassName} transition-colors rounded-lg hover:bg-indigo-400 hover:text-white`}
      onClick={handleCardClick}
    >
      {showFlashcardTitle ? title : description}
    </div>
  );
}
