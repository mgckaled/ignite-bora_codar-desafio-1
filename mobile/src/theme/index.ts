import { extendTheme } from "native-base"

export const THEME = extendTheme({
  colors: {
    white: "#FFF",
    background: "#0F0D13",

    backgroundPlayer: "#2A2141",
    infoColor: "#E1E1E6",
    trackColor: "#D9D9D9",
    timeColor: "#C4C4CC"
  },

  fonts: {
    heading: "Roboto_700Bold",
    body: "Roboto_400Regular"
  },

  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20
  }
})
