import { getNewId } from '../services/idService';

interface IRadioButtonProps {
  id:string;
  name:string;
  children: string;
  buttonChecked: boolean;
  onButtonClick: () => void;
}


export default function RadioButton({
  id = getNewId(),
  name = 'radioButtonName',
  children: buttonDescription = 'Button Description',
  buttonChecked = false,
  onButtonClick,
}:IRadioButtonProps) {
  function handleRadioButtonChange() {
    if (onButtonClick) {
      onButtonClick();
    }
  }

  return (
    <div className="flex items-center space-x-2">
      <input
        id={id}
        type="radio"
        name={name}
        className=" h-4 w-4"
        checked={buttonChecked}
        onChange={handleRadioButtonChange}
      />
      <label htmlFor={id}>{buttonDescription}</label>
    </div>
  );
}
