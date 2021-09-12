import homeImage from "../assets/witty-home.svg";
import Button from "./Button";

import { BsArrowRightShort as ArrowRight } from "react-icons/bs";

interface IHomeProps {
  onGetStartedAction: (selectedTab: number) => void;
}

export function Home({ onGetStartedAction }:IHomeProps) {
  function handleGetStartedButton() {
    onGetStartedAction(1);
  }

  return (
    <>
      <main className="flex flex-col justify-around items-center text-center mt-24 md:flex md:flex-row md:justify-around">
        <div className="mb-10">
          <h1 className="text-5xl md:text-7xl  m-4 font-semibold">
            Welcome to <span className="text-indigo-500">Witty</span>
          </h1>
          <p className="text-2xl m-4">
            A nice place to <span className="text-indigo-500 font-semibold">study</span> and
            have <span className="text-indigo-500 font-semibold">fun</span>
          </p>
          <Button type="button" color="bg-indigo-500" onButtonClick={handleGetStartedButton}>
            Get started
          </Button>
          <div className="flex justify-center items-center m-2">
            <ArrowRight
              size="50"
              className="animate-pulse text-center text-indigo-900"
            />
          </div>
        </div>
        <div className="mt-2 p-2">
          <img
            className="h-96"
            src={homeImage}
            alt="animation of a woman sitted and reading"
          />
        </div>
      </main>
    </>
  );
}
