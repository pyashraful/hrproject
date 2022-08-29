// // import * as React from 'react';

// import { field } from '../formSlice';
// import {
//   Box,
//   Button,
//   chakra,
//   Collapse,
//   useDisclosure,
//   useEditableControls,
// } from '@chakra-ui/react';
// import {
//   Editable,
//   EditableInput,
//   EditableTextarea,
//   EditablePreview,
// } from '@chakra-ui/react';

// const EditableFieldPrev = chakra(EditablePreview, {
//   baseStyle: {
//     padding: 0.5,
//     '&:hover': {
//       outlineStyle: 'dashed',
//       outlineColor: 'gray.300',
//       outlineWidth: 'thin',
//     },
//   },
// })  ;

import {
  EditablePreview,
  Box,
  useColorModeValue,
  Input,
  useDisclosure,
  Editable,
  EditableInput,
} from '@chakra-ui/react';

import { useRef, useEffect } from 'react';

export default function FormInputContainer({ item }: { item: field }) {
  return (
    <Box
      rounded="md"
      shadow="md"
      p="4"
      borderWidth="1px"
      borderRadius="lg"
      mb={2}
    >
      <Editable defaultValue="Rasengan ⚡️" onBlur={() => console.log('f')}>
        <EditablePreview
          py={2}
          px={4}
          _hover={{
            background: useColorModeValue('gray.100', 'gray.700'),
          }}
        />
        <Input
          py={2}
          px={4}
          onFocus={() => console.log('t')}
          as={EditableInput}
        />
      </Editable>
    </Box>
  );
}

// const { isOpen, onToggle } = useDisclosure();

// function handelcoll() {
//   onToggle();
// }

// <Collapse in={isOpen} animateOpacity>
//   <Box
//     p="40px"
//     color="white"
//     mt="4"
//     bg="gray.400"
//     rounded="md"
//     shadow="md"
//   ></Box>
// </Collapse>
// <Collapse in={isOpen}>
//   <Box>
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
//     dolorem doloribus eos modi, eius accusamus. Odit, voluptatibus!
//     Molestias commodi incidunt consequuntur.
//   </Box>
// </Collapse>
