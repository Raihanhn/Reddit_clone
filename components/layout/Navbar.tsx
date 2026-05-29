import { Search } from "lucide-react";
import Link from "next/link";
import { Input } from "../ui/input";


export function Navbar() {
  return (
    <header>
      <div>
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight text-foreground"
        >
          <span></span>
          <span className="flex size-8 items-center justify-center rounded-full bg-primary text-sm font-bold 
          text-primary-foreground ">
            T
          </span>
          <span className="text-lg">Threadly</span>
        </Link>

        <div>
            <Search className=" pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground " />
            <Input 
            readOnly
             placeholder="Search posts..." 
             className="w-full rounded-md border-0 bg-secondary text-sm ring-1 ring-input focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-10"
             />
        </div>

        <div className=""></div>

      </div>
    </header>
  );
}
