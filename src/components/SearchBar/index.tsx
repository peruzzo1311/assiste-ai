import { Ionicons } from '@expo/vector-icons'
import { IInputProps, Icon, Input } from 'native-base'
import React from 'react'

export default function SearchBar({ ...props }: IInputProps) {
  return (
    <Input
      {...props}
      variant={'filled'}
      InputLeftElement={
        <Icon as={<Ionicons name={'search'} />} size={6} ml='2' />
      }
      placeholder='Oque vamos assistir hoje?'
      fontSize={'md'}
      color={'muted.100'}
      m={'auto'}
      bg={'muted.600'}
      borderWidth={1}
      borderRadius={24}
      borderColor={'muted.500'}
      _focus={{
        borderColor: 'muted.400',
        borderWidth: 1,
        bg: 'muted.600',
      }}
    />
  )
}
