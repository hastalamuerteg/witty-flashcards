export interface IFlashcard {
  id: string;
  title: string;
  description: string;
  showTitle?: boolean;
}

export interface IFlashCardProps {
  id: string;
  title: string;
  description: string;
  showFlashcardTitle: boolean;
  onToggleFlashCard: (id: string) => void;
}

export interface IFlashCardItemProps {
  children: IFlashCardProps;
  onFlashCardDelete: (id: string) => void;
  onFlashCardEdit: (flashcard: IFlashcard) => void;
}
