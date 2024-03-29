import CloseIcon from "@mui/icons-material/Close";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useState } from "react";

export function Card({ forecast }: any) {
  const [weekDay, setWeekDay] = useState();

  return (
    <div className="flex flex-col gap-4 pl-12 pr-6 py-4 sm:mt-10 h-72 w-full bg-white">
      <div className="flex justify-between">
        <div>
          {forecast.location.name} - {forecast.location.country}
        </div>
        <CloseIcon className="mr-2" />
      </div>
      <div className="font-bold text-4xl text">
        {forecast.current.temp_c}°C {forecast.current.condition.text}
      </div>
      <div className="flex justify-between w-3/5">
        <div>
          <ArrowDownwardIcon className="text-blue-600" />
          <span className="font-bold">
            {forecast.forecast.forecastday[0].day.mintemp_c}°
          </span>
          <ArrowUpwardIcon className="text-blue-600" />
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
      <div className="h-[1px] w-11/12 bg-blue-300 text-center"></div>
      {/* <div className="flex justify-around pr-12">
        <div className="text-center">
          <div className="font-bold">Tue</div>
          <span className="text-blue-600 font-bold">
            {parseInt(forecast.forecast.forecastday[1].day.mintemp_c)}°{" "}
            {parseInt(forecast.forecast.forecastday[1].day.maxtemp_c)}°
          </span>
        </div>
        <div className="text-center">
          <div className="font-bold">Wed</div>
          <span className="text-blue-600 font-bold">
            {parseInt(forecast.forecast.forecastday[2].day.mintemp_c)}°{" "}
            {parseInt(forecast.forecast.forecastday[2].day.maxtemp_c)}°
          </span>
        </div>
        <div className="text-center">
          <div className="font-bold">Thu</div>
          <span className="text-blue-600 font-bold">
            {parseInt(forecast.forecast.forecastday[3].day.mintemp_c)}°{" "}
            {parseInt(forecast.forecast.forecastday[3].day.maxtemp_c)}°
          </span>
        </div>
        <div className="text-center">
          <div className="font-bold">Fri</div>
          <span className="text-blue-600 font-bold">
            {parseInt(forecast.forecast.forecastday[4].day.mintemp_c)}°{" "}
            {parseInt(forecast.forecast.forecastday[4].day.maxtemp_c)}°
          </span>
        </div>
        <div className="text-center">
          <div className="font-bold">Sat</div>
          <span className="text-blue-600 font-bold">
            {parseInt(forecast.forecast.forecastday[5].day.mintemp_c)}°{" "}
            {parseInt(forecast.forecast.forecastday[5].day.maxtemp_c)}°
          </span>
        </div>
      </div> */}
      <div className="flex justify-around pr-12">
        {forecast.forecast.forecastday.map((day: any) => (
          <div className="text-center" key={day.date}>
            <div className="font-bold">{day.date.slice(5, 10)}</div>
            <span className="text-blue-600 font-bold">
              <ArrowDownwardIcon />
              {parseInt(day.day.mintemp_c)}° {parseInt(day.day.maxtemp_c)}°
              <ArrowUpwardIcon />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
