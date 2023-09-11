import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "./components/Card";

function App() {
  const [forecast, setForecast] = useState<any>({});
  const [showCard, setShowCard] = useState<boolean>(false);
  const [city, setCity] = useState<string>("");

  function handleChangeCity(event: any) {
    setCity(event.target.value);
  }

  const callApi = async () => {
    const response = await axios(
      `https://api.weatherapi.com/v1/forecast.json?key=${
        import.meta.env.VITE_API_KEY
      }&q=${city}&days=6&aqi=no&alerts=no`
    );
    setForecast(response.data);
    setShowCard(true);
  };

  return (
    <div className="flex justify-center items-start w-screen h-screen bg-gradient-to-t from-green-400 to-blue-500">
      <div className="flex flex-col w-full sm:w-auto">
        <h1 className="sm:mt-40 text-center text-white text-5xl sm:text-6xl">
          Weather Forecast
        </h1>
        {showCard && <Card forecast={forecast} city={city} />}
        <div className="bg-white mt-10">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              callApi();
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
