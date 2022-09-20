import DeleteButton from './DeleteButton';
import HideButton from './HideButton';
import RequireSwitchButton from './RequireSwitchButton';
import { Spacer, Stack } from '@chakra-ui/react';
import { useAppSelector, useAppDispatch } from '../../../hook/reduxhooks';
import { deleteFormField } from '../formSlice';
import { ItemProps } from '../../../globalType';

function FromInputAction({ item }: { item: ItemProps }) {
  console.log(
    '🚀 ~ file: FromInputAction.tsx ~ line 9 ~ FromInputAction ~ item',
    item
  );
  const dispatch = useAppDispatch();

  function handleDelete() {
    dispatch(deleteFormField(item.id));
  }

  return (
    <Stack direction="row" sx={{ p: 2 }}>
      <RequireSwitchButton />
      <Spacer />
      <Stack direction="row" spacing={2} alignItems="center">
        <HideButton />
        <DeleteButton onClick={handleDelete} />
      </Stack>
    </Stack>
  );
}

export default FromInputAction;
