import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    tropical: {
      50: "#edf7f0",
      100: "#d1e7d0",
      200: "#b4d6af",
      300: "#97c68e",
      400: "#7ab56d",
      500: "#5fa64d", // Verde para la vegetación
      600: "#4b853b",
      700: "#386429",
      800: "#253318",
      900: "#121207",
      sky: "#2196f3", // Azul para el cielo
      choco: "#A67B5B",
      beige: "#8D7966",
      rosa: "#ff0d51",
    },
  },
  breackpoint: {
    tropical: {
      base: "0em", // 0px
      sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
      md: "48em", // ~768px
      lg: "62em", // ~992px
      xl: "80em", // ~1280px
      "2xl": "96em", // ~1536px
      "4x1": "120em",
    },
  },
});

export default theme;
