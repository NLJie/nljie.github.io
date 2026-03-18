import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// 简单的日期格式化函数
export function format(date: Date, formatStr: string): string {
  const pad = (n: number) => n.toString().padStart(2, '0');
  
  const replacements: Record<string, string> = {
    'yyyy': date.getFullYear().toString(),
    'MM': pad(date.getMonth() + 1),
    'dd': pad(date.getDate()),
    'HH': pad(date.getHours()),
    'mm': pad(date.getMinutes()),
    'ss': pad(date.getSeconds()),
  };
  
  return formatStr.replace(/yyyy|MM|dd|HH|mm|ss/g, match => replacements[match]);
}
