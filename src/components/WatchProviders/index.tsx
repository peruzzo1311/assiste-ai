import React, { useEffect, useState } from 'react'
import { Box, Stagger, Image, Text } from 'native-base'
import { getWatchProviders } from '../../api/TMDB'
import IWatchProviders from '../../interfaces/IWatchProviders.js'

type Props = {
  show: boolean
  id: number
}

export default function WatchProviders({ show, id }: Props) {
  const [watchProviders, setWatchProviders] = useState<IWatchProviders[]>()
  const urlImage = 'https://image.tmdb.org/t/p/w500'

  useEffect(() => {
    getWatchProviders(id)
      .then((res) => {
        setWatchProviders(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <Stagger
      visible={show}
      initial={{
        opacity: 0,
        scale: 0.9,
        translateY: -20,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        translateY: 0,
        transition: {
          duration: 200,
          stagger: {
            offset: 30,
          },
        },
      }}
      exit={{
        opacity: 0,
        scale: 0.9,
        translateY: -20,
        transition: {
          duration: 200,
          stagger: {
            offset: 30,
          },
        },
      }}
    >
      {watchProviders ? (
        watchProviders.map((provider) => (
          <Box
            key={provider.provider_id}
            marginX={4}
            marginY={2}
            paddingBottom={2}
            flexDirection={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            borderBottomWidth={1}
            borderBottomColor={'muted.600'}
          >
            <Text color={'muted.300'}>{provider.provider_name}</Text>

            <Image
              source={{
                uri: `${urlImage}${provider.logo_path}`,
              }}
              alt={`${provider.provider_name}`}
              resizeMode={'contain'}
              size={8}
              borderRadius={'lg'}
            />
          </Box>
        ))
      ) : (
        <Text
          color={'muted.300'}
          alignSelf={'center'}
          fontSize={'md'}
          fontWeight={'bold'}
          marginTop={4}
        >
          Dísponível apenas nos cinemas.
        </Text>
      )}
    </Stagger>
  )
}
