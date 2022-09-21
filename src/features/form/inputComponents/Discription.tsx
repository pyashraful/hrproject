import React, { useState } from 'react';
import {
  EditablePreview,
  useColorModeValue,
  Input,
  Editable,
  EditableInput,
} from '@chakra-ui/react';

export default function InputDiscription() {
  const [value, setValue] = useState('Add Discription');
  console.log(
    '🚀 ~ file: InputDiscription.tsx ~ line 12 ~ InputDiscription ~ value',
    value
  );
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);
  // const shouldCollaps = () => {
  //   if (value !== '"Add Discription"') {
  //     dispatch({ type: 'discriptionCollapse' });
  //   }
  // };

  return (
    <Editable defaultValue="Add Discription">
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
        onChange={(event) => handleChange(event)}
        // onFocus={() => shouldCollaps}
        as={EditableInput}
      />
    </Editable>
  );
}
