import { Box, Stack } from '@chakra-ui/react';
import React from 'react';

type BoxProps = { children: React.ReactNode };

function FromBox({ children }: BoxProps) {
  return (
    <Box>
      <Stack
        rounded="md"
        shadow="md"
        p="4"
        borderWidth="1px"
        borderRadius="lg"
        mb={2}
      >
        {children}
      </Stack>
    </Box>
  );
}

export default FromBox;
