// components/Navbar.js
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { supabase } from "../lib/supabaseClient";

const LINKS = [
  { href: "/", label: "🏠 Home" },
  { href: "/lessons", label: "📘 Lessons" },
  { href: "/quiz", label: "📝 Quiz" },
  { href: "/badges", label: "🏅 Badges" },
  { href: "/progress", label: "📊 Progress" },
  { href: "/leaderboard", label: "🏆 Leaderboard" },
  { href: "/ai-lecture", label: "🤖 AI Lecture" },
  { href: "/personality", label: "🧠 Personality Test" },
];

function classNames(...c) {
  return c.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [userMenu, setUserMenu] = useState(false);
  const btnRef = useRef(null);
  const menuRef = useRef(null);
  const router = useRouter();

  // Fetch current user + listen for changes
  useEffect(() => {
    let mounted = true;
    (async () => {
      const { data } = await supabase.auth.getUser();
      if (mounted) setUser(data?.user || null);
    })();
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user || null);
    });
    return () => {
      mounted = false;
      sub?.subscription?.unsubscribe();
    };
  }, []);

  // Close menus on outside click
  useEffect(() => {
    function handleClick(e) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        setOpen(false);
        setUserMenu(false);
      }
    }
    function handleEsc(e) {
      if (e.key === "Escape") {
        setOpen(false);
        setUserMenu(false);
      }
    }
    document.addEventListener("click", handleClick, true);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("click", handleClick, true);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const NavLink = ({ href, children }) => {
    const active = router.pathname === href;
    return (
      <Link
        href={href}
        onClick={() => setOpen(false)}
        className={classNames(
          "block px-3 py-2 rounded-lg transition-colors duration-200",
          active
            ? "bg-white/15 text-yellow-200"
            : "hover:bg-white/10 hover:text-yellow-300"
        )}
      >
        {children}
      </Link>
    );
  };

  async function handleLogout() {
    await supabase.auth.signOut();
    setUserMenu(false);
    router.push("/");
  }

  const userInitial =
    user?.user_metadata?.full_name?.[0]?.toUpperCase() ||
    user?.email?.[0]?.toUpperCase() ||
    "U";

  return (
    <header className="sticky top-0 z-50 text-white shadow-lg bg-gradient-to-r from-blue-600 to-indigo-700 pt-safe">
      <nav className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="h-16 flex items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold tracking-wide whitespace-nowrap"
          >
            🚀 Kids Learning App
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-2 lg:gap-4 text-[15px] font-medium">
            {LINKS.map((l) => (
              <li key={l.href}>
                <NavLink href={l.href}>{l.label}</NavLink>
              </li>
            ))}
          </ul>

          {/* Right side: auth */}
          <div className="hidden md:flex items-center gap-3">
            {!user ? (
              <Link
                href="/login"
                className="px-4 py-2 rounded-lg bg-white/15 hover:bg-white/25 transition-colors"
              >
                🔑 Login
              </Link>
            ) : (
              <div className="relative">
                <button
                  ref={btnRef}
                  onClick={() => setUserMenu((s) => !s)}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center font-bold"
                  aria-expanded={userMenu}
                  aria-label="User menu"
                >
                  {userInitial}
                </button>
                {userMenu && (
                  <div
                    ref={menuRef}
                    className="absolute right-0 mt-2 w-48 rounded-xl bg-white text-gray-900 shadow-lg overflow-hidden"
                  >
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-semibold truncate">
                        {user?.email}
                      </p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-3 hover:bg-gray-50"
                    >
                      🚪 Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg hover:bg-white/10 focus:bg-white/10 focus:outline-none"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
          >
            <svg
              className={`w-6 h-6 transition-transform ${
                open ? "rotate-90" : ""
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile panel */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pb-2 border-t border-white/15 mt-2">
            {LINKS.map((l) => (
              <NavLink key={l.href} href={l.href}>
                {l.label}
              </NavLink>
            ))}
            {!user ? (
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="mt-1 block px-3 py-2 rounded-lg bg-white/15 hover:bg-white/25"
              >
                🔑 Login
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="mt-1 w-full text-left px-3 py-2 rounded-lg hover:bg-white/10"
              >
                🚪 Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
