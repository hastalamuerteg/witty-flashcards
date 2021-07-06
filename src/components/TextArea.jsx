import { getNewId } from "../services/idService";

export default function TextArea({
  labelDescription = "Label description",
  textAreaValue = "",
  onTextAreaChange = null,
  maxLength = 230,
  rows = 4,
  id = getNewId(),
}) {
  function handleTextAreaChange({ currentTarget }) {
    if (onTextAreaChange) {
      const newValue = currentTarget.value;
      onTextAreaChange(newValue);
    }
  }

  return (
    <div className="flex flex-col w-full my-6">
      <label className="text-sm mb-1 text-white" htmlFor={id}>
        {labelDescription}
      </label>

      <textarea
        id={id}
        className="border p-2 rounded-xl resize-none focus:outline-none focus:ring-4 ring-green-100"
        type="text"
        value={textAreaValue}
        maxLength={maxLength}
        rows={rows}
        onChange={handleTextAreaChange}
        placeholder="Description"
      />
      <div className="text-right text-white my-2">
        <span>{`${textAreaValue.length}/${maxLength}`}</span>
      </div>
    </div>
  );
}
