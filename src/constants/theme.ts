/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import '@/global.css';

import { Platform } from 'react-native';

export const Colors = {
  light: {
    text: '#111827',
    background: '#fff0f3',
    backgroundElement: '#ffffff',
    backgroundSelected: '#c9184a',
    backgroundOther: '#800f2f',
    buttonText: '#ffffff',
    textSecondary: '#800f2f',
    subtext: '#6c7278',
    other: "#edf1f3",
    accent: '#ff4d6d',
    accent1: '#12477b',
    mapGreen: '#e8f0e8',
    mapBlock: '#d4e8d4',
    mapPark: '#b8d9b0',
    mapWater: '#b8d4e8',
  },
  dark: {
    text: '#ffffff',
    background: '#000000',
    backgroundElement: '#212225',
    backgroundSelected: '#2E3135',
    textSecondary: '#B0B4BA',
    subtext: '#6c7278',
    other: "#edf1f3",
    accent: '#ff4d6d',
    accent1: '#12477b',
    mapGreen: '#e8f0e8',
    mapBlock: '#d4e8d4',
    mapPark: '#b8d9b0',
    mapWater: '#b8d4e8',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
