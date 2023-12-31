import Link from "next/link";
import Container from "../Container/Container";
import logoImage from "@/assets/smart-light.png";
import Image from "next/image";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "Products", path: "/products" },
  { title: "Solutions", path: "/solutions" },
  { title: "About", path: "/about" },
];

const Navbar = () => {
  return (
    <header className="bg-gray-900">
      <Container>
        <nav className="flex justify-between items-center py-2 bg-gray-900">
          <div className="flex items-center gap-2">
            <Link href={"/"}>
              <Image src={logoImage} className="w-12 h-12" alt="website logo" />
            </Link>
            <Link
              href={"/"}
              className="font-extrabold text-2xl from-amber-200 via-lime-300 to-lime-600 bg-gradient-to-r bg-clip-text text-transparent"
            >
              Automate <span className="font-medium">MySpace</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <ul className="flex gap-3 text-gray-300">
              {navLinks.map(({ path, title }) => (
                <li key={path}>
                  <Link href={path}>{title}</Link>
                </li>
              ))}
            </ul>
            <div>
              <div className="flex justify-between items-center bg-gray-600 rounded-3xl">
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <div className="indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span className="badge badge-sm indicator-item">8</span>
                    </div>
                  </label>
                  <div
                    tabIndex={0}
                    className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
                  >
                    <div className="card-body">
                      <span className="font-bold text-lg">8 Items</span>
                      <span className="text-info">Subtotal: $999</span>
                      <div className="card-actions">
                        <button className="btn btn-primary btn-block">
                          View cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </a>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                    <li>
                      <a>Logout</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
