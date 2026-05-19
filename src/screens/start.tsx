import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { useApp } from '@/app/_layout';

export function StartScreen() {
  const { go } = useApp();

  return (
    <ThemedView style={styles.screen}>
      <TouchableOpacity style={styles.screen} activeOpacity={0.7} onPress={() => go('splash')}>
        <Image
        source={require('@/assets/logo.png')}
        resizeMode="contain"
        style={styles.logo}
        />
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.five,
  },
  logo: {
    width: 175,
    height: 175
  },
});