import { Box } from '@chakra-ui/react';
import { useAppSelector, useAppDispatch } from '../../hook/reduxhooks';
import { allFormFields } from './formSlice';
import FormInputContainer from './fromInput/FormInputContainer';

function FromContainer() {
  const dispatch = useAppDispatch();
  const items = useAppSelector(allFormFields);

  return (
    <Box borderWidth="1px" borderRadius="lg" height="100%" p="4">
      {items.map((item, index) => (
        <div key={index}>
          <FormInputContainer item={item} />
        </div>
      ))}
    </Box>
  );
}

export default FromContainer;
