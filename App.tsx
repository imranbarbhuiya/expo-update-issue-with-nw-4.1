import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';
import * as Updates from 'expo-updates';

import './global.css';

console.log(Updates.isEmbeddedLaunch);

export default function App() {
  return (
    <>
      <ScreenContent title="Home" path="App.tsx" />
      <StatusBar style="auto" />
    </>
  );
}
