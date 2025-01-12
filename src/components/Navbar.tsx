import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto flex items-center justify-between p-4 bg-white shadow-sm">
      <div className="flex items-center">
        <Link href="/">
          <span className="text-xl font-bold text-gray-800">E Books</span>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost">Sign In</Button>
        <Button>Sign Up</Button>
      </div>
    </nav>
  );
}
