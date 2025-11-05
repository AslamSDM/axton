"use client";

import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-zinc-900 group-[.toaster]:text-white group-[.toaster]:border-zinc-800 group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-zinc-400",
          actionButton:
            "group-[.toast]:bg-zinc-50 group-[.toast]:text-zinc-900",
          cancelButton:
            "group-[.toast]:bg-zinc-800 group-[.toast]:text-zinc-400",
          success:
            "group-[.toaster]:bg-green-900/20 group-[.toaster]:border-green-500/50 group-[.toaster]:text-green-400",
          error:
            "group-[.toaster]:bg-red-900/20 group-[.toaster]:border-red-500/50 group-[.toaster]:text-red-400",
          warning:
            "group-[.toaster]:bg-yellow-900/20 group-[.toaster]:border-yellow-500/50 group-[.toaster]:text-yellow-400",
          info: "group-[.toaster]:bg-blue-900/20 group-[.toaster]:border-blue-500/50 group-[.toaster]:text-blue-400",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
