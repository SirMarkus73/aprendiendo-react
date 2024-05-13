/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: { darkMode: "selector" },
    },
    plugins: ["prettier-plugin-tailwindcss"],
}
