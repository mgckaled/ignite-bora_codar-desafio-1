import { HStack, Heading, Image, Text, VStack } from "native-base"

export function MusicInfo() {
  return (
    <HStack>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        }}
        alt='"Capa do cd Rockeseat - Single - Acorda Devinho"'
        w={24}
        h={24}
        borderRadius={6}
      />
      <VStack>
        <Heading
          p={2}
          ml={3}
          fontFamily='Roboto_700Bold'
          color={"infoColor"}
          fontSize={20}
        >
          Acorda Devinho
        </Heading>
        <Text
          p={2}
          ml={3}
          fontFamily='Roboto_400Regular'
          color={"infoColor"}
          opacity={0.67}
          fontSize={18}
        >
          Banda Rockeseat
        </Text>
      </VStack>
    </HStack>
  )
}
