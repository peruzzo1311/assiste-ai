import { Box, ScrollView, View, Text } from 'native-base'
import React, { useState } from 'react'
import ListTopRated from '../../components/ListTopRated/'
import ListPopular from '../../components/ListPopular'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home() {
  return (
    <Box safeAreaTop flex={1} bg={'muted.900'} p={4}>
      <View>
        <Text color={'muted.100'} fontSize={'xl'} fontWeight={'bold'}>
          Melhores avaliados
        </Text>

        <SafeAreaView>
          <ListTopRated />
        </SafeAreaView>
      </View>

      <View mt={8}>
        <Text color={'muted.100'} fontSize={'xl'} fontWeight={'bold'}>
          Populares
        </Text>

        <SafeAreaView>
          <ListPopular />
        </SafeAreaView>
      </View>
    </Box>
  )
}
