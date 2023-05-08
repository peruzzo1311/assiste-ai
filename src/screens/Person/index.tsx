import {
  AspectRatio,
  Box,
  HStack,
  Icon,
  Image,
  ScrollView,
  Text,
  VStack,
} from 'native-base'
import React, { useEffect, useState } from 'react'

import { getPerson, getPersonMovies } from '../../api/TMDB'
import IPerson from '../../interfaces/IPerson'
import { FontAwesome5 } from '@expo/vector-icons'
import MoviesHorizontal from '../MoviesHorizontal'
import IListMovies from '../../interfaces/IListMovies'
import Header from '../../components/Header'

export default function Person({ route }) {
  const [person, setPerson] = useState<IPerson>(null)
  const [movies, setMovies] = useState<IListMovies[]>(null)
  const { id } = route.params

  const FormateDate = (date: string) => {
    var arr = date.split('-')

    arr.reverse()

    return arr.join('/')
  }

  useEffect(() => {
    getPerson(id)
      .then((res) => setPerson(res))
      .catch((err) => console.log(err.message))

    getPersonMovies(id)
      .then((res) => setMovies(res))
      .catch((err) => console.log(err.message))
  }, [])

  return (
    <Box safeAreaTop flex={1} bg={'muted.900'} p={4}>
      {person && (
        <>
          <Header title={person.name} />

          <ScrollView px={2}>
            <AspectRatio ratio={1 / 1.33} width={'75%'} alignSelf={'center'}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${person.profile_path}`,
                }}
                alt={`${person.name}`}
                borderRadius={'2xl'}
                resizeMode='cover'
              />
            </AspectRatio>

            <Box safeArea>
              <Text
                color={'muted.200'}
                fontSize={'xl'}
                fontWeight={'bold'}
                marginBottom={8}
              >
                Informações Pessoais
              </Text>

              <VStack space={4}>
                <Box>
                  <Text color={'muted.200'} fontSize={'lg'} fontWeight={'bold'}>
                    Nome
                  </Text>

                  <Text color={'muted.200'} fontSize={'md'}>
                    {person.name}
                  </Text>
                </Box>

                <Box>
                  <Text color={'muted.200'} fontSize={'lg'} fontWeight={'bold'}>
                    Gênero
                  </Text>

                  <Text color={'muted.200'} fontSize={'md'}>
                    {person.gender === 1 ? 'Feminino' : 'Masculino'}
                  </Text>
                </Box>

                <Box>
                  <Text color={'muted.200'} fontSize={'lg'} fontWeight={'bold'}>
                    Data de nascimento
                  </Text>

                  <HStack space={4}>
                    <HStack
                      space={2}
                      alignItems={'center'}
                      justifyContent={'center'}
                    >
                      <Icon
                        as={<FontAwesome5 name='birthday-cake' />}
                        color={'muted.200'}
                        size={'md'}
                      />

                      <Text color={'muted.200'} fontSize={'md'}>
                        {FormateDate(person.birthday)}
                      </Text>
                    </HStack>

                    {person.deathday && (
                      <>
                        <Text
                          color={'muted.200'}
                          fontSize={'xl'}
                          fontWeight={'bold'}
                        >
                          -
                        </Text>

                        <HStack
                          space={2}
                          alignItems={'center'}
                          justifyContent={'center'}
                        >
                          <Icon
                            as={<FontAwesome5 name='cross' />}
                            color={'muted.200'}
                            size={'md'}
                          />

                          <Text color={'muted.200'} fontSize={'md'}>
                            {FormateDate(person.deathday)}
                          </Text>
                        </HStack>
                      </>
                    )}
                  </HStack>
                </Box>

                <Box>
                  <Text color={'muted.200'} fontSize={'lg'} fontWeight={'bold'}>
                    Local de nascimento
                  </Text>

                  <Text color={'muted.200'} fontSize={'md'}>
                    {person.place_of_birth}
                  </Text>
                </Box>

                <Box>
                  <Text color={'muted.200'} fontSize={'lg'} fontWeight={'bold'}>
                    Biografia
                  </Text>

                  <Text color={'muted.200'} fontSize={'md'}>
                    {person.biography}
                  </Text>
                </Box>

                {movies && (
                  <Box safeArea>
                    <Text
                      color={'muted.200'}
                      fontSize={'xl'}
                      fontWeight={'bold'}
                    >
                      Participações
                    </Text>

                    <MoviesHorizontal movies={movies} />
                  </Box>
                )}
              </VStack>
            </Box>
          </ScrollView>
        </>
      )}
    </Box>
  )
}
