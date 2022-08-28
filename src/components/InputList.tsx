import * as React from 'react';
import { useAppSelector, useAppDispatch } from '../hook/reduxhooks';
import { allFields } from '../features/field/filedSlice';
import { addFormField, field } from '../features/form/formSlice';

export default function InteractiveList() {
  const dispatch = useAppDispatch();
  const items = useAppSelector(allFields);

  function addToForm(item: field) {
    let newItem = { ...item, id: items.length + 1 };
    dispatch(addFormField(newItem));
  }

  return (
    <div>
      {items.map((item) => (
        <div key={item.id} onClick={() => addToForm(item)}>
          <div>
            <div>{item.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
