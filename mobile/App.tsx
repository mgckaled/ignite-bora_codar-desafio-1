import { Roboto_400Regular, Roboto_700Bold, useFonts } from "@expo-google-fonts/roboto"
import { NativeBaseProvider } from "native-base"
import { StatusBar, Text } from "react-native"

import { Loading } from "./src/components/Loading"
import { THEME } from "./src/theme"

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent />
      {fontsLoaded ? <Loading /> : <Text>Music Player</Text>}
    </NativeBaseProvider>
  )
}

