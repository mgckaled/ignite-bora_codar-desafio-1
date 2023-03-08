import { Box, Center, Stack, VStack } from "native-base"

import { MusicControl } from "../components/MusciControls"
import { MusicInfo } from "../components/MusicInfo"

export function MusicPlayer() {
  return (
    <Stack
      flex={1}
      alignContent='center'
      justifyContent='center'
      bg={"background"}
      safeArea
    >
      <Center>
        <Box bg={"backgroundPlayer"} py={8} px={7} w={"5/6"} h={"2/3"}>
          <VStack>
            <MusicInfo />
            <MusicControl />
          </VStack>
        </Box>
      </Center>
    </Stack>
  )
}
