import Typography from "typography"
// import Wordpress2016 from "typography-theme-wordpress-2016"
import oceanBeachTheme from "typography-theme-ocean-beach"

oceanBeachTheme.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    a: {
      textShadow: `none`,
      backgroundImage: `none`,
      fontFamily: "Playfair Display",
    },
    "h1,h2,h3,h4": {
      fontFamily: "Playfair Display",
    },
  }
}

const typography = new Typography(oceanBeachTheme)

// delete Wordpress2016.googleFonts

// const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
