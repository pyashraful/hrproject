import { useState, useReducer, useRef } from 'react';
import { Box, Button, Collapse, Stack, useDisclosure } from '@chakra-ui/react';
import { useOutsideClick } from '@chakra-ui/react';
import QuestionInput from './QuestionInput';
import InputDiscription from './Discription';
import AnswerInputDisable from './AnswerInputDisable';
import FromInputAction from './FromInputAction';
import { ItemProps } from '../questions/type';

// function collapseRuducer(state, action) {
//   switch (action.type) {
//     case 'toggle':
//       return {
//         isDiscriptionOpen: !state.isDiscriptionOpen,
//         isActionOpen: !state.isActionOpen,
//       };
//     case 'discriptionCollapse':
//       return {
//         ...state,
//         isDiscriptionOpen: true,
//       };
//     default:
//       throw new Error();
//   }
// }

// const initialState = {
//   isDiscriptionOpen: false,
//   isActionOpen: false,
// };

export default function FormInputContainer({ item }: { item: ItemProps }) {
  // const ref = useRef();
  // const [state, dispatch] = useReducer(collapseRuducer, initialState);
  // console.log(
  //   '🚀 ~ file: FormInputContainer.tsx ~ line 29 ~ FormInputContainer ~ state',
  //   state
  // );

  return (
    <Box>
      <Stack
        rounded="md"
        shadow="md"
        p="4"
        borderWidth="1px"
        borderRadius="lg"
        mb={2}
      >
        <QuestionInput item={item} />
        {/* <Collapse
          style={{ margin: 0 }}
          in={state.isDiscriptionOpen}
          animateOpacity
        > */}
        <InputDiscription />
        {/* </Collapse> */}
        <AnswerInputDisable />
        {/* <Collapse style={{ margin: 0 }} in={state.isActionOpen}> */}
        <FromInputAction item={item} />
        {/* </Collapse> */}
      </Stack>
    </Box>
  );
}
