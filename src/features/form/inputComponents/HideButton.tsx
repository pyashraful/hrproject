import { MdOutlineVisibilityOff } from 'react-icons/md';
import { Button } from '@chakra-ui/react';

function HideButton() {
  return (
    <Button leftIcon={<MdOutlineVisibilityOff />} variant="outline">
      Hide qusetion
    </Button>
  );
}

export default HideButton;
