"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

// Major cities and financial centers for OTC trading
const MAJOR_CITIES = [
  { name: "New York", lat: 40.7128, lng: -74.006 },
  { name: "London", lat: 51.5074, lng: -0.1278 },
  { name: "Tokyo", lat: 35.6762, lng: 139.6503 },
  { name: "Singapore", lat: 1.3521, lng: 103.8198 },
  { name: "Hong Kong", lat: 22.3193, lng: 114.1694 },
  { name: "Sydney", lat: -33.8688, lng: 151.2093 },
  { name: "San Francisco", lat: 37.7749, lng: -122.4194 },
  { name: "Berlin", lat: 52.52, lng: 13.405 },
  { name: "Dubai", lat: 25.2048, lng: 55.2708 },
  { name: "Shanghai", lat: 31.2304, lng: 121.4737 },
  { name: "Seoul", lat: 37.5665, lng: 126.978 },
  { name: "Mumbai", lat: 19.076, lng: 72.8777 },
  { name: "São Paulo", lat: -23.5505, lng: -46.6333 },
  { name: "Toronto", lat: 43.6532, lng: -79.3832 },
  { name: "Paris", lat: 48.8566, lng: 2.3522 },
  { name: "Frankfurt", lat: 50.1109, lng: 8.6821 },
  { name: "Zurich", lat: 47.3769, lng: 8.5417 },
  { name: "Amsterdam", lat: 52.3676, lng: 4.9041 },
  { name: "Tel Aviv", lat: 32.0853, lng: 34.7818 },
  { name: "Istanbul", lat: 41.0082, lng: 28.9784 },
  { name: "Moscow", lat: 55.7558, lng: 37.6173 },
  { name: "Mexico City", lat: 19.4326, lng: -99.1332 },
  { name: "Chicago", lat: 41.8781, lng: -87.6298 },
  { name: "Los Angeles", lat: 34.0522, lng: -118.2437 },
  { name: "Miami", lat: 25.7617, lng: -80.1918 },
];

