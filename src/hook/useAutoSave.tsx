import { useEffect, useRef, useState } from 'react';

export default function useAutoSave(
  storageId: string,
  value: string,
  delay = 1000
) {
  console.log('🚀 ~ file: useAutoSave.tsx ~ line 13 ~ storageId', storageId);
  const prevData = useRef(value);
  const [saveState, setSaveState] = useState('saved');

  useEffect(() => {
    if (saveState === 'saved' && prevData.current != value) {
      setSaveState('waitingToSave');
    }
    prevData.current = value;
  }, [saveState, value]);

  const haseDataChanged = saveState === 'waitingToSave';

  useEffect(() => {
    let timerId: number;
    if (haseDataChanged) {
      timerId = setTimeout(() => {
        setSaveState('saving');
        delayedSave(storageId, JSON.stringify(prevData.current)).then(() => {
          setSaveState('saved');
        });
      }, delay);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [storageId, value, delay]);

  return saveState;
}

function delayedSave(storageId: string, value: string) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      localStorage.setItem(storageId, value);
      resolve();
    }, 1000);
  });
}

// const dispatch = useDispatch();
// const { form } = useSelector((state: RootState) => state.form);
// const [autoSave] = useDebounce(() => {
//   dispatch(saveForm(form));
// }, 1000);

// useEffect(() => {
//   autoSave();
// }, [form, autoSave]);
