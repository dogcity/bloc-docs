import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const TwMerge = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}
