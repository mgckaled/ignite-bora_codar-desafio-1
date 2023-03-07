import { Roboto_400Regular, Roboto_700Bold, useFonts } from "@expo-google-fonts/roboto"
import { NativeBaseProvider } from "native-base"
import { StatusBar } from "react-native"

import { Loading } from "./src/components/Loading"

import { MusicPlayer } from "./src/screens/MusicPlayer"
import { THEME } from "./src/theme"

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
      {fontsLoaded ? <MusicPlayer /> : <Loading />}
    </NativeBaseProvider>
  )
}

