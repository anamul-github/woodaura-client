
import logo from "../../Assets/Navbar/icons8-treehouse-100.png";
import { FaBars } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { Disclosure } from '@headlessui/react';

const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Header = () => {

    return (
        <Disclosure as="nav" className="absolute top-0">
            {({ open }) => (
                <>
                    <div className="mx-auto w-screen px-2 sm:px-6 lg:px-8 border-b-2 border-b-gray-600/50">
                        <div className="w-full relative flex h-16 items-center justify-between">
                            {/* logo */}
                            <div className="flex flex-1 items-center sm:items-stretch pl-2 md:pl-4 justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="block h-8 w-auto lg:hidden"
                                        src={logo}
                                        alt="Your Company"
                                    />
                                    <img
                                        className="hidden h-8 w-auto lg:block"
                                        src={logo}
                                        alt="Your Company"
                                    />
                                    <p className="font-bold lg:text-3xl ml-2 text-green-100 font-alegreya">Woodaura</p>
                                </div>

                            </div>
                            {/* routes  */}
                            <div className="absolute inset-y-0 right-0 flex justify-end items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>


                            </div>
                            {/* mobile device  */}
                            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <MdClose className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <FaBars className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    {/* small device hamburger menu  */}
                    <Disclosure.Panel className="sm:hidden">
                        <div className="bg-slate-900/50 backdrop-blur-md space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>

    );
};

export default Header;