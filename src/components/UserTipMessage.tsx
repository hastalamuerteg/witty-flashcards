interface IUserTipMessageProps {
  children: string;
}

export default function UserTipMessage({ children: message }:IUserTipMessageProps) {
  return (
    <div className="flex justify-center items-center text-center border-2 border-indigo-500 h-auto max-w-6xl p-2 rounded-lg shadow-lg text-indigo-800 my-4 mx-auto">
      <p>{message}</p>
    </div>
  );
}
