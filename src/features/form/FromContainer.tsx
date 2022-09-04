import { Box } from '@chakra-ui/react';
import { useAppSelector, useAppDispatch } from '../../hook/reduxhooks';
import { allFormFields } from './formSlice';
import FormInputContainer from './fromInput/FormInputContainer';

function FromContainer() {
  const dispatch = useAppDispatch();
  const items = useAppSelector(allFormFields);
  console.log(
    '🚀 ~ file: FromContainer.tsx ~ line 9 ~ FromContainer ~ items',
    items
  );

  return (
    <Box borderWidth="1px" borderRadius="lg" height="100%" p="4">
      {items.map(
        (item, index) => {
          let type = item.type;

          switch (type) {
            case 'text':
              return <FormInputContainer item={item} key={item.id} />;
            default:
              return null;
          }
        }

        // (
        //   <div key={index}>
        //     {item.type === 'text' && <FormInputContainer item={item} />}
        //     {item.type === 'textbox' && <FormInputContainer item={item} />}
        //     {item.type === 'email' && <FormInputContainer item={item} />}
        //   </div>
        // )
      )}
    </Box>
  );
}

export default FromContainer;
