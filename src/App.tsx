import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { Card } from "./components/Card";

function App() {
  const [showCard, setShowCard] = useState<boolean>(false);

  return (
    <div className="flex justify-center items-start w-screen h-screen bg-gradient-to-t from-yellow-400 to-orange-500">
      <div className="flex flex-col w-full sm:w-auto">
        <h1 className="sm:mt-40 text-white text-5xl sm:text-6xl">
          Weather Forecast
        </h1>
        {showCard && <Card />}
        <div className="bg-white mt-10">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              showCard === false ? setShowCard(true) : setShowCard(false);
            }}
          >
            <input
              className="text-xl px-4 py-3 w-11/12"
              placeholder="Insira aqui o nome da cidade"
            ></input>

            <SearchIcon />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
