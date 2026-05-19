import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { Colors } from '@/constants/theme';

type Props = {
  size?: number;
  color?: string;
};

export function PinIcon({ size = 32, color = Colors.light.backgroundOther }: Props) {
  return (
    <Svg width={size} height={size * 1.2} viewBox="0 0 44 54" fill="none">
      <Path
        d="M22 0C9.85 0 0 9.85 0 22c0 16.5 22 32 22 32s22-15.5 22-32C44 9.85 34.15 0 22 0z"
        fill={color}
      />
      <Circle cx="22" cy="22" r="9" fill="white" />
      <Path d="M22 17a3 3 0 100 6 3 3 0 000-6z" fill={Colors.light.backgroundSelected} />
    </Svg>
  );
}