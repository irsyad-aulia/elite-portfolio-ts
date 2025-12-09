import { createContext, useState, useContext, type ReactNode } from "react";


interface ThemeContextType {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
};

return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
        {children}
    </ThemeContext.Provider>
);
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");     
    }
    return context;
}