import {
  Box,
  Editable,
  EditableInput,
  EditablePreview,
  flexbox,
  Icon,
  List,
  ListIcon,
  ListItem,
  Radio,
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import { MdOutlineCircle } from 'react-icons/md';

function Option() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Icon as={MdOutlineCircle} color="gray.300" />
      <Editable defaultValue="Option">
        <EditablePreview />
        <EditableInput />
      </Editable>
    </Box>
  );
}

export default Option;
