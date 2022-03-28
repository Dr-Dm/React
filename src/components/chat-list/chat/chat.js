import { ListItem, ListItemButton } from '@mui/material';

export function Chat({ title, selected, hadleListItemClick }) {
    return(
        <ListItemButton onClick={hadleListItemClick} selected={selected}>{title}</ListItemButton>
    );
};