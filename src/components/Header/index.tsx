import React from 'react'
import { Box, Divider, HStack, Icon, Menu, Pressable, Text } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import opcoesOrdenacao from './opcoesOrdenacao'
import IListMovies from '../../interfaces/IListMovies'

type Props = {
  title: string
  movies?: IListMovies[]
}

export default function Header({ title, movies }: Props) {
  const navigation = useNavigation<any>()

  const resultsOrder = (opcaoSelecionada: string) => {
    let moviesFiltered = movies

    switch (opcaoSelecionada) {
      case 'tituloCrescente':
        movies.sort((a, b) => a.title.localeCompare(b.title))
        break

      case 'tituloDecrescente':
        movies.sort((a, b) => b.title.localeCompare(a.title))
        break

      case 'avaliacaoCrescente':
        movies.sort((a, b) => b.vote_average - a.vote_average)
        break

      case 'avaliacaoDecrescente':
        movies.sort((a, b) => a.vote_average - b.vote_average)
        break

      case 'lançamentoCrescente':
        movies.sort((a, b) => a.release_date.localeCompare(b.release_date))
        break

      case 'lançamentoDecrescente':
        movies.sort((a, b) => b.release_date.localeCompare(a.release_date))
        break

      case 'popularidadeCrescente':
        movies.sort((a, b) => b.popularity - a.popularity)
        break

      case 'popularidadeDecrescente':
        movies.sort((a, b) => a.popularity - b.popularity)
        break
    }

    navigation.push('MoviesVertical', {
      type: 'Pesquisa',
      movies: movies,
    })
  }

  return (
    <Box bgColor={'muted.900'}>
      <HStack alignItems={'center'} marginBottom={4} paddingX={4}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            as={<Ionicons name='chevron-back-sharp' />}
            color={'muted.200'}
            size={'xl'}
          />
        </TouchableOpacity>

        <Box flex={1} justifyContent={'center'} alignItems={'center'}>
          <Text color={'muted.200'} fontSize={'md'} fontWeight={'bold'}>
            {title}
          </Text>
        </Box>

        {title === 'Pesquisa' && (
          <Menu
            placement='left top'
            marginRight={4}
            w='300'
            trigger={(triggerProps) => {
              return (
                <Pressable
                  accessibilityLabel='Opções para ordenar filmes'
                  {...triggerProps}
                >
                  <Icon
                    as={<Ionicons name='filter' />}
                    color={'muted.200'}
                    size={'xl'}
                  />
                </Pressable>
              )
            }}
          >
            {opcoesOrdenacao.map((opcao) => (
              <>
                <Menu.ItemOption
                  key={opcao.value}
                  value={opcao.value}
                  onPress={() => {
                    resultsOrder(opcao.value)
                  }}
                >
                  {opcao.label}
                </Menu.ItemOption>
                <Divider m={1} />
              </>
            ))}
          </Menu>
        )}
      </HStack>
    </Box>
  )
}
