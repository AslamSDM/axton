"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Icon Component (Lucide-React style placeholder) ---
const ChevronDown = ({ className = "" }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
);

// --- Type Definitions ---
interface LabeledDropdownProps {
    label: string;
    options: string[];
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    containerClassName?: string;
}

// --- Labeled Dropdown Component ---
export function LabeledDropdown({
    label,
    options,
    defaultValue,
    onValueChange,
    containerClassName = ""
}: LabeledDropdownProps): React.ReactElement {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(defaultValue || options[0] || 'All');
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Handle clicking outside to close
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    const handleSelect = (option: string) => {
        setSelectedValue(option);
        setIsOpen(false);
        if (onValueChange) {
            onValueChange(option);
        }
    };

    const dropdownVariants = {
        hidden: {
            opacity: 0,
            y: -10,
            transition: { duration: 0.2 }
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.2 }
        },
    };

    return (
        <div className={`relative font-mono ${containerClassName}`} ref={dropdownRef}>
            {/* Label */}
            <label className="block text-sm font-medium text-zinc-400 mb-1.5">
                {label}
            </label>

            {/* Dropdown Trigger Button (Styled like shadcn/ui Select) */}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-11 w-full min-w-[160px] items-center justify-between border border-zinc-700 bg-transparent px-3 py-2 text-base text-white shadow-sm ring-offset-black placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
                <span>{selectedValue}</span>
                <ChevronDown
                    className={`w-4 h-4 ml-2 transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                />
            </button>

            {/* Dropdown Menu (Animated with Framer Motion) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="absolute z-10 mt-1 w-full bg-zinc-900 border border-zinc-700 rounded-md shadow-lg overflow-hidden"
                    >
                        <ul className="py-1">
                            {options.map((option) => (
                                <li
                                    key={option}
                                    onClick={() => handleSelect(option)}
                                    className="px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-white cursor-pointer"
                                >
                                    {option}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}