import { useAppSelector, useAppDispatch } from '../../hook/reduxhooks';
import { allFormFields } from './formSlice';
import FormInputContainer from './fromInput/FormInputContainer';

function FromContainer() {
  const dispatch = useAppDispatch();
  const items = useAppSelector(allFormFields);

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <FormInputContainer item={item} />
        </div>
      ))}
    </div>
  );
}

export default FromContainer;
