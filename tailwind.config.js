const { screens } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxxsm: "200px",
      xxsm: "340px",
      xsm: "480px",
      ...screens,
    },

    extend: {
      colors: {
        "makeway-dark": "#2A2E43",
        "makeway-gray-dark": "#0000000F",
        "makeway-gray": "#7A7A7A",
        "makeway-red": "#F40E41",
        "makeway-text-blue": "#00133B",
        "makeway-blue-dark": "#011F3D",
        "makeway-blue-light": "#1AA1DC",
      },

      fontSize: {
        "makeway-xxxlg": "72px",
        "makeway-xxlg": "62px",
        "makeway-xlg": "52px",
        "makeway-lg": "44px",

        "makeway-xxmd": "38px",
        "makeway-xmd": "32px",
        "makeway-md": "28px",

        "makeway-sm-md": "24px",

        "makeway-sm": "16px",
        "makeway-xsm": "14px",
        "makeway-xxsm": "10px",
      },

      minHeight: (theme) => ({
        "h-min-screen": "100vh",
        "makeway-px-450": "450px",
        ...theme("spacing"),
      }),

      minWidth: (theme) => ({
        ...theme("spacing"),
      }),

      height: {
        "makeway-h-nav": "10%",
        "makeway-h-hero": "80%",
        "5/2": "40%",
        "makeway-px-80": "80px",
        "makeway-px-100": "100px",
        "makeway-px-120": "120px",
        "makeway-px-150": "150px",
        "makeway-px-40": "40px",
        "makeway-px-50": "50px",
        "makeway-px-450": "450px",
        "makeway-px-750": "750px",
      },

      inset: {
        "makeway-hero-offset-t": "20%",
      },

      backgroundImage: {
        "makeway-hero-gradient": "#000",
      },

      width: {
        "makeway-px-270": "270px",
        "makeway-px-124": "124px",
      },

      borderRadius: {
        "makeway-px-20": "20px",
      },

      fontFamily: {
        "makeway-montserrat": ["Montserrat"],
      },
    },
  },
  plugins: [],
};
