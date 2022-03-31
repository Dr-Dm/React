import { ListItem, ListItemButton } from '@mui/material';

export function Chat({ title, selected }) {
    return(
        <ListItemButton selected={selected}>{title}</ListItemButton>
    );
};