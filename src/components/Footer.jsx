import logo from "../assets/witty-logo.jpeg";

export function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center bg-indigo-800 pt-8 mt-16">
      <div>
        <img className="h-20 rounded-full" src={logo} alt="witty logo" />
      </div>
      <h2 className="text-white font-bold mt-4 mb-2">
        Developed by Gabriel Vicente
      </h2>
    </footer>
  );
}
