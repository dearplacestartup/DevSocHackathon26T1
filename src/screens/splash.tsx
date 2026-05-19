import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { PinIcon } from '@/components/pin-icon';
import { ThemedText } from '@/components/themed-text';
import { Colors, Spacing } from '@/constants/theme';
import { useApp } from '@/app/_layout';

const ORBIT_AVATARS = [
  { top: 8, left: 128, colors: ['#667eea', '#764ba2'] },
  { bottom: 10, left: 35, colors: ['#f093fb', '#f5576c'] },
  { left: 0, top: 60, colors: ['#4facfe', '#00f2fe'] },
  { right: 5, top: 126, colors: ['#43e97b', '#38f9d7'] },
] as const;

export function SplashScreen() {
  const { go } = useApp();

  return (
    <LinearGradient
      colors={[Colors.light.accent1 + '80', Colors.light.accent + '80']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.screen}
      >
      <View style={styles.hero}>
        <View style={styles.orbitOuter} />
        <View style={styles.orbitInner} />

        {[styles.dot1Top, styles.dot1Bottom, styles.dot1Left, styles.dot1Right].map((pos, i) => (
          <View key={i} style={[styles.dot1, pos]} />
        ))}

        {[styles.dot2Top, styles.dot2Bottom].map((pos, i) => (
          <View key={i} style={[styles.dot2, pos]} />
        ))}
  
        {ORBIT_AVATARS.map((av, i) => (
          <LinearGradient
            key={i}
            colors={av.colors}
            style={[styles.avatar, av]}
          />
        ))}

        <View style={styles.pinCenter}>
          <PinIcon size={44} />
        </View>
      </View>

      <ThemedText style={styles.headline}>
        Let's Connect{'\n'}Together
      </ThemedText>
      <ThemedText style={styles.subheadline} themeColor="subtext">
        Drop pins. Share memories.{'\n'}Discover invisible human stories.
      </ThemedText>

      <View style={styles.actions}>
        <Pressable style={styles.primaryButton} onPress={() => go('login')}>
          <ThemedText style={styles.primaryButtonText}>Log In</ThemedText>
        </Pressable>
        <Pressable style={styles.secondaryButton} onPress={() => go('signup')}>
          <ThemedText style={styles.secondaryButtonText}>Sign Up</ThemedText>
        </Pressable>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.five,
  },
  blobTop: {
    position: 'absolute',
    width: 380,
    height: 380,
    borderRadius: 999,
    backgroundColor: 'rgba(255,77,109,0.12)',
    top: -120,
    left: -100,
  },
  blobBottom: {
    position: 'absolute',
    width: 600,
    height: 600,
    borderRadius: 999,
    backgroundColor: 'rgba(201,24,74,0.08)',
    bottom: -200,
    right: -200,
  },
  hero: {
    width: 200,
    height: 200,
    marginBottom: Spacing.four,
  },
  orbitOuter: {
    position: 'absolute',
    width: 180,
    height: 180,
    borderRadius: 999,
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: 'rgba(201,24,74,0.3)',
    top: 10,
    left: 10,
  },
  orbitInner: {
    position: 'absolute',
    width: 110,
    height: 110,
    borderRadius: 999,
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: 'rgba(201,24,74,0.3)',
    top: 45,
    left: 45,
  },
  dot1: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.light.accent,
  },
  dot1Top:    { top: 7,  left: 80 },
  dot1Bottom: { bottom: 15, left: 135 },
  dot1Left:   { left: 13, top: 130 },
  dot1Right:  { right: 6, top: 80 },
  dot2: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.light.accent1,
  },
  dot2Top:    { top: 53,  left: 60 },
  dot2Bottom:  { right: 47, top: 120 },
  avatar: {
    position: 'absolute',
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 2,
    borderColor: 'white',
  },
  pinCenter: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -26,
    marginLeft: -22,
  },
  headline: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 38,
    marginBottom: Spacing.two,
  },
  subheadline: {
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 21,
    marginBottom: Spacing.five,
  },
  actions: {
    width: '100%',
    alignItems: 'center',
    gap: Spacing.one,
  },
  primaryButton: {
    width: '100%',
    height: 54,
    borderRadius: 15,
    borderColor: 'rgba(128,15,47,0.25)',
    backgroundColor: 'rgba(255,255,255,0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    color: Colors.light.backgroundOther,
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    width: '100%',
    height: 54,
    borderRadius: 15,
    borderWidth: 1.5,
    backgroundColor: Colors.light.backgroundOther,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  secondaryButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  guestLink: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: Spacing.three,
  },
});