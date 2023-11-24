import { useTheme } from "next-themes";
import Image from "next/image";

import MoonIcon from '@/assets/icons/moon-outline.svg'
import SunIcon from '@/assets/icons/sun-outline.svg'

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button aria-label='theme toggler'
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center justify-center text-white rounded-full cursor-pointer dark:bg-dark-bg h-8 w-8 dark:text-white md:h-12 md:w-12"
    >
      <Image src={MoonIcon} className='w-5 h-5 stroke-current dark:hidden md:h-6 md:w-6' alt='moon' />
      <Image src={SunIcon} className='hidden w-5 h-5 text-white dark:block md:h-6 md:w-6' alt='sun' />
    </button>
  );
};

export default ThemeToggler;