// import { Paper } from "@mui/material";
import Paper from '@mui/material/Paper';
import { useAppSelector, useAppDispatch } from '../../hook/reduxhooks';
import { allFormFields } from './formSlice';

function FromContainer() {
  const dispatch = useAppDispatch();
  const items = useAppSelector(allFormFields);
  console.log(
    '🚀 ~ file: FromContainer.tsx ~ line 9 ~ FromContainer ~ items',
    items
  );

  return (
    <Paper>
      {items.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </Paper>
  );
}

export default FromContainer;