export function GlobeVisualization() {
  const globeRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [currentTransaction, setCurrentTransaction] = useState<any>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !globeRef.current) return;

    let Globe: any;
    let globeInstance: any;
    let currentArcs: any[] = [];
    const arcTimeouts: NodeJS.Timeout[] = [];

    const initGlobe = async () => {
      // Dynamic import to avoid SSR issues
      const GlobeModule = await import("globe.gl");
      Globe = GlobeModule.default;

      // Start with empty arcs
      const colors = ["#10b981", "#ef4444", "#3b82f6", "#5d0bf5ff"];
      const colorNames = ["BUY", "SELL", "SWAP", "TRANSFER"];
      currentArcs = [];

      globeInstance = Globe()(globeRef.current!)
        .globeImageUrl(
          "//cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg"
        )
        .backgroundColor("rgba(0,0,0,0)") // Transparent background
        .arcsData(currentArcs)
        .arcColor("color")
        .arcLabel("type")
        .arcDashLength(0.1)
        .arcDashGap(0)
        .arcDashAnimateTime(0) // 2 second animation to match lifetime
        .arcStroke(1.5) // Thicker for better visibility
        .arcAltitudeAutoScale(0.3) // Higher arcs for dramatic effect
        .arcsTransitionDuration(1000) // Instant appearance
        .atmosphereColor("#0ea5e9")
        .atmosphereAltitude(0.15)
        .width(globeRef.current!.offsetWidth)
        .height(300)
        .onArcHover((arc: any) => {
          if (arc) {
            const types = ["BUY", "SELL", "SWAP", "STAKE"];
            const amounts = [
              "50,000",
              "150,000",
              "250,000",
              "500,000",
              "1,000,000",
            ];
            const currencies = ["USDC", "ETH", "BTC", "AXN"];

            setCurrentTransaction({
              from: arc.fromCity,
              to: arc.toCity,
              amount: `${amounts[Math.floor(Math.random() * amounts.length)]} ${
                currencies[Math.floor(Math.random() * currencies.length)]
              }`,
              type: types[Math.floor(Math.random() * types.length)],
            });
          } else {
            setCurrentTransaction(null);
          }
        });

      // Set initial point of view
      globeInstance.pointOfView({ lat: 20, lng: 0, altitude: 2.5 });

      // Auto-rotate
      const controls = globeInstance.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.5;
      controls.enableZoom = false;

      // Function to add a single random arc with 2 second lifetime
      const addRandomArc = () => {
        const colorIndex = Math.round(Math.random() * 3);
        if (currentArcs.length > 2) {
          const randomMover = Math.floor(Math.random() * currentArcs.length);
          for (let i = 0; i < randomMover; i++) {
            currentArcs.shift();
          }
        }

        // Pick two random different cities
        const fromCity =
          MAJOR_CITIES[Math.floor(Math.random() * MAJOR_CITIES.length)];
        let toCity =
          MAJOR_CITIES[Math.floor(Math.random() * MAJOR_CITIES.length)];

        // Ensure different cities
        while (toCity.name === fromCity.name) {
          toCity =
            MAJOR_CITIES[Math.floor(Math.random() * MAJOR_CITIES.length)];
        }

        // Create arc with unique ID
        const arcId = Date.now() + Math.random();
        const newArc = {
          id: arcId,
          startLat: fromCity.lat,
          startLng: fromCity.lng,
          endLat: toCity.lat,
          endLng: toCity.lng,
          color: [colors[colorIndex], colors[colorIndex]],
          fromCity: fromCity.name,
          toCity: toCity.name,
          type: colorNames[colorIndex],
        };

        currentArcs.push(newArc);
        globeInstance.arcsData([...currentArcs]);

        // Remove this arc after exactly 2 seconds
        const removeTimeout = setTimeout(() => {
          currentArcs = currentArcs.filter((arc) => arc.id !== arcId);
          globeInstance.arcsData([...currentArcs]);
        }, 20000);

        arcTimeouts.push(removeTimeout);

        // Schedule next arc at random time (200ms - 1500ms)
        const nextDelay = Math.random() * 1300 + 2000;
        const nextTimeout = setTimeout(addRandomArc, nextDelay);
        arcTimeouts.push(nextTimeout);
      };

      // Start 3 concurrent random arc chains for varied activity
      addRandomArc();
      setTimeout(addRandomArc, 1000);
    };

    initGlobe();

    return () => {
      // Clear all timeouts
      arcTimeouts.forEach((timeout) => clearTimeout(timeout));

      if (globeInstance) {
        // Cleanup
        globeInstance._destructor?.();
      }
    };
  }, [isClient]);

  return (
    <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 p-6 flex flex-col justify-between items-center">
      <div className="flex justify-between items-center w-full mb-2">
        <h3 className="font-semibold text-white text-sm">Live Transactions</h3>
        <div className="flex items-center gap-1 text-green-500 text-sm font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs">LIVE</span>
        </div>
      </div>
      <div className="relative w-full h-[300px] flex items-center justify-center overflow-hidden rounded-lg">
        {!isClient && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-zinc-500">Loading Globe...</div>
          </div>
        )}
        <div
          ref={globeRef}
          className="w-full h-full"
          style={{ background: "transparent" }}
        />
        {currentTransaction && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 transition-opacity duration-200">
            <div className="bg-zinc-900/95 backdrop-blur-sm border border-zinc-700 rounded-lg px-3 py-2 text-xs text-center min-w-[200px] shadow-lg">
              <p className="text-zinc-300">
                <span
                  className={`${
                    currentTransaction.type === "BUY"
                      ? "text-green-400"
                      : currentTransaction.type === "SELL"
                      ? "text-red-400"
                      : currentTransaction.type === "SWAP"
                      ? "text-blue-400"
                      : "text-amber-400"
                  }`}
                >
                  ●
                </span>{" "}
                {currentTransaction.from}{" "}
                <span className="text-sky-400">→</span> {currentTransaction.to}
              </p>
              <p className="font-bold text-white">
                {currentTransaction.amount}{" "}
                <span
                  className={`${
                    currentTransaction.type === "BUY"
                      ? "text-green-400"
                      : currentTransaction.type === "SELL"
                      ? "text-red-400"
                      : currentTransaction.type === "SWAP"
                      ? "text-blue-400"
                      : "text-amber-400"
                  }`}
                >
                  {currentTransaction.type}
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
      <Button className="w-full py-3 mt-4 text-base font-semibold bg-sky-500 hover:bg-sky-500/90">
        Initiate an OTC Deal
      </Button>
    </Card>
  );
}
