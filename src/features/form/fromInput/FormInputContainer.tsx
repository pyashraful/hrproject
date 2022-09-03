import { Box, Button, Collapse, Stack, useDisclosure } from '@chakra-ui/react';
import QuestionInput from './QuestionInput';
import InputDiscription from './InputDiscription';
import AnswerInputDisable from './AnswerInputDisable';
import FromInputAction from './FromInputAction';

export default function FormInputContainer() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Button onClick={onToggle}>Toggle</Button>
      <Stack
        rounded="md"
        shadow="md"
        p="4"
        borderWidth="1px"
        borderRadius="lg"
        mb={2}
      >
        <QuestionInput />
        <Collapse style={{ margin: 0 }} in={isOpen} animateOpacity>
          <InputDiscription />
        </Collapse>
        <AnswerInputDisable />
        <Collapse style={{ margin: 0 }} in={isOpen}>
          <FromInputAction />
        </Collapse>
      </Stack>
    </Box>
  );
}
