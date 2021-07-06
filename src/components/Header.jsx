import logo from "../assets/witty-logo.jpeg";

export default function Header() {
  return (
    <header>
      <div className="flex justify-center items-centermx-auto p-4 h-46 mb-2">
        <img className="h-28 rounded-lg" src={logo} alt="witty logo" />
      </div>
    </header>
  );
}
