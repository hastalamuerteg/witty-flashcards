import { getNewId } from "../services/idService";
import {ChangeEvent} from 'react'

interface ITextAreaProps {
  labelDescription:string;
  textAreaValue: string;
  onTextAreaChange: (args: string) => void;
  maxLength?:number;
  rows?: number;
  id?:string;
}

export default function TextArea({
  labelDescription = "Label description",
  textAreaValue = "",
  onTextAreaChange,
  maxLength = 230,
  rows = 4,
  id = getNewId()
}:ITextAreaProps) {
  function handleTextAreaChange({ currentTarget }:ChangeEvent<HTMLTextAreaElement>) {
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
