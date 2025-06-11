import useLocalStorage from "./useLocalStorage";
import "./styles.css";
function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleSetTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    <div
      className="flex bg-mode text-mode justify-center items-center h-screen w-full"
      data-theme={theme}
    >
      <div className="space-y-4 font-bold text-center">
        <div className="text-2xl">Theme App</div>
        <button
          className="px-6 py-1 button-bg-mode button-text-mode rounded-full"
          onClick={handleSetTheme}
        >
          {theme === "dark" ? "Dark" : "Light"}
        </button>
      </div>
    </div>
  );
}

export default LightDarkMode;
