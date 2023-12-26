import Image from "next/image";
import logo from "@/assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="bg-[#20262C] h-[100px] flex items-center px-8">
      <Image src={logo} alt="Logo" width={17.2} height={40} />
    </nav>
  );
};

export default Navbar;
