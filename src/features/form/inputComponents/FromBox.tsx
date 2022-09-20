import { Box, Stack } from '@chakra-ui/react';
import React from 'react';
import AnswerInputDisable from './AnswerInputDisable';
import InputDiscription from './Discription';
import FromInputAction from './FromInputAction';
import QuestionInput from './QuestionInput';
import { ItemProps } from '../../../globalType';

type BoxProps = {
  children: React.ReactNode;
  item: ItemProps;
};

function FromBox({ children, item }: BoxProps) {
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
        <InputDiscription />
        {children}
        <FromInputAction item={item} />
      </Stack>
    </Box>
  );
}

export default FromBox;
