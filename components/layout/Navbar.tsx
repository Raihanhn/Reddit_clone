import { Search } from "lucide-react";
import Link from "next/link";
import { Input } from "../ui/input";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <header className=" sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md ">
      <div className="mx-auto flex h-14 max-w-[1200px] items-center gap-4 px-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight text-foreground"
        >
          <span></span>
          <span
            className="flex size-8 items-center justify-center rounded-full bg-primary text-sm font-bold 
          text-primary-foreground "
          >
            T
          </span>
          <span className="text-lg">Threadly</span>
        </Link>

        <div className="relative mx-auto hidden max-w-xl flex-1 md:block">
          <Search className=" pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground " />
          <Input
            readOnly
            placeholder="Search posts..."
            className="w-full rounded-md border-0 bg-secondary text-sm ring-1 ring-input focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-10"
          />
        </div>

        <div className="ml-auto flex items-center gap-2">
          <Link href="/auth/sign-in" className={cn(buttonVariants({variant: "ghost", size: "default"}))}>
            Log In
          </Link>
           <Link href="/auth/sign-up" className={cn(buttonVariants({ variant: "default" }))}>
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
