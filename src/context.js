import { createContext } from "react"

export const themes = {
  light: {
    background: "#eee",
    color: "#000",
  },
  dark: {
    background: "#000",
    color: "#eee",
  },
}

export const ThemeContext = createContext(themes.light);