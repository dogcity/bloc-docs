import { DividerProps } from '@/types/divider'

const Divider = ({ direction = 'horizontal', className = '' }: DividerProps) => {
  return direction === 'horizontal'
    ? <hr className={className} />
    : <span className={`border-l border-gray-900 dark:border-sky-100 self-center h-full min-h-[28px] ${className}`} />
}

export default Divider
