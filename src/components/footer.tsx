import { Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-950/50 border-t border-zinc-800 mt-12">
      <div className="max-w-7xl mx-auto px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <h2 className="text-2xl font-bold text-white mb-2">
              Axton Protocol
            </h2>
            <p className="text-zinc-400 text-sm">
              Advanced OTC infrastructure for the decentralized era. Built for
              Whales, Funds, and traders seeking privacy and liquidity.
            </p>
            <div className="flex items-center mt-4">
              <Globe className="h-6 w-6 text-white" />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Protocol</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <a href="#" className="hover:text-white">
                  Markets
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Analytics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  OTC
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  APIs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Swap
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Stake
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <a href="#" className="hover:text-white">
                  Analytics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  APIs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Docs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Github
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <a href="#" className="hover:text-white">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-zinc-800 text-center text-zinc-500 text-sm">
          &copy; 2025 Axton Protocol. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
