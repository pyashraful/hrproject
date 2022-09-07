import { useEffect, useRef, useState } from 'react';

export default function useAutoSave(sotrageId, value, delay = 1000) {
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
        delayedSave(sotrageId, JSON.stringify(prevData.current)).then(() => {
          setSaveState('saved');
        });
      }, delay);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [sotrageId, value, delay]);

  return saveState;
}

function delayedSave(storageId, value) {
  return new Promise((resolve, reject) => {
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
