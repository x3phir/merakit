module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#A94A2C",
                "background-light": "#f8f6f5",
                "background-dark": "#221610",
            },
            fontFamily: {
                display: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"]
            },
            borderRadius: {
                DEFAULT: "0.5rem",
                lg: "1rem",
                xl: "1.5rem",
                full: "9999px"
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
