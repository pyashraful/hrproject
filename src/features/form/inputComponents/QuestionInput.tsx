import {
  EditablePreview,
  useColorModeValue,
  Input,
  Editable,
  EditableInput,
} from '@chakra-ui/react';

import React, { useState } from 'react';
import useAutoSave from '../../../hook/useAutoSave';
import { itemProps } from '../questions/type';

function QuestionInput({ item }: itemProps) {
  const [value, setValue] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem(item.id);
    const initialValue = JSON.parse(saved);
    return initialValue || item.name;
  });
  console.log(
    '🚀 ~ file: QuestionInput.tsx ~ line 13 ~ QuestionInput ~ value',
    value
  );

  const isSaved = useAutoSave(item.id, value);
  console.log(
    '🚀 ~ file: QuestionInput.tsx ~ line 26 ~ QuestionInput ~ isSaved',
    isSaved
  );

  const onchange = (e: React.SyntheticEvent) => {
    setValue(e.target.value);
  };

  return (
    <Editable
      defaultValue={value}
      onBlur={() => console.log('f')}
      sx={{ fontSize: 'xl', fontWeight: 'bold' }}
    >
      <EditablePreview
        py={2}
        px={4}
        _hover={{
          background: useColorModeValue('gray.100', 'gray.700'),
        }}
      />
      <Input
        sx={{ fontSize: 'xl', fontWeight: 'bold' }}
        py={2}
        px={4}
        onFocus={() => console.log('t')}
        onChange={(e) => onchange(e)}
        as={EditableInput}
      />
    </Editable>
  );
}

export default QuestionInput;
