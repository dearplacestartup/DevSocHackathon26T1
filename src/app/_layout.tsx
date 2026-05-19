import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import React, { createContext, useCallback, useContext, useState } from 'react';
import { useColorScheme } from 'react-native';
import { SEED_PINS, type Pin } from '@/constants/data';

export type ScreenId = 'start' | 'splash' | 'login' | 'signup' | 'map' |
  'drop' | 'nearby' | 'capsule' | 'profile';

type AppContextValue = {
  screen: ScreenId;
  go: (id: ScreenId) => void;
  pins: Pin[];
  addPin: (pin: Pin) => void;
  openPin: Pin | null;
  setOpenPin: (pin: Pin | null) => void;
};

export const AppContext = createContext<AppContextValue>({
  screen: 'start',
  go: () => {},
  pins: SEED_PINS,
  addPin: () => {},
  openPin: null,
  setOpenPin: () => {},
});

export function useApp() {
  return useContext(AppContext);
}

// Screens
import { StartScreen } from '@/screens/start';
import { SplashScreen } from '@/screens/splash';
import { LoginScreen }  from '@/screens/login';
/*import { SignUpScreen } from '@/screens/signup';
import { MapScreen }    from '@/screens/map';
import { DropPinScreen }from '@/screens/drop';
import { NearbyScreen } from '@/screens/nearby';
import { CapsuleScreen }from '@/screens/capsule';
import { ProfileScreen }from '@/screens/profile';*/

function renderScreen(screen: ScreenId) {
  switch (screen) {
    case 'start':  return <StartScreen />;
    case 'splash':  return <SplashScreen />;
    case 'login':   return <LoginScreen />;
    /*case 'signup':  return <SignUpScreen />;
    case 'map':     return <MapScreen />;
    case 'drop':    return <DropPinScreen />;
    case 'nearby':  return <NearbyScreen />;
    case 'capsule': return <CapsuleScreen />;
    case 'profile': return <ProfileScreen />;*/
  }
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [screen, setScreen] = useState<ScreenId>('start');
  const [pins, setPins] = useState<Pin[]>(SEED_PINS);
  const [openPin, setOpenPin] = useState<Pin | null>(null);

  const go = useCallback((id: ScreenId) => setScreen(id), []);
  const addPin = useCallback((pin: Pin) => setPins(p => [...p, pin]), []);

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AppContext.Provider value={{ screen, go, pins, addPin, openPin, setOpenPin }}>
        {renderScreen(screen)}
      </AppContext.Provider>
    </ThemeProvider>
  );
}
