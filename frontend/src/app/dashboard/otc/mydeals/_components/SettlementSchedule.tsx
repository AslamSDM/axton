"use client";

import React, { useState } from 'react';
// Mock Shadcn UI components for standalone demo
import { Button } from "@/components/ui/button"; // Assuming shadcn/ui button
import { Input } from "@/components/ui/input";   // Assuming shadcn/ui input
import { Label } from "@/components/ui/label";   // Assuming shadcn/ui label

// --- Icons ---
// Placeholder SVG for Calendar and Clock
const CalendarIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 text-zinc-400"
    >
        <path
            fillRule="evenodd"
            d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3.75 3.75 0 013.75 3.75v10.5a3.75 3.75 0 01-3.75 3.75H5.25a3.75 3.75 0 01-3.75-3.75V8.25a3.75 3.75 0 013.75-3.75H6.75V3zm11.25 3a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25H5.25a2.25 2.25 0 01-2.25-2.25V8.25a2.25 2.25 0 012.25-2.25h13.5z"
            clipRule="evenodd"
        />
    </svg>
);

const ClockIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 text-zinc-400"
    >
        <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6h-3.75a.75.75 0 000 1.5h4.5a.75.75 0 00.75-.75V6z"
            clipRule="evenodd"
        />
    </svg>
);

// --- Settlement Schedule Component ---
interface SettlementScheduleProps {
    // Add props if you need to control selected schedule/dates externally
}

export function SettlementSchedule({ }: SettlementScheduleProps) {
    const [selectedSchedule, setSelectedSchedule] = useState<'Instant' | '24H' | 'Custom'>('Instant');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const getButtonClass = (buttonType: typeof selectedSchedule) =>
        `px-4 py-2 rounded-none border text-sm font-mono transition-colors hover:text-white
    ${selectedSchedule === buttonType
            ? 'bg-zinc-700 border-zinc-500 text-white hover:text-black' // Selected state
            : 'bg-transparent border-zinc-800 text-zinc-400 hover:bg-zinc-900 hover:border-zinc-700' // Unselected state
        }`;

    return (
        <div className="space-y-4 w-full mt-6 bg-transparent">
            {/* Title */}
            <Label className="text-zinc-400 text-sm font-medium">
                Settlement Schedule
            </Label>

            {/* Schedule Buttons */}
            <div className="flex space-x-2">
                <Button
                    variant="outline"
                    className={getButtonClass('Instant')}
                    onClick={() => setSelectedSchedule('Instant')}
                >
                    Instant
                </Button>
                <Button
                    variant="outline"
                    className={getButtonClass('24H')}
                    onClick={() => setSelectedSchedule('24H')}
                >
                    24H
                </Button>
                <Button
                    variant="outline"
                    className={getButtonClass('Custom')}
                    onClick={() => setSelectedSchedule('Custom')}
                >
                    Custom
                </Button>
            </div>

            {/* Date and Time Inputs (conditionally rendered for Custom) */}
            {(selectedSchedule === 'Custom') && (
                <div className="flex flex-col md:flex-row gap-4 mt-4">
                    <div className="flex-1 space-y-2">
                        <Label htmlFor="date-input" className="text-zinc-400 text-base font-mono">
                            Date
                        </Label>
                        <div className="relative">
                            <Input
                                id="date-input"
                                type="text" // Use text for custom format, or date for native picker
                                placeholder="DD/MM/YYYY"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="pl-4 pr-10 py-2 bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 rounded-none focus:outline-none focus:border-blue-500 font-mono"
                            />
                            <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <CalendarIcon />
                            </span>
                        </div>
                    </div>

                    <div className="flex-1 space-y-2">
                        <Label htmlFor="time-input" className="text-zinc-400 text-base font-mono">
                            Time
                        </Label>
                        <div className="relative">
                            <Input
                                id="time-input"
                                type="text" // Use text for custom format, or time for native picker
                                placeholder="HH:MM:SS"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                className="pl-4 pr-10 py-2 bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500  focus:outline-none focus:border-blue-500 font-mono rounded-none"
                            />
                            <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <ClockIcon />
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
