import { PhoneIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React from 'react';

function PhoneAnswerInput() {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        // children={}
      >
        <PhoneIcon color="gray.300" />
      </InputLeftElement>

      <Input type="tel" placeholder="Phone number" disabled />
    </InputGroup>
  );
}

export default PhoneAnswerInput;
