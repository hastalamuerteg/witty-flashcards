import { FiEdit3 as EditionIcon, FiTrash2 as DeleteIcon } from "react-icons/fi";

export default function FlashCardItem({
  children: flashcard,
  onFlashCardDelete = null,
  onFlashCardEdit = null,
}) {
  const { title, description } = flashcard;

  function handleDeleteButtonClick() {
    if (onFlashCardDelete) {
      onFlashCardDelete(flashcard.id);
    }
  }

  function handleEditButtonClick() {
    if (onFlashCardEdit) {
      onFlashCardEdit(flashcard);
    }
  }

  return (
    <div className="flex flex-col border-t border-blue-500 border-opacity-20 p-4 my-6 bg rounded-lg shadow-xl transform transition-all hover:bg-green-400 hover:text-white hover:border-transparent">
      <ul className=" space-y-2 my-2">
        <li>
          <strong>Title:</strong> {title}
        </li>
        <li>
          <strong>Description:</strong> {description}
        </li>
      </ul>
      <div className="flex justify-end space-x-3 border-t border-green-200">
        <div className="flex space-x-4 mt-4 mx-2">
          <EditionIcon
            onClick={handleEditButtonClick}
            className="cursor-pointer"
            size={20}
          />
          <DeleteIcon
            onClick={handleDeleteButtonClick}
            className="cursor-pointer"
            size={20}
          />
        </div>
      </div>
    </div>
  );
}
