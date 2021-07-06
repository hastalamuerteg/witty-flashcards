export default function Error({ children: message }) {
  return (
    <div className="animate-bounce flex flex-col justify-center items-center bg-red-400 rounded-lg shadow-lg text-white text-center font-semibold max-w-4xl mx-auto p-2 h-8 m-6">
      {message}
    </div>
  );
}
