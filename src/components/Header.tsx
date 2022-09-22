import { Box, Flex, Icon, Text, VStack } from "@chakra-ui/react";
import { FiAlignLeft } from "react-icons/fi"
import { FiMapPin } from "react-icons/fi"

export function Header() {

    return (
        <Flex align="center" justify="space-between" p={5} w="100%">
            <Icon as={FiAlignLeft} fontSize={40} />
            <VStack>
                <Box h="72px" w="72px" border="1px" borderColor="white" rounded="full" />
                <Text bg="linear-gradient(red, yellow)" bgClip="text" color="transparent">La Bella Pizza</Text>
                <Text lineHeight={0.5} fontSize={12}>Boa Noite</Text>
            </VStack>
            <Icon as={FiMapPin} fontSize={40} />
        </Flex>
    )
}