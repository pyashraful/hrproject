import DeleteButton from './DeleteButton';
import HideButton from './HideButton';
import RequireSwitchButton from './RequireSwitchButton';
import { Box, Spacer, Stack } from '@chakra-ui/react';

function FromInputAction() {
  return (
    <Stack direction="row" sx={{ p: 2 }}>
      <RequireSwitchButton />
      <Spacer />
      <Stack direction="row" spacing={2} alignItems="center">
        <HideButton />
        <DeleteButton />
      </Stack>
    </Stack>
  );
}

export default FromInputAction;
