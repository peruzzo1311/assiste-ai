import { AspectRatio, Box, Container, Image, Text } from 'native-base'
import React, { useEffect, useState } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

import { getCredits } from '../../api/TMDB'
import ICredits from '../../interfaces/ICredits.js'
import Spinner from '../Spinner'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'

type Props = {
  id: number
}

export default function Credits({ id }: Props) {
  const [credits, setCredits] = useState<ICredits[]>()
  const urlImage = 'https://image.tmdb.org/t/p/w500'
  const navigation = useNavigation<any>()

  useEffect(() => {
    getCredits(id)
      .then((res) => {
        setCredits(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {credits ? (
        credits.map(
          (actor) =>
            actor.profile_path && (
              <TouchableOpacity
                key={actor.id}
                onPress={() => navigation.navigate('Person', { id: actor.id })}
              >
                <Box
                  backgroundColor={'muted.800'}
                  borderRadius={'lg'}
                  overflow={'hidden'}
                  style={styles.actor}
                >
                  <AspectRatio ratio={1 / 1.33} size={250}>
                    <Image
                      resizeMode='cover'
                      source={{
                        uri: `${urlImage}${actor.profile_path}`,
                      }}
                      alt={`${actor.name}`}
                    />
                  </AspectRatio>

                  <Container justifyContent={'center'} alignItems={'center'}>
                    <Text
                      color={'muted.200'}
                      fontSize={'sm'}
                      fontWeight={'bold'}
                      marginTop={2}
                      textAlign={'center'}
                    >
                      {actor.name}
                    </Text>

                    <Text
                      color={'muted.200'}
                      fontSize={'sm'}
                      textAlign={'center'}
                      marginTop={2}
                    >
                      {actor.character}
                    </Text>
                  </Container>
                </Box>
              </TouchableOpacity>
            )
        )
      ) : (
        <Box
          flex={1}
          bg={'muted.900'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Spinner />
        </Box>
      )}
    </ScrollView>
  )
}
