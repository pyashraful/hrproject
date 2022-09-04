import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';
import { Button } from '@chakra-ui/react';
import React from 'react';

function HideButton() {
  return (
    <Button leftIcon={<MdOutlineVisibilityOff />} variant="outline">
      Hide qusetion
    </Button>
  );
}

export default HideButton;
