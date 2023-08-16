import { useState } from "react";
import "./App.css";
import CharactersCard from "./components/CharactersCard";


function App() {
  const [showCards, setShowCards] = useState(null)

  const idCards = {
    id1: 'Martin',
    id2: 'Edwar',
    id3: 'Alan'
  }

  const idUrl = {
    id1: 'https://third-react-deliverable.netlify.app/',
    id2: 'https://rick-and-morty-api-e.netlify.app/',
    id3: 'https://rickandmortydimensions.netlify.app/'
  }

  const handleShowCard = (e) => {
    setShowCards(e.target.id)
  }

  return (
    <main className="bg-[url(/images/bg-fscreen.png)] min-h-screen bg-contain w-full flex flex-col items-center font-Fira overflow-hidden">
      <div className="p-6 pb-0">
        <img
          className="max-w-[600px] w-full mx-auto min-[400px]:h-24"
          src="/images/logo-ram.png"
          alt=""
        />
      </div>
      <div className="text-green-apple flex gap-4">
        <button id={idCards.id1} onClick={handleShowCard} className="border-2 border-green-apple px-4 mt-8 rounded-full cursor-pointer z-50 hover:bg-green-apple hover:text-black">Martin</button>
        <button id={idCards.id2} onClick={handleShowCard} className="border-2 border-green-apple px-4 mt-8 rounded-full cursor-pointer z-50 hover:bg-green-apple hover:text-black">Edwar</button>
        <button id={idCards.id3} onClick={handleShowCard} className="border-2 border-green-apple px-4 mt-8 rounded-full cursor-pointer z-50 hover:bg-green-apple hover:text-black">Alan</button>
      </div>
      <div className="w-full rotate-180 min-[400px]:w-[400px]">
        <img src="/images/black-hole-ram.png" />
      </div>
      <section className={`h-auto w-10/12 flex justify-center mb-6 -mt-6 relative min-[400px]:w-[280px]`}>
        <section className={`${showCards === idCards.id1 ? 'top-0 opacity-1 visible ml-[480px]' : '-mt-96 opacity-0 invisible'} transition-[opacity_visibility] duration-1000 w-full`}>
          <CharactersCard image={"/images/porci.png"} name={'Martin Porciúncula'} country={'Uruguay'} url={idUrl.id1} />
        </section>
        <section className={` ${showCards === idCards.id2 ? 'top-0 opacity-1 visible' : '-mt-96 opacity-0 invisible'} transition-[opacity_visibility] duration-1000 w-full`}>
          {<CharactersCard image={"/images/rick-morty-robot.png"} name={'Edwar León'} country={'Colombia'} url={idUrl.id2} />}</section>
        <section className={` ${showCards === idCards.id3 ? 'top-0 opacity-1 visible mr-[480px]' : '-mt-96 opacity-0 invisible'}  transition-[opacity_visibility] duration-1000 w-full`}>
          {<CharactersCard image={"/images/tinckles-ram.png"} name={'Alan Polanco'} country={'Argentina'} url={idUrl.id3} />}</section>
      </section>
    </main >
  );
}

export default App;