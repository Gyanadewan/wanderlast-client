import { UserRoundIcon } from "lucide-react"
import { cn } from "cn"
import Link from "next/link"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Destinations", href: "/destinations" },
  { name: "Add Destinations", href: "/add_destinations" },
  { name: "My Bookings", href: "" },
  { name: "Admin", href: "" },
]
function Navbar() {
  return (
    <header className="relative flex h-11 shrink-0 items-center border-b border-border bg-background px-4 text-[13px]">
      <nav className="flex items-center gap-5">
        {navLinks.map((link, index) => (
           <Link
      key={link.name}
      href={link.href}
      className={cn(
        "transition-colors hover:text-foreground",
        index === 0
          ? "font-medium text-cyan-600"
          : "text-foreground/80"
      )}
    >
      {link.name}
    </Link>
        ))}
      </nav>

      <p className="absolute left-1/2 -translate-x-1/2 font-serif text-xl text-cyan-600">
        Wanderlast
      </p>

      <nav className="ml-auto flex items-center gap-4 text-foreground/80">
        <a href="#" className="flex items-center gap-1.5 hover:text-foreground">
          <UserRoundIcon className="size-3.5" />
          Profile
        </a>
        <a href="#" className="hover:text-foreground">
          Login
        </a>
        <a href="#" className="hover:text-foreground">
          Sign Up
        </a>
      </nav>
    </header>
  )
}

export { Navbar }
