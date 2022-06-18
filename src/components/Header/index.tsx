import { Flex, Image } from "@chakra-ui/react"

function Header() {
  return(
    <Flex
      as="header"
      width="100%"
      height= {["50px","100px"]}
      px="1rem"
      bg="white"
      align="center" 
      justify="center"
      mx="auto"
    >
      <Image
        width={["81px","184px"]}
        src="/Logo.svg"
        alt="Um avição voando sobre o nome da marca world trip"
      />
    </Flex>
  )
}

export default Header