import * as React from 'react';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FolderIcon from '@mui/icons-material/Folder';
import AddIcon from '@mui/icons-material/Add';
import { useAppSelector, useAppDispatch } from '../hook/reduxhooks';
import { allFields } from '../features/field/filedSlice';
import { addFormField, field } from '../features/form/formSlice';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  const dispatch = useAppDispatch();
  const items = useAppSelector(allFields);

  function addToForm(item: field) {
    let newItem = { ...item, id: items.length + 1 };
    dispatch(addFormField(newItem));
  }

  return (
    <Demo>
      <List dense={dense}>
        {items.map((item) => (
          <ListItem
            key={item.id}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="Add"
                onClick={() => addToForm(item)}
              >
                <AddIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Single-line item"
              secondary={secondary ? 'Secondary text' : null}
            />
          </ListItem>
        ))}
      </List>
    </Demo>
  );
}
