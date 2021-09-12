import logo from "../assets/witty-logo.jpeg";

export function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center bg-indigo-800 pt-4 mt-20">
      <div>
        <img className="h-10 rounded-full" src={logo} alt="witty logo" />
      </div>
      <p className="text-white font-bold mt-4 mb-2">
        Developed by Gabriel Vicente
      </p>
    </footer>
  );
}
