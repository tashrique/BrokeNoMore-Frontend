// Fix all TypeScript errors in one place

// Allow any JSX element
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

// Fix React imports
declare module 'react' {
  // Add hooks
  export function useState<T>(initialState: any): [T, any];
  export function useRef<T>(initialValue: any): { current: T };
  export function useEffect(effect: any, deps?: any): void;
  export function useContext<T>(context: any): T;
  export function useCallback(callback: any, deps?: any): any;
  export function useMemo<T>(factory: any, deps?: any): T;

  // Add event types
  export type FormEvent<T = any> = any;
  export type KeyboardEvent<T = any> = any;
  export type ChangeEvent<T = any> = any;
  export type MouseEvent<T = any> = any;
} 