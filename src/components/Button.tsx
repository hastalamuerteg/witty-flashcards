interface IButtonProps {
  children:string;
  color:string;
  onButtonClick?: () => void;
  type: 'button' | 'submit' | 'reset';
}

export default function Button({
  children: description = "Button description",
  color,
  onButtonClick,
  type,
}:IButtonProps) {
  function handleButtonClick() {
    if (onButtonClick) {
      onButtonClick();
    }
  }
  return (
    <button
      className={`border-none py-2 px-8 rounded-lg shadow-lg ${color} text-white font-semibold transition-all  transform hover:scale-105 focus-within:outline-none active:scale-100`}
      onClick={handleButtonClick}
      type={type}
    >
      {description}
    </button>
  );
}
