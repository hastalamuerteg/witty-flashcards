import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AiFillHome as HomeIcon } from "react-icons/ai";

import { useEffect, useState } from "react";
import Button from "../components/Button";
import FlashCard from "../components/FlashCard";
import FlashCards from "../components/FlashCards";
import Header from "../components/Header";
import Main from "../components/Main";
import RadioButton from "../components/RadioButton";
import Loading from "../components/Loading";
import ServerError from "../components/ServerError";
import FlashCardItem from "../components/FlashCardItem";
import FlashCardForm from "../components/FlashCardForm";
import MessageBox from "../components/MessageBox";

import { helperShuffleArray } from "../helpers/arrayHelpers";
import {
  apiCreateFlashcard,
  apiDeleteFlashCard,
  apiGetAllFlashCards,
  apiEditFlashcard,
} from "../services/apiService";
import { Home } from "../components/Home";
import UserTipMessage from "../components/UserTipMessage";
import { Footer } from "../components/Footer";
import { IFlashcard } from "../@types/flashcard";

export function FlashCardsPage() {
  const [allCards, setAllCards] = useState<IFlashcard[]>([]);
  const [studyCards, setStudyCards] = useState<IFlashcard[]>([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState();
  const [createMode, setCreateMode] = useState(true);
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [selectedFlashCard, setSelectedFlashCard] = useState<IFlashcard>(
    {} as IFlashcard
  );

  const [radioButtonshowTitle, setRadioButtonShowTitle] =
    useState<boolean>(true);

  useEffect(() => {
    async function getAllFlashCards() {
      try {
        const allFlashCards = await apiGetAllFlashCards();
        setAllCards(allFlashCards);
        setloading(false);
      } catch (err) {
        setError(err.message);
      }
    }
    getAllFlashCards();
  }, []);

  function handleShuffleCards() {
    const shuffledCards = helperShuffleArray(studyCards);
    setStudyCards(shuffledCards);
  }

  useEffect(() => {
    setStudyCards(allCards.map((card) => ({ ...card, showTitle: true })));
  }, [allCards]);

  function handleFlashCardInternalState(isCardShowingTitle: boolean) {
    const updateCards = [...studyCards].map((card) => ({
      ...card,
      showTitle: isCardShowingTitle,
    }));
    return updateCards;
  }

  function handleRadioShowTitleClick() {
    setStudyCards(handleFlashCardInternalState(true));
    setRadioButtonShowTitle(true);
  }
  function handleRadioShowDescriptionClick() {
    setStudyCards(handleFlashCardInternalState(false));
    setRadioButtonShowTitle(false);
  }

  function handleToggleFlashCard(cardID: string) {
    const updatedCards = [...studyCards];
    const cardIndex = updatedCards.findIndex(({ id }) => id === cardID);
    updatedCards[cardIndex].showTitle = !updatedCards[cardIndex].showTitle;
    setStudyCards(updatedCards);
  }

  async function handleFlashCardDelete(flashCardID: string) {
    try {
      await apiDeleteFlashCard(flashCardID);

      const updatedCardsAfterDelete = allCards.filter((flashcard) => {
        return flashcard.id !== flashCardID;
      });
      setAllCards(updatedCardsAfterDelete);
      setError("");
      toast.success("Card successfully deleted!");
    } catch (err) {
      setError(err.message);
    }
  }

  function handleFlashCardEdit(flashCard: IFlashcard) {
    setSelectedFlashCard(flashCard);
    setCreateMode(false);
    setSelectedTab(2);
  }

  function handleNewFlashCard() {
    setCreateMode(true);
    setSelectedFlashCard({} as IFlashcard);
  }

  function handleTabSelect(tabIndex: number) {
    setSelectedTab(tabIndex);
  }

  async function handleFlashCardPersist(title: string, description: string) {
    if (createMode) {
      try {
        const newFlashCard = await apiCreateFlashcard(title, description);

        setAllCards([...allCards, newFlashCard]);

        setError("");
        toast.success(`Card "${title}" successfully created!`);
      } catch (err) {
        setError(err.message);
      }
    } else {
      try {
        await apiEditFlashcard(selectedFlashCard!.id, title, description);

        const updatedCardsList = allCards.map((card) => {
          if (card.id === selectedFlashCard.id) {
            return { ...card, title, description };
          }
          return card;
        });
        setAllCards(updatedCardsList);
        setSelectedFlashCard({} as IFlashcard);
        setCreateMode(true);
        setError("");
        toast.success(`Card "${title}" successfully edited!`);
      } catch (err) {
        setError(err.message);
      }
    }
  }

  let isApplicationLoading = (
    <div className="flex justify-center m-4">
      <Loading />
    </div>
  );

  if (error) {
    isApplicationLoading = (
      <ServerError optionalMessage="Please try again later">
        {error}
      </ServerError>
    );
  }

  if (!loading && !error) {
    isApplicationLoading = (
      <>
        <Tabs
          selectedIndex={selectedTab}
          onSelect={handleTabSelect}
          selectedTabClassName="bg-indigo-700 text-white rounded-lg"
        >
          <TabList className="flex justify-center space-x-2 mb-16 font-semibold">
            <Tab>
              <HomeIcon size="24" />
            </Tab>
            <Tab className="border border-indigo-500 border-opacity-40 p-2 cursor-pointer px-6 w-40 rounded-lg text-center shadow-lg">
              List
            </Tab>
            <Tab className="border border-indigo-500 border-opacity-40 p-2 cursor-pointer px-6 w-40 rounded-lg text-center shadow-lg">
              Register
            </Tab>
            <Tab className="border border-indigo-500 border-opacity-40 p-2 cursor-pointer px-6 w-40 rounded-lg text-center shadow-lg">
              Study
            </Tab>
          </TabList>

          <TabPanel>
            <Home onGetStartedAction={setSelectedTab} />
          </TabPanel>
          <TabPanel className="max-w-3xl mx-auto">
            <UserTipMessage>
              This is where you can see all your flashcards as a list, you can
              edit them and delete them, give it a try.
            </UserTipMessage>
            {allCards.map((flashcard) => {
              return (
                <FlashCardItem
                  key={flashcard.id}
                  onFlashCardDelete={handleFlashCardDelete}
                  onFlashCardEdit={handleFlashCardEdit}
                >
                  {flashcard}
                </FlashCardItem>
              );
            })}
          </TabPanel>
          <TabPanel className="max-w-3xl mx-auto">
            <UserTipMessage>
              Here you can create a new flashcard, and you'll also be redirect
              to this page once you choose to edit an item in the previous page.
            </UserTipMessage>
            <MessageBox createMode={createMode} />

            <div className="text-start my-6">
              <Button
                type="button"
                color="bg-indigo-700"
                onButtonClick={handleNewFlashCard}
              >
                New
              </Button>
            </div>
            <FlashCardForm
              onPersist={handleFlashCardPersist}
              createMode={createMode}
            >
              {selectedFlashCard}
            </FlashCardForm>
          </TabPanel>
          <TabPanel>
            <UserTipMessage>
              Here you can check all your flashcards and interact with them.
              Click on a card to flip it, hit the "Show Title" button to begin
              your studies by title or hit "Show Description" to start up with
              description, and if you like you can shuffle the cards to
              reorganize them.
            </UserTipMessage>
            <div className="flex justify-center m-3">
              <Button
                type="button"
                color="bg-indigo-800"
                onButtonClick={handleShuffleCards}
              >
                Shuffle cards
              </Button>
            </div>
            <div className="flex justify-center items-center m-4 mt-10 space-x-2">
              <RadioButton
                id="radioButtonShowTitle"
                name="showInfo"
                buttonChecked={radioButtonshowTitle}
                onButtonClick={handleRadioShowTitleClick}
              >
                Show Title
              </RadioButton>
              <RadioButton
                id="radioButtonShowDescription"
                name="showInfo"
                buttonChecked={!radioButtonshowTitle}
                onButtonClick={handleRadioShowDescriptionClick}
              >
                Show Description
              </RadioButton>
            </div>
            <FlashCards>
              {studyCards.map(
                ({ id, title, description, showTitle }: IFlashcard) => (
                  <FlashCard
                    key={id}
                    id={id}
                    title={title}
                    description={description}
                    showFlashcardTitle={showTitle as boolean}
                    onToggleFlashCard={handleToggleFlashCard}
                  />
                )
              )}
            </FlashCards>
          </TabPanel>
        </Tabs>
      </>
    );
  }

  return (
    <>
      <ToastContainer toastClassName="bg-indigo-600 rounded-lg w-72" />
      <Header />
      <Main>{isApplicationLoading}</Main>
      <Footer />
    </>
  );
}
