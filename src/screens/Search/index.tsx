import { Box, Button } from 'native-base'
import React, { useState } from 'react'
import { Keyboard, Pressable } from 'react-native'

import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'
import IListMovies from '../../interfaces/IListMovies'
import { getSearchMovies } from '../../api/TMDB'
import { useNavigation } from '@react-navigation/native'

export default function Search() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [search, setSearch] = useState<string>(null)
  const navigation = useNavigation<any>()

  const handleSearch = async () => {
    try {
      setIsLoading(true)

      if (search && search != ' ') {
        const response: IListMovies[] = await getSearchMovies(search)

        navigation.navigate('MoviesVertical', {
          type: 'Pesquisa',
          movies: response,
        })
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
      <Box safeAreaTop flex={1} bg={'muted.900'} p={4}>
        <Header title='Procurar' />

        <Box safeArea flex={1} justifyContent={'center'} alignItems={'center'}>
          <SearchBar onChangeText={(text) => setSearch(text)} value={search} />

          <Button
            onPress={() => handleSearch()}
            variant={'ghost'}
            borderRadius={'full'}
            bgColor={'#FFCC00'}
            width={'50%'}
            minWidth={300}
            marginTop={'10%'}
            shadow={3}
            android_ripple={{
              color: 'muted.900',
            }}
            _text={{
              color: 'muted.900',
              fontSize: 'lg',
              fontWeight: 'bold',
            }}
            isLoading={isLoading}
            isLoadingText='Procurando...'
            _loading={{
              _spinner: {
                color: 'muted.900',
              },
              _text: {
                color: 'muted.900',
              },
            }}
          >
            Procurar
          </Button>
        </Box>
      </Box>
    </Pressable>
  )
}
