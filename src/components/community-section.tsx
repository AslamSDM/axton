import {
  BarChart2,
  ShieldCheck,
  Globe,
  BookCopy,
  GitBranch,
} from "lucide-react";

export function CommunitySection() {
  return (
    <div className="mt-12 text-center px-8">
      <h3 className="text-lg font-semibold text-white mb-2">
        Secure and Integrated Community
      </h3>
      <div className="flex justify-center items-center gap-8 text-zinc-500 mt-6">
        <BarChart2 className="w-7 h-7" />
        <ShieldCheck className="w-7 h-7" />
        <Globe className="w-7 h-7" />
        <BookCopy className="w-7 h-7" />
        <GitBranch className="w-7 h-7" />
      </div>
    </div>
  );
}
