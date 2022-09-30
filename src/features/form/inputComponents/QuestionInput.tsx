import {
  EditablePreview,
  useColorModeValue,
  Input,
  Editable,
  EditableInput,
} from '@chakra-ui/react';

import { useState } from 'react';
import useAutoSave from '../../../hook/useAutoSave';
import { ItemProps } from '~/globalType';

function QuestionInput({ item }: { item: ItemProps }) {
  const [value, setValue] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem(item.id);
    if (saved) {
      const initialValue = JSON.parse(saved);
      return initialValue ? initialValue : item.name;
    }
  });
  console.log('🚀 ~ file: QuestionInput.tsx ~ line 22 ~  value', value);

  const isSaved = useAutoSave(item.id, value);
  console.log(
    '🚀 ~ file: QuestionInput.tsx ~ line 26 ~ QuestionInput ~ isSaved',
    isSaved
  );

  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
