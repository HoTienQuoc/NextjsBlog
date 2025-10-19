'use client'
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    return (
        <button onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? (
                <Sun className="block" />
            ) : (
                <Moon className="block" />
            )}
        </button>

    );
}

export default ThemeToggle;