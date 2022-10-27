import CloseIcon from "@mui/icons-material/Close";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useEffect, useState } from "react";
import axios from "axios";

export function Card() {
  const key = "3bd3dfaaaf5d4642a54234042222510";
  const [forecast, setForecast] = useState<any>({});

  useEffect(() => {
    const callApi = async () => {
      const response = await axios(
        `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=London&days=6&aqi=no&alerts=no`
      );
      setForecast(response.data);
    };
    callApi();
  }, []);
  useEffect(() => {
    console.log(forecast);
  }, [forecast]);

  return (
    <div className="flex flex-col gap-4 pl-12 py-4 sm:mt-10 h-72 w-full bg-white">
      <div className="flex justify-between">
        <div>
          {forecast.location.name} - {forecast.location.country}
        </div>
        <CloseIcon className="mr-2" />
      </div>
      <div className="font-bold text-4xl">
        {forecast.current.temp_c}°C {forecast.current.condition.text}
      </div>
      <div className="flex justify-between w-3/5">
        <div>
          <ArrowDownwardIcon className="text-orange-400" />
          <span className="font-bold">
            {forecast.forecast.forecastday[0].day.mintemp_c}°
          </span>
          <ArrowUpwardIcon className="text-orange-400" />
          <span className="font-bold">
            {forecast.forecast.forecastday[0].day.maxtemp_c}°
          </span>
        </div>
        <div>
          <span className="font-thin">Feels like</span>{" "}
          <span className="font-bold">{19}° C</span>
        </div>
      </div>
      <div className="flex justify-between w-3/5">
        <div className="flex gap-2">
          <span className="font-thin">Wind</span>
          <span className="font-bold">{forecast.current.wind_kph}km/h</span>
        </div>
        <div className="flex gap-2">
          <span className="font-thin">Humidity</span>

          <span className="font-bold">{forecast.current.humidity}%</span>
        </div>
      </div>
      <div className="h-[1px] w-11/12 bg-orange-300 text-center"></div>
      <div className="flex justify-around pr-12">
        <div className="text-center">
          <div className="font-bold">Tue</div>
          <span className="text-orange-400 font-bold">
            {parseInt(forecast.forecast.forecastday[1].day.mintemp_c)}°{" "}
            {parseInt(forecast.forecast.forecastday[1].day.maxtemp_c)}°
          </span>
        </div>
        <div className="text-center">
          <div className="font-bold">Wed</div>
          <span className="text-orange-400 font-bold">
            {parseInt(forecast.forecast.forecastday[2].day.mintemp_c)}°{" "}
            {parseInt(forecast.forecast.forecastday[2].day.maxtemp_c)}°
          </span>
        </div>
        <div className="text-center">
          <div className="font-bold">Thu</div>
          <span className="text-orange-400 font-bold">
            {parseInt(forecast.forecast.forecastday[3].day.mintemp_c)}°{" "}
            {parseInt(forecast.forecast.forecastday[3].day.maxtemp_c)}°
          </span>
        </div>
        <div className="text-center">
          <div className="font-bold">Fri</div>
          <span className="text-orange-400 font-bold">
            {parseInt(forecast.forecast.forecastday[4].day.mintemp_c)}°{" "}
            {parseInt(forecast.forecast.forecastday[4].day.maxtemp_c)}°
          </span>
        </div>
        <div className="text-center">
          <div className="font-bold">Sat</div>
          <span className="text-orange-400 font-bold">
            {parseInt(forecast.forecast.forecastday[5].day.mintemp_c)}°{" "}
            {parseInt(forecast.forecast.forecastday[5].day.maxtemp_c)}°
          </span>
        </div>
      </div>
    </div>
  );
}
