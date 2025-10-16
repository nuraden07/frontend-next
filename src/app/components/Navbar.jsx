"use client";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [infoOpen, setInfoOpen] = useState(false); // Hanya untuk dropdown Information di mobile

    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                    <img
                        src="/logo-astratech.jpg"
                        alt="ASTRAtech"
                        className="h-8 w-auto"
                    />
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center space-x-8 font-medium text-gray-700">
                    <li>
                        <Link href="/" className="hover:text-blue-700 transition-colors">
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-blue-700 transition">
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-blue-700 transition">
                            About Us
                        </Link>
                    </li>

                    {/* Dropdown Information Desktop */}
                    <li className="relative group">
                        <button className="flex items-center space-x-1 hover:text-blue-700 transition">
                            <span>Information</span>
                            <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
                        </button>
                        <ul className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white border border-gray-200 rounded-md shadow-md py-2 w-44">
                            <li>
                                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                                    Akademik
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                                    Industri
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-800 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="md:hidden bg-white border-t border-gray-200 shadow-md px-6 py-4 space-y-3 font-medium text-gray-700"
                    >
                        <Link href="#" className="block hover:text-blue-700 transition">
                            Dashboard
                        </Link>
                        <Link href="#" className="block hover:text-blue-700 transition">
                            Profile
                        </Link>
                        <Link href="#" className="block hover:text-blue-700 transition">
                            About Us
                        </Link>

                        {/* Dropdown Information Mobile */}
                        <div>
                            <button
                                onClick={() => setInfoOpen(!infoOpen)}
                                className="w-full flex justify-between items-center hover:text-blue-700"
                            >
                                Information
                                <ChevronDown
                                    size={16}
                                    className={`transform transition-transform ${infoOpen ? "rotate-180" : ""}`}
                                />
                            </button>
                            {infoOpen && (
                                <div className="pl-4 mt-2 space-y-2">
                                    <Link href="#" className="block hover:text-blue-700">
                                        Akademik
                                    </Link>
                                    <Link href="#" className="block hover:text-blue-700">
                                        Industri
                                    </Link>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
