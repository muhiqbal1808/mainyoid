import Image from "next/image";
import Link from "next/link";
import MenuItems from "./MenuItems";
import LoginButton from "./LoginButton";

const Navbar = () => {
  return (
    <nav className="bg-black flex text-white justify-between p-4 items-center">
      <div className="">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/Logo-Only.png" width={30} height={30} alt="..."></Image>
          <h1>MainYo Indonesia</h1>
        </Link>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="hidden sm:block">
          <MenuItems />
        </div>
        <div>
          <LoginButton />
        </div>
        <div>
          <div>

          </div>
          <div className="sm:hidden">
            <MenuItems />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
