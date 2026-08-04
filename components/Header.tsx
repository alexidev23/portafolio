"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

import { ModeToggle } from "./mode-toggle";
import { navLinks } from "@/lib/portafolio-data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function onKeydown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    function onClickOutside(e: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        !buttonRef.current?.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", onKeydown);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKeydown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [setOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a
          href="#inicio"
          className="font-mono text-sm font-semibold tracking-tight text-foreground"
        >
          <span className="text-emerald-600 dark:text-emerald-400">~/</span>
          alexis
          <span className="text-emerald-600 dark:text-emerald-400">.dev</span>
        </a>

        <nav
          className="hidden sm:flex"
          aria-label="Navegación principal"
        >
          <ul className="flex items-center gap-5">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-xs lowercase text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="mr-1 text-emerald-600 dark:text-emerald-400">
                    0{i + 1}.
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button
            ref={buttonRef}
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
            className="sm:hidden"
          >
            {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
          </button>

          <ModeToggle />
        </div>
      </div>

      {/* Mobile menu */}
      <div
        ref={menuRef}
        id="mobile-menu"
        className={`sm:hidden ${open ? "animate-in fade-in" : "hidden animate-out fade-out"} border-t border-border`}
      >
        <ul className="flex flex-col gap-1 p-2">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 rounded-md px-3 py-2 font-mono text-xs lowercase text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <span className="text-emerald-600 dark:text-emerald-400">
                  0{i + 1}.
                </span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
