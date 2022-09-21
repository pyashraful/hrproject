import { Box } from '@chakra-ui/react';
import { useAppSelector, useAppDispatch } from '../../hook/reduxhooks';
import { allFormFields } from './formSlice';

import LongText from './questions/LongText';
import ShortText from './questions/ShortText';
import Email from './questions/Email';
import SingleSelect from './questions/SingleSelect';
import Phone from './questions/Phone';
import Number from './questions/Number';

function FromContainer() {
  const dispatch = useAppDispatch();
  const items = useAppSelector(allFormFields);
  console.log(
    '🚀 ~ file: FromContainer.tsx ~ line 9 ~ FromContainer ~ items',
    items
  );

  return (
    <Box borderWidth="1px" borderRadius="lg" height="100%" p="4">
      {items.fields.map((item) => {
        let type = item.type;

        switch (type) {
          case 'text':
            return <ShortText item={item} key={item.id} />;
          case 'textbox':
            return <LongText item={item} key={item.id} />;
          case 'email':
            return <Email item={item} key={item.id} />;
          case 'select':
            return <SingleSelect item={item} key={item.id} />;
          case 'tel':
            return <Phone item={item} key={item.id} />;
          case 'number':
            return <Number item={item} key={item.id} />;
          default:
            return null;
        }
      })}
    </Box>
  );
}

export default FromContainer;
