"use client";

import Link from "next/link";
import {
  Home,
  Code2,
  User,
  Moon,
  Sun,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="fixed inset-x-0 top-5 z-50 flex justify-center px-4">
      <nav
        className="
          flex
          items-center
          rounded-full
          border
          border-border
          bg-background/80
          px-5
          py-3
          backdrop-blur-xl
          transition-colors
          duration-300
        "
      >
        {/* Main navigation */}
        <div className="flex items-center gap-7">
          <Link
            href="/"
            aria-label="Home"
            className="text-muted transition-colors hover:text-foreground"
          >
            <Home size={19} strokeWidth={2} />
          </Link>

          <Link
            href="/work"
            aria-label="Work"
            className="text-muted transition-colors hover:text-foreground"
          >
            <Code2 size={19} strokeWidth={2} />
          </Link>

          <Link
            href="/about"
            aria-label="About"
            className="text-muted transition-colors hover:text-foreground"
          >
            <User size={19} strokeWidth={2} />
          </Link>
        </div>

        {/* Divider */}
        <div className="mx-5 h-7 w-px bg-border transition-colors duration-300" />

        {/* Social links */}
        <div className="flex items-center gap-7">
          {/* GitHub */}
          <a
            href="https://github.com/sanwillcreate"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-foreground"
          >
            <svg
              viewBox="0 0 24 24"
              width="19"
              height="19"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.51 2.87 8.34 6.84 9.69.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.22-3.37-1.22-.46-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1.01.08 1.54 1.06 1.54 1.06.9 1.58 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.2 9.2 0 0 1 12 7.11c.85 0 1.71.12 2.51.37 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.92-2.35 4.79-4.59 5.04.36.32.68.95.68 1.92v2.85c0 .28.18.6.69.49A10.23 10.23 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z" />
            </svg>
          </a>

          {/* X */}
          <a
            href="https://x.com/wadhwasanchit"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="text-muted transition-colors hover:text-foreground"
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.967 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
            </svg>
          </a>

          {/* LinkedIn */}
         <a
  href="https://www.linkedin.com/in/sanchit-wadhwa-5b8282285/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn"
  className="text-muted transition-colors hover:text-foreground"
>
  <svg
    viewBox="0 0 24 24"
    width="19"
    height="19"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.476-.9 1.637-1.85 3.37-1.85 3.604 0 4.267 2.37 4.267 5.455v6.287zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM3.555 20.452h3.558V8.999H3.555z" />
  </svg>
</a>
        </div>

        {/* Divider */}
        <div className="mx-5 h-7 w-px bg-border transition-colors duration-300" />

        {/* Theme toggle */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="
            text-muted
            transition-all
            duration-300
            hover:text-foreground
            hover:rotate-12
          "
        >
          {mounted ? (
            theme === "dark" ? (
              <Moon size={19} strokeWidth={2} />
            ) : (
              <Sun size={19} strokeWidth={2} />
            )
          ) : (
            <Moon size={19} strokeWidth={2} />
          )}
        </button>
      </nav>
    </header>
  );
}