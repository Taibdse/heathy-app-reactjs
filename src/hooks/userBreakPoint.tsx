import { useState, useEffect } from 'react';
import { debounce } from 'common/utils';

export const SIZE_XS: string = 'xs';
export const SIZE_SM: string = 'sm';
export const SIZE_MD: string = 'md';
export const SIZE_LG: string = 'lg';
export const SIZE_XL: string = 'xl';
export const SIZE_XXL: string = 'xxl';

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';


const resolveBreakpoint = (width: number): Breakpoint => {
  if (width < 576) {
    return 'xs';
  } else if (width >= 576 && width < 768) {
    return 'sm';
  } else if (width >= 768 && width < 992) {
    return 'md';
  } else if (width >= 992 && width < 1200) {
    return 'lg';
  } else if (width >= 1200 && width < 1400) {
    return 'xl';
  } else {
    return 'xxl';
  }
};

/** Get Media Query Breakpoints in React */
const useBreakpoint = (): Breakpoint => {
  const [size, setSize] = useState(() => resolveBreakpoint(window.innerWidth));

  useEffect(() => {
    const calcInnerWidth = debounce(function () {
      setSize(resolveBreakpoint(window.innerWidth));
    }, 200);
    window.addEventListener('resize', calcInnerWidth);
    return () => window.removeEventListener('resize', calcInnerWidth);
  }, []);

  return size;
};

export default useBreakpoint;
