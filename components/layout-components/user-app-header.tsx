import { UserNav } from "../common/user-nav";
import favicon from "@/public/favicon-32x32.png";
export default function UserAppHeader() {
  return (
    <header>
      <nav className="flex justify-between items-center px-4 py-2 shadow-md z-50">
        <span className="font-extrabold flex flex-row items-center justify-center">
            <img src={favicon.src} alt="" />
          pic<span className="font-extralight">Turyun</span>
        </span>
        <UserNav />
      </nav>
    </header>
  );
}
