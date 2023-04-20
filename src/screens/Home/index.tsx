import { Box, VStack } from 'native-base'
import React from 'react'
import SearchBar from '../../components/SearchBar'

export default function Home() {
  return (
    <Box safeAreaTop flex={1} bg={'muted.800'} p={4}>
      <VStack space={8} mt={'10%'}>
        <SearchBar />
      </VStack>
    </Box>
  )
}