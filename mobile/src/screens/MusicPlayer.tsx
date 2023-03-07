import { Box, Center, HStack, Stack } from "native-base"

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
          <HStack>
            <MusicInfo />
          </HStack>
        </Box>
      </Center>
    </Stack>
  )
}
