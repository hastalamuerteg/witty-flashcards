export default function FlashCards({ children: flashcards }) {
  return (
    <div className="border-t border-l p-3 flex justify-center items-center flex-wrap rounded-lg shadow-xl">
      {flashcards}
    </div>
  );
}
