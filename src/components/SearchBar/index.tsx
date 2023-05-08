import { Ionicons } from '@expo/vector-icons'
import { IInputProps, Icon, Input } from 'native-base'
import React from 'react'

export default function SearchBar({ ...props }: IInputProps) {
  return (
    <Input
      {...props}
      variant={'filled'}
      bg={'muted.700'}
      fontWeight={'semibold'}
      placeholder='Harry Potter...'
      fontSize={'md'}
      mx={'auto'}
      borderWidth={0}
      borderRadius={'full'}
      color={'muted.200'}
      InputLeftElement={
        <Icon
          as={<Ionicons name={'search'} />}
          size={6}
          ml='4'
          color={'muted.400'}
        />
      }
      _focus={{
        bg: 'muted.700',
      }}
    />
  )
}
