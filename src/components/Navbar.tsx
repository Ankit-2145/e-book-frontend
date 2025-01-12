"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./toggle";

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto flex items-center justify-between p-4 bg-background shadow-sm">
      <div className="flex items-center">
        <Link href="/">
          <span className="text-xl font-bold text-foreground">E Books</span>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <ModeToggle />
        <Button variant="ghost">Sign In</Button>
        <Button>Sign Up</Button>
      </div>
    </nav>
  );
}
