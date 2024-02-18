import Image from 'next/image';
import Link from 'next/link';

export const Navbar = () => {
    return (
        <div className="w-full flex items-center justify-center pt-6">
            <div className="w-full px-4 md:container mx-auto md:px-6 flex flex-wrap gap-4 md:gap-6 items-end justify-between">
                <div className="w-40 flex-none">
                    <a href="https://eeagrants.org/" target="_blank">
                        <figure className="relative w-40 h-40">
                            <Image
                                src="/eea-grants-logo.png"
                                className="block w-full h-full object-contain object-center"
                                alt="EEA Grants Logo"
                                fill
                            />
                            <figcaption className="sr-only">EEA Grants</figcaption>
                        </figure>
                    </a>
                </div>
                <nav className="flex-1">
                    <ul className="flex items-center justify-end gap-6 font-bold  uppercase ">
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};