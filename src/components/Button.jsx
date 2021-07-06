export default function Button({
  children: description = "Button description",
  color,
  onButtonClick = null,
  type = "button",
}) {
  function handleButtonClick() {
    if (onButtonClick) {
      onButtonClick();
    }
  }
  return (
    <button
      className={`border-none p-3 rounded-lg shadow-lg ${color} text-white font-semibold transition-all  transform hover:scale-105 focus-within:outline-none active:scale-100`}
      onClick={handleButtonClick}
      type={type}
    >
      {description}
    </button>
  );
}
