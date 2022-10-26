import CloseIcon from "@mui/icons-material/Close";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export function Card() {
  return (
    <div className="flex flex-col gap-4 pl-12 py-4 sm:mt-10 h-72 w-full bg-white">
      <div className="flex justify-between">
        <div>Niteroi, RJ - Brasil</div>
        <CloseIcon className="mr-2" />
      </div>
      <div className="font-bold text-4xl">20°C Nublado</div>
      <div className="flex justify-between w-3/5">
        <div>
          <ArrowDownwardIcon className="text-orange-400" />
          <span className="font-bold">16°</span>
          <ArrowUpwardIcon className="text-orange-400" />
          <span className="font-bold">25°</span>
        </div>
        <div>
          <span className="font-thin">Sencacao</span>{" "}
          <span className="font-bold">19° C</span>
        </div>
      </div>
      <div className="flex justify-between w-3/5">
        <div className="flex gap-2">
          <span className="font-thin">Vento</span>
          <span className="font-bold">18km/h</span>
        </div>
        <div className="flex gap-2">
          <span className="font-thin">Humidade</span>

          <span className="font-bold">89%</span>
        </div>
      </div>
      <div className="h-[1px] w-11/12 bg-orange-300 text-center"></div>
      <div className="flex justify-around pr-12">
        <div className="text-center">
          <div className="font-bold">Tue</div>
          <span className="text-orange-400 font-bold">18° 26°</span>
        </div>
        <div className="text-center">
          <div className="font-bold">Wed</div>
          <span className="text-orange-400 font-bold">18° 26°</span>
        </div>
        <div className="text-center">
          <div className="font-bold">Thu</div>
          <span className="text-orange-400 font-bold">18° 26°</span>
        </div>
        <div className="text-center">
          <div className="font-bold">Fri</div>
          <span className="text-orange-400 font-bold">18° 26°</span>
        </div>
        <div className="text-center">
          <div className="font-bold">Sat</div>
          <span className="text-orange-400 font-bold">18° 26°</span>
        </div>
      </div>
    </div>
  );
}
