import React from 'react';

// Helper component for the gradient bars
interface GradientBarProps {
    value: number; // Percentage value for the fill (0-100)
    colorStart: string;
    colorEnd: string;
    height?: string;
}

const GradientBar: React.FC<GradientBarProps> = ({ value, colorStart, colorEnd, height = "h-3" }) => {
    return (
        <div className={`w-full bg-zinc-800 rounded-sm overflow-hidden ${height}`}>
            <div
                className={`h-full`}
                style={{
                    width: `${Math.max(0, Math.min(100, value))}%`, // Ensure value is between 0 and 100
                    background: `linear-gradient(to right, ${colorStart}, ${colorEnd})`,
                }}
            ></div>
        </div>
    );
};

// Component for the segmented gradient bar (like Risk/Collateral)
interface SegmentedGradientBarProps {
    value: number; // Percentage value for the fill (0-100)
    segments: { color: string; stop: number }[]; // [{ color: "red", stop: 33 }, { color: "yellow", stop: 66 }, { color: "green", stop: 100 }]
    height?: string;
}

const SegmentedGradientBar: React.FC<SegmentedGradientBarProps> = ({ value, segments, height = "h-3" }) => {
    const sortedSegments = [...segments].sort((a, b) => a.stop - b.stop);

    const gradientStops = sortedSegments.map((segment, index) => {
        const prevStop = index === 0 ? 0 : sortedSegments[index - 1].stop;
        return `${segment.color} ${prevStop}%, ${segment.color} ${segment.stop}%`;
    }).join(', ');

    return (
        <div className={`w-full bg-zinc-800 rounded-sm overflow-hidden ${height}`}>
            <div
                className={`h-full`}
                style={{
                    width: `${Math.max(0, Math.min(100, value))}%`,
                    background: `linear-gradient(to right, ${gradientStops})`,
                }}
            ></div>
        </div>
    );
};

// Main OTC Market Depth Component
export function OTCMarketDepth(): React.ReactElement {
    return (
        <div className="w-full p-6 font-mono text-sm border-[1.25px] border-zinc-800 p-6">
            {/* OTC Market Depth Section */}
            <h3 className="text-white text-lg font-bold mb-6">OTC Market Depth</h3>

            <div className="mb-8">
                <div className="flex justify-between items-baseline mb-2">
                    <span className="text-zinc-400">Buy Offers</span>
                    <span className="text-white">3,245 BTC</span>
                </div>
                {/* Adjusted green bar to match image more closely (darker green on the right) */}
                <div className="w-full bg-green-900 rounded-sm overflow-hidden h-3">
                    <div
                        className="h-full bg-gradient-to-r from-green-500 to-green-600"
                        style={{ width: `70%` }} // Example width
                    ></div>
                </div>
            </div>

            <div className="mb-8">
                <div className="flex justify-between items-baseline mb-2">
                    <span className="text-zinc-400">Sell Offers</span> {/* Corrected from "Buy Offers" based on common depth charts */}
                    <span className="text-white">2,876 BTC</span>
                </div>
                {/* Adjusted red bar to match image more closely (darker red on the right) */}
                <div className="w-full bg-red-900 rounded-sm overflow-hidden h-3">
                    <div
                        className="h-full bg-gradient-to-r from-red-500 to-red-600"
                        style={{ width: `60%` }} // Example width
                    ></div>
                </div>
            </div>

            {/* Order Flow Analytics Section */}
            <h3 className="text-white text-lg font-bold mb-6">Order Flow Analytics</h3>

            <div className="mb-8">
                <div className="flex justify-between items-baseline mb-2">
                    <span className="text-zinc-400">Buy Offers</span>
                    <span className="text-white">2.3 hours</span>
                </div>
                <SegmentedGradientBar
                    value={70} // Example value
                    segments={[
                        { color: "#FF0000", stop: 33 }, // Red
                        { color: "#FFFF00", stop: 66 }, // Yellow
                        { color: "#00FF00", stop: 100 }  // Green
                    ]}
                />
            </div>

            <div className="mb-2">
                <div className="flex justify-between items-baseline mb-2">
                    <span className="text-zinc-400">Avg. Collateral</span>
                    <span className="text-white">27%</span>
                </div>
                <SegmentedGradientBar
                    value={40} // Example value
                    segments={[
                        { color: "#FF0000", stop: 33 }, // Red
                        { color: "#FFFF00", stop: 66 }, // Yellow
                        { color: "#00FF00", stop: 100 }  // Green
                    ]}
                />
            </div>
        </div>
    );
}