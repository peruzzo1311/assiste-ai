import { Ionicons } from '@expo/vector-icons'
import { IInputProps, Icon, Input } from 'native-base'
import React from 'react'

export default function SearchBar({ ...props }: IInputProps) {
  return (
    <Input
      {...props}
      variant={'filled'}
      bg={'muted.700'}
      InputLeftElement={
        <Icon
          as={<Ionicons name={'search'} />}
          size={6}
          ml='2'
          color={'muted.400'}
        />
      }
      placeholder='Oque vamos assistir hoje?'
      fontSize={'md'}
      color={'muted.100'}
      mx={'auto'}
      borderWidth={0}
      borderRadius={24}
      _focus={{
        borderColor: 'muted.200',
        borderWidth: 1,
        bg: 'muted.600',
      }}
    />
  )
}
