import { useRef } from 'react';
import { useAppSelector, useAppDispatch } from '../hook/reduxhooks';
import { allFields } from '../features/field/filedSlice';
import { addFormField, field } from '../features/form/formSlice';
import { Box, List, ListItem, chakra, IconButton } from '@chakra-ui/react';
import { MdOutlineAdd } from 'react-icons/md';

const StyleList = chakra(List, {
  baseStyle: {
    width: '18rem',
    height: '100%',
    padding: 2,
  },
});
const StyleListItem = chakra(List, {
  baseStyle: {
    padding: 2,
    outline: '1px solid #ccc',
    fontSize: 16,
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default function InteractiveList() {
  let ref = useRef(0);
  const dispatch = useAppDispatch();
  const items = useAppSelector(allFields);

  function addToForm(item: field) {
    let newItem = { ...item, id: `${item.id}-${ref.current++}` };
    dispatch(addFormField(newItem));
  }

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <StyleList spacing={2}>
        {items.map((item, index) => (
          <StyleListItem key={item.id} onClick={() => addToForm(item, index)}>
            <div>{item.name}</div>
            <IconButton
              size={'sm'}
              aria-label="add to form"
              icon={<MdOutlineAdd fontSize="small" />}
            />
          </StyleListItem>
        ))}
      </StyleList>
    </Box>
  );
}
