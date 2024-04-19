import DarkModeSwitcher from "./DarkModeSwitcher";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-999 flex drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-end gap-3 2xsm:gap-7">
        <DarkModeSwitcher />
      </div>
    </header>
  );
};

export default Navbar;
