export const randomNum = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function debounce(func: Function, timeout = 300) {
  let timer: any;
  return (...args: any) => {
    const context: any = this;
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(context, args); }, timeout);
  };
}
