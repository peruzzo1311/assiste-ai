import React from 'react'
import { Spinner as NativeBaseSpinner } from 'native-base'

export default function Spinner() {
  return (
    <NativeBaseSpinner
      color={'#FFCC00'}
      size={'lg'}
      marginBottom={24}
      marginTop={4}
      alignSelf={'center'}
    />
  )
}
