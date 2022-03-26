import { StatusBar } from 'expo-status-bar';
import { Platform, StatusBar as StatusBarAndroid } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        {Platform.OS == "ios" && <StatusBar />}
        {Platform.OS != "ios" && <StatusBarAndroid />}
      </SafeAreaProvider>
    );
  }
}
