import { IconButton } from '@chakra-ui/react';
import { MdOutlineDelete } from 'react-icons/md';

function DeleteButton({ ...rest }) {
  return (
    <IconButton
      {...rest}
      aria-label="Search database"
      icon={<MdOutlineDelete />}
    />
  );
}

export default DeleteButton;
