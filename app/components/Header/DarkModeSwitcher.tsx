import { useEffect } from 'react';
import useColorMode from "../../hook/useColorMode";

const DarkModeSwitcher = () => {
  const [colorMode, setColorMode] = useColorMode();

  useEffect(() => {
    const switcher = document.querySelector('input[name="checkbox"]') as HTMLInputElement;
    if (switcher) {
      switcher.checked = colorMode === "dark"; 
    }
  }, [colorMode]);

  return (
    <ul>
      <li>
        <label
          className={`relative m-0 block h-7.5 w-14 rounded-full ${
            colorMode === "dark" ? "bg-[#F58A51]" : "bg-stroke"
          }`}
        >
          <input
            type="checkbox"
            name="checkbox"
            onChange={() => {
              if (typeof setColorMode === "function") {
                setColorMode(colorMode === "light" ? "dark" : "light");
              }
            }}
            className="dur absolute top-0 z-50 m-0 h-full w-full cursor-pointer opacity-0"
          />
          <span
            className={`absolute top-1/2 left-[3px] flex h-6 w-6 -translate-y-1/2 translate-x-0 items-center justify-center rounded-full bg-white shadow-switcher duration-75 ease-linear ${
              colorMode === "dark" && "!right-[3px] !translate-x-full"
            }`}
          >
            <span className="dark:hidden">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
              </svg>
            </span>
            <span className="hidden dark:inline-block">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
              </svg>
            </span>
          </span>
        </label>
      </li>
    </ul>
  );
};

export default DarkModeSwitcher;
