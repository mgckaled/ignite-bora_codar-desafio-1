import { Audio } from "expo-av"
import { HStack, useTheme } from "native-base"
import { FastForward, Pause, Play, Rewind } from "phosphor-react-native"
import React, { useEffect, useState } from "react"
import { TouchableOpacity } from "react-native"

export function MusicControl() {
  const { colors } = useTheme()
  const [sound, setSound] = useState<Audio.Sound | null>(null)

  async function playSound() {
    console.log("Loading sound")
    const { sound } = await Audio.Sound.createAsync(require("../assets/audio/audio.mp3"))
    setSound(sound)

    console.log("Playing Sound")
    await sound.playAsync()
  }

  function stopSound() {
    setSound(null)
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound")
          sound.unloadAsync()
        }
      : undefined
  }, [sound])

  return (
    <HStack p={6} mt={8} alignContent='center' justifyContent='space-between'>
      <TouchableOpacity>
        <Rewind size={30} weight='fill' color={colors.trackColor} />
      </TouchableOpacity>
      {sound === null ? (
        <TouchableOpacity onPress={playSound}>
          <Play size={30} weight='fill' color={colors.trackColor} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={stopSound}>
          <Pause size={30} weight='fill' color={colors.trackColor} />
        </TouchableOpacity>
      )}

      <TouchableOpacity>
        <FastForward size={30} weight='fill' color={colors.trackColor} />
      </TouchableOpacity>
    </HStack>
  )
}
