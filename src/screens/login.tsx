import React from 'react';
import { Pressable, StyleSheet, TextInput, View, Image } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { Colors, Spacing } from '@/constants/theme';
import { useApp } from '@/app/_layout';
import { LinearGradient } from 'expo-linear-gradient';

export function LoginScreen() {
  const { go } = useApp();

  return (
    <LinearGradient
      colors={[Colors.light.accent1 + '80', Colors.light.accent + '40', Colors.light.accent + '80']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.screen}
      >
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Image source={require('@/assets/logo-mini.png')} resizeMode="contain" style={styles.logo} />
          <ThemedText style={styles.title}>Login</ThemedText>
          <ThemedText style={styles.subtitle} themeColor="subtext">
            Enter your email and password to log in
          </ThemedText>
        </View>

        <View style={styles.field}>
          <ThemedText style={styles.label}>EMAIL</ThemedText>
          <TextInput style={styles.input} defaultValue="loisbecket@gmail.com" autoCapitalize="none" />
        </View>

        <View style={styles.field}>
          <ThemedText style={styles.label}>PASSWORD</ThemedText>
          <TextInput style={styles.input} secureTextEntry defaultValue="password" />
        </View>

        <View style={styles.rememberRow}>
          {/* add checkbox here */}
          <ThemedText style={styles.rememberText} themeColor="subtext">
            Remember me
          </ThemedText>
          <ThemedText style={styles.forgotText} themeColor="textSecondary">
            Forgot Password?
          </ThemedText>
        </View>

        <Pressable style={styles.primaryButton} onPress={() => go('map')}>
          <ThemedText style={styles.primaryButtonText}>Log In</ThemedText>
        </Pressable>

        <ThemedText style={styles.switchText} themeColor="subtext">
          Don't have an account?{' '}
          <ThemedText
            style={styles.linkText}
            themeColor="textSecondary"
            onPress={() => go('signup')}
          >
            Sign Up
          </ThemedText>
        </ThemedText>
      </View>
    </LinearGradient>
  );
}

const cardStyle = {
  backgroundColor: 'rgba(255,255,255,0.82)',
  borderRadius: 20,
  padding: Spacing.four,
  borderWidth: 1,
  borderColor: 'rgba(255,255,255,0.95)',
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: Spacing.four,
  },
  card: {
    ...cardStyle,
    gap: Spacing.two,
  },
  logo: {
    width: 50,
    height: 50,
  },
  cardHeader: {
    alignItems: 'center',
    marginBottom: Spacing.two,
    gap: Spacing.one,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginTop: Spacing.two,
  },
  subtitle: {
    fontSize: 12,
    textAlign: 'center',
  },
  field: {
    gap: 6,
    marginBottom: Spacing.one,
  },
  label: {
    fontSize: 11,
    fontWeight: '600',
    color: Colors.light.subtext,
    letterSpacing: 0.5,
  },
  input: {
    height: 46,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.light.other,
    backgroundColor: 'white',
    paddingHorizontal: 14,
    fontSize: 14,
    fontWeight: '500',
    color: Colors.light.text,
  },
  rememberRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.two,
  },
  rememberText: {
    fontSize: 12,
  },
  forgotText: {
    fontSize: 12,
    fontWeight: '600',
  },
  primaryButton: {
    height: 48,
    borderRadius: 12,
    backgroundColor: Colors.light.backgroundOther,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Spacing.one,
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
  },
  switchText: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: Spacing.two,
  },
  linkText: {
    fontWeight: '600',
  },
});