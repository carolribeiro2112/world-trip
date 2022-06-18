import { Flex, Image, Text } from "@chakra-ui/react"

interface IconComponentProps {
  icon: string,
  text: string
}

function IconComponent({icon, text}: IconComponentProps) {
  return (
    <Flex flexDirection={["row","column"]} align="center" justify="center">
      <Image src={`/Icons/${icon}.svg`} alt={`${icon}`} w="85px" h="85px" mb="6"/>
      <Text fontWeight="600" color="gray.700" fontSize={["md", "xl","2xl"]}>{text}</Text>
    </Flex>
  )
}

export default IconComponent