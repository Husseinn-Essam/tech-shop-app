"use client";
import React from "react";
import NavLinks from "./NavLinks";

import { useSession } from "next-auth/react";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import CartProductNumber from "./CartProductNumber";

const Navbar: React.FC = () => {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <div className="navbar w-full box-border bg-base-100 ">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl flex items-center">
          <img
            className="h-10 w-10"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABpklEQVR4nO2Zy0oDQRBFG/0CF4FkUH9ExBcu1HyOSXAbstG/8Y1KXJh/iWShJMGFUcyR1hZDIBmZ6pfQF4ZhFrlVh7rDNBWlhAKqQBt4obj0b++BfWk/RSFa2FfTN4SehNYrcAhUBF4VoGa88DoZEwWtmkXPuvG8s+X5l6JDUzQzzx1BnDrGIzPPfZ8gHxZBHqZACAHSsOjZCAkyMtmWvOyZgRiFBHEiFQBkE7gEeoK+e8ZjPSTIgmXfL9n0zCuYQOYJI+VL/3YiwMGMU64TkKlTcdWWeZPZcgkyqZbUeI/58gWCaDL6JEo8IG2JcT8ikKHE+D3HfNUixEpOLVyCXOkGLEAsm2OKM5An4lFfAnJNPLqRgOwA49AEfPewWxjEwNQDw4yBIynEorlvAKdAF3j2dHWBM2BrspeiIBdASQUWUNLvq8TgDRgAJ8AaUAaWPF1lU/P458MsBYlGKoGQJuJEKkWLFC0nUilapGg5kUrRIkXLiVSKFilaTqRStIhqrzWQTERvEmPRrQRkO+21Ytprqd/J6P/T9Y7p0eNeS9c616nIa/ATcA77JAZyghEAAAAASUVORK5CYII="
          />
          <span>Tech Store</span>
        </a>
      </div>
      <div className="flex items-center gap-5">
        <div className="dropdown dropdown-end relative">
          <button
            onClick={() => router.push("/cart")}
            className="flex flex-row items-center relative gap-1"
          >
            {session?.user && (
              <>
                <ShoppingCartIcon className="h-8 w-8" />
                <span className="absolute top-0 right-0 bg-red-500 text-white w-5 h-4 flex items-center justify-center rounded-full text-xs">
                  <CartProductNumber />
                </span>
              </>
            )}
          </button>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[99] p-2  shadow bg-base-100 rounded-box w-52 overflow-hidden"
          >
            <NavLinks />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
