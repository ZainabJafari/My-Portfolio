import Image from "next/image";
import { CardItemProps } from "@/types/cards";

const CardsItems: React.FC<CardItemProps> = ({
  cardImageSrc,
  cardTitle,
  cardContent,
  projectUrl,
  icon,
}) => {
  const handleButtonClick = () => {
    window.location.href = projectUrl || "";
  };
  return (
    <div className="border border-stroke rounded-md bg-white p-4 shadow-default w-full sm:w-full md:w-full lg:w-full mb-6 transition-transform transform hover:scale-105 duration-300 ease-in-out">
      <div className="w-full h-48 relative overflow-hidden rounded-md">
        {cardImageSrc ? (
          <Image
            layout="fill"
            objectFit="cover"
            src={cardImageSrc}
            alt="Cards"
          />
        ) : null}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out bg-black bg-opacity-75 text-white">
          <p className="font-bold p-3 text-center">{cardContent}</p>
        </div>
      </div>
      <div className="p-2">
        <h4 className="font-semibold text-black hover:font-bold">
          {cardTitle}
        </h4>
        <div className="flex mt-2 space-x-2">
          {icon && icon.length > 0 && icon.map((iconSrc, index) => (
            <Image
              key={index}
              src={iconSrc}
              width={30}
              height={30}
              alt="project"
            />
          ))}
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button
          className="rounded bg-[#A94E3D] py-2 px-4 text-white font-medium hover:bg-opacity-95 transition-colors duration-300 ease-in-out"
          type="button"
          onClick={handleButtonClick}
        >
          View Project
        </button>
      </div>
    </div>
  );
};

export default CardsItems;
