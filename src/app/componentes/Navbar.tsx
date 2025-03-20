import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="h-[60px] px-4 bg-gray-100 text-black shadow">
            <nav className="h-full max-w-7xl mx-auto flex justify-between items-center">
                <div className="pr-4 text-3xl font-serif">
                    <Link href='/'>Capputeeno</Link>
                </div>
                <div className="flex gap-x-2">
                    <div className="flex items-center bg-gray-300 rounded-md">
                        <input type="text" className="grow outline-none pl-3"
                            placeholder="O que você procura?"
                        />
                        <span className="px-2 text-xl">
                            <FontAwesomeIcon icon={faSearch}
                            className="cursor-pointer"
                            />
                        </span>
                    </div>

                    <span className="text-xl py-1 px-2">
                        <FontAwesomeIcon icon={faCartShopping}
                        className="cursor-pointer"
                        />
                    </span>
                </div>

            </nav>
        </header>
    )
}