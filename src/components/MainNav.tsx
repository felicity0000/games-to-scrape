import { Button } from "./ui/button";

const MainNav = () => {
  return (
    <span className="flex space-x-2 items-center">
      <Button
        variant="ghost"
        className="font-bold hover:text-red-500 hover:bg-white"
      >
        Click Me
      </Button>
    </span>
  );
};

export default MainNav;
