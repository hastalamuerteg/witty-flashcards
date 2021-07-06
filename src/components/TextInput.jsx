import { getNewId } from "../services/idService";

export default function TextInput({
  labelDescription = "Label description",
  onInputChange = null,
  id = getNewId(),
  inputValue = "",
}) {
  function handleInputChange({ currentTarget }) {
    if (onInputChange) {
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }
  }

  return (
    <div className="flex flex-col w-full">
      <label className="text-sm mb-1 text-white text-left" htmlFor={id}>
        {labelDescription}
      </label>

      <input
        id={id}
        className="border p-2 rounded-lg  focus:outline-none focus:ring-4 ring-green-100 w-full"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Title"
      />
    </div>
  );
}
