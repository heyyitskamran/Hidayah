import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';

type Theme = 'light' | 'dark';

interface ThemeColors {
    background: string;
    text: string;
    primary: string;
    secondary: string;
    card: string;
    border: string;
}

export const Colors = {
    light: {
        background: '#FFFFFF',
        text: '#000000',
        primary: '#2f95dc',
        secondary: '#e0e0e0',
        card: '#ffffff',
        border: '#e0e0e0',
    },
    dark: {
        background: '#121212',
        text: '#FFFFFF',
        primary: '#90caf9',
        secondary: '#333333',
        card: '#1e1e1e',
        border: '#333333',
    },
};

interface ThemeContextType {
    theme: Theme;
    colors: ThemeColors;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const systemScheme = useColorScheme();
    const [theme, setTheme] = useState<Theme>(systemScheme === 'dark' ? 'dark' : 'light');

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    const colors = Colors[theme];

    return (
        <ThemeContext.Provider value={{ theme, colors, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
