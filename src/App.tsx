import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "./components/Card";

function App() {
  const key = "3bd3dfaaaf5d4642a54234042222510";
  const [forecast, setForecast] = useState<any>({});
  const [showCard, setShowCard] = useState<boolean>(false);
  const [city, setCity] = useState<string>("");

  function handleChangeCity(event: any) {
    setCity(event.target.value);
    console.log(city);
  }

  /*  function handleShowCard(city: String) {
    axios(
      `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=6&aqi=no&alerts=no`
    ).then((response) => {
      setForecast(response.data);
    });
    showCard === false ? setShowCard(true) : setShowCard(false);
  }
  console.log(`${forecast.data} = forecast... ${city} = city`); */

  const callApi = async (city: string) => {
    const response = await axios(
      `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=6&aqi=no&alerts=no`
    );
    setForecast(response.data);
    showCard === false ? setShowCard(true) : setShowCard(false);
  };

  return (
    <div className="flex justify-center items-start w-screen h-screen bg-gradient-to-t from-yellow-400 to-orange-500">
      <div className="flex flex-col w-full sm:w-auto">
        <h1 className="sm:mt-40 text-center text-white text-5xl sm:text-6xl">
          Weather Forecast
        </h1>
        {showCard && <Card forecast={forecast} city={city} />}
        <div className="bg-white mt-10">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              callApi(city);
            }}
          >
            <input
              className="text-xl px-4 py-3 w-11/12"
              placeholder="Choose city"
              onChange={handleChangeCity}
              value={city}
            ></input>

            <SearchIcon />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
