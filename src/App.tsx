import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "./components/Card";

function App() {
  const [showCard, setShowCard] = useState<boolean>(false);
  const key = "3bd3dfaaaf5d4642a54234042222510";

  useEffect(() => {
    axios(
      `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=London&days=5&aqi=no&alerts=no`
    ).then((response) => {
      console.log(response.data);
    });
  }, []);

  return (
    <div className="flex justify-center items-start w-screen h-screen bg-gradient-to-t from-yellow-400 to-orange-500">
      <div className="flex flex-col w-full sm:w-auto">
        <h1 className="sm:mt-40 text-white text-5xl sm:text-6xl">
          Weather Forecast
        </h1>
        {showCard /*  === true  */ && <Card />}
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
