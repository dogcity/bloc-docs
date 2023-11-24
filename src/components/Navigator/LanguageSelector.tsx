import { useTheme } from "next-themes";

const LanguageSelector = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button aria-label='theme toggler'
      onClick={() => {}}
      className="flex items-center justify-center dark:text-white rounded-full cursor-pointer h-8 w-8 md:h-12 md:w-12"
    >
      <h1>Es</h1>
    </button>
  );
};

export default LanguageSelector;