import { Flex } from "@chakra-ui/react"
import IconComponent from "../IconComponent"

function IconGroup() {
  return(
    <Flex  mx="auto" my="80px" justify="space-between" maxWidth="1160px">
      <IconComponent icon="cocktail" text="vida noturna"/>
      <IconComponent icon="surf" text="praia"/>
      <IconComponent icon="building" text="moderno"/>
      <IconComponent icon="museum" text="clássico"/>
      <IconComponent icon="earth" text="e mais..."/>
    </Flex>
  )
}

export default IconGroup