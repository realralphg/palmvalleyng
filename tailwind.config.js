module.exports = {
    purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                green: "#448B42",
                yellow: "#FFD600",
                grey: {
                    DEFAULT: "#ADB9C7",
                    50: "#FFFFFF",
                    100: "#FFFFFF",
                    200: "#FFFFFF",
                    300: "#EAEDF0",
                    400: "#CBD3DC",
                    500: "#ADB9C7",
                    600: "#8F9FB2",
                    700: "#70859E",
                    800: "#596C82",
                    900: "#445364",
                },
            }
        },

    },
    variants: {
        extend: {},
    },
    plugins: [],
};