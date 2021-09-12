interface IMessageBoxProps {
  createMode: boolean;
}

export default function MessageBox({ createMode }:IMessageBoxProps) {
  const createModeClassName = createMode ? "bg-green-300" : "bg-yellow-300";
  const createModeMessageBox = createMode ? "creation" : "edition";
  return (
    <div
      className={`flex flex-col justify-center items-center ${createModeClassName} rounded-md shadow-md text-gray-600 font-bold w-auto p-4 h-12 my-4 mx-auto`}
    >
      {`You are now in ${createModeMessageBox} mode`}
    </div>
  );
}
