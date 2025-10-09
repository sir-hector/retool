import { Moon } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="p-4 flex items-center justify-between">
      {/* LEFT */}
      collapsebutton
      {/* RIGHT */}
      <div className="flex items-center">
        <Link href="/">Dashboard</Link>
        <Moon />
      </div>
    </nav>
  );
};

export default Navbar;
