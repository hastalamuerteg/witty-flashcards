import { useEffect, useState } from "react";
import TextArea from "./TextArea";
import TextInput from "./TextInput";
import Button from "./Button";
import Error from "./Error";

export default function FlashCardForm({
  createMode = true,
  onPersist = null,
  children: flashcard,
}) {
  const [title, setTitle] = useState(flashcard?.title || "");
  const [description, setDescription] = useState(flashcard?.description || "");
  const [error, setError] = useState("");

  useEffect(() => {
    if (createMode) {
      setTitle("");
      setDescription("");
    }
  }, [createMode]);

  function handleInputClean() {
    setTitle("");
    setDescription("");
  }

  function validateFormInput() {
    return title.trim() !== "" && description.trim() !== "";
  }

  function handleTitleChange(newTitle) {
    setTitle(newTitle);
  }
  function handleDescriptionChange(newDescription) {
    setDescription(newDescription);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (validateFormInput()) {
      setError("");
      if (onPersist) {
        onPersist(title, description);
        handleInputClean();
      }
    } else {
      setError("Title and description are required, please try again.");
    }
  }

  function handleFormReset() {
    handleInputClean();
  }

  return (
    <form
      className="flex flex-col justify-center bg-indigo-900 rounded-lg shadow-xl px-10"
      onSubmit={handleFormSubmit}
      onReset={handleFormReset}
    >
      <h1 className="text-center font-semibold text-white uppercase mt-16 mb-4">
        FlahCard management
      </h1>
      {error.trim() !== "" ? <Error>{error}</Error> : <span></span>}

      <div className="flex flex-col justify-center items-center ">
        <TextInput
          labelDescription="FlashCard Title"
          onInputChange={handleTitleChange}
          inputValue={title}
        />
        <TextArea
          labelDescription="FlashCard Description"
          onTextAreaChange={handleDescriptionChange}
          textAreaValue={description}
        />
      </div>
      <div className="flex justify-end space-x-4 mt-2 mb-8">
        <Button color="bg-yellow-500" type="reset">
          Clear
        </Button>
        <Button color="bg-green-500" type="submit">
          Save
        </Button>
      </div>
    </form>
  );
}
