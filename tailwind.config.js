/** @type {import('tailwindcss').Config} */
const c = (v) => `rgb(var(--${v}) / <alpha-value>)`;
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: { extend: { colors: { paper: c("paper"), ink: c("ink"), graphite: c("graphite"), rule: c("rule") }, fontFamily: { sans: ["Poppins", "system-ui", "sans-serif"] } } },
  plugins: [],
};
