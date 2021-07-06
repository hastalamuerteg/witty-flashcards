import Button from "./Button";
import { BiMessageError as ErrorIcon } from "react-icons/bi";

export default function ServerError({
  children: errorMessage,
  optionalMessage = "",
}) {
  function handleRefreshPageButton() {
    window.location.reload();
  }

  return (
    <div className="flex flex-col justify-center items-center border-2 border-indigo-600 rounded-lg shadow-lg text-gray-700 font-semibold max-w-2xl mx-auto h-96">
      <div className="flex flex-col justify-center items-center">
        <ErrorIcon size="100" className="text-indigo-700 mb-4" />
        <h2>{errorMessage}</h2>
        <p>{optionalMessage || ""}</p>
      </div>
      <div className="my-6">
        <Button color="bg-green-500" onButtonClick={handleRefreshPageButton}>
          Refresh page
        </Button>
      </div>
    </div>
  );
}
