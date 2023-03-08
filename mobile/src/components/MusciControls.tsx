import { HStack, useTheme } from "native-base"
import { FastForward, Play, Rewind } from "phosphor-react-native"
import { TouchableOpacity } from "react-native"

export function MusicControl() {
  const { colors } = useTheme()

  return (
    <HStack p={6} mt={8} alignContent='center' justifyContent='space-between'>
      <TouchableOpacity>
        <Rewind size={30} weight='fill' color={colors.trackColor} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Play size={30} weight='fill' color={colors.trackColor} />
      </TouchableOpacity>
      <TouchableOpacity>
        <FastForward size={30} weight='fill' color={colors.trackColor} />
      </TouchableOpacity>
    </HStack>
  )
}
