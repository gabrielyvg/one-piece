import Link from "next/link";

export default function Header() {
    return (
        <>
            <div className="w-full h-10 sticky top-0">
                <div className="container mx-auto px-4 h-full">
                    <div className="flex justify-between items-center h-full">
                        {/* <Logo */}
                        <ul className="hidden md:flex gap-x-6 text-black">
                            <li>
                                <Link href="#">
                                    <p>Straw hats</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <p>White Beard Pirates</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <p>Seven Warlords of the Sea</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}