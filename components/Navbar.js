import Link from "next/link";

const Navbar = () => (
  <>
    <nav className="h-screen w-1/4 flex flex-col fixed inset-x-0 top-0">
            <div className="pl-2 flex flex-col gap-4 w-1/2">
              <Link href="/"><p className="text-3xl border-b-8 border-transparent hover:border-green-500 cursor-default">PSBAlter</p></Link>
              <Link href="/sop"><p className="text-3xl border-b-8 border-transparent hover:border-green-500 cursor-default">SOP</p></Link>
            </div>
    </nav>
  </>
);

export default Navbar;
