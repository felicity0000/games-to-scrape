import { games } from "../constants/index.ts";
import {Star} from "lucide-react";
const Games = () => {
  return (
    <div className="flex flex-col md:items-center px-4 py-14 md:px-48">
      <div className="">
        <h2 className="text-red-600 font-semibold italic text-xl md:text-4xl">
          Games
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {games.map((item, index) => (
          <div
            key={index}
            className="max-w-sm overflow-hidden bg-white flex flex-col justify-center p-4"
          >
            {item.image.map((img, imgIndex) => (
              <img
                key={imgIndex}
                src={img}
                alt="farm products and equipment"
                className="w-full h-auto object-cover p-20"
              />
            ))}
            <div className="space-y-4">
              <div className="flex justify-center">
                <span className="font-extrabold">{item.name}</span>
              </div>
              <div className="flex justify-center">
                <span className="font-semibold">{item.genre}</span>
              </div>
              <div className="flex justify-center">
                <span className="font-semibold">{item.platform}</span>
              </div>
              <div className="flex justify-center">
                <span className="font-semibold">{item.price}</span>
              </div>
              <div className="flex justify-center">
                <span className="font-semibold flex"><Star/>{item.rating}</span>
              </div>
            </div>
              <button className="mt-2 w-full bg-red-500 text-white py-2 rounded cursor-pointer hover:bg-red-600">
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;
