import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Group from '@mui/icons-material/Group';
import DeleteIcon from '@mui/icons-material/Delete';
import {Routes, Route, Link} from "react-router-dom";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
const GROUPMOCK = {
    name: 'Group 1',
    description: 'This is group 1',
    id: 1,
    proposals: [
        {
            name: 'Proposal 1',
            description: 'This is proposal 1',
            id: 1,
        },
        {
            name: 'Proposal 2',
            description: 'This is proposal 2',
            id: 2,
        },
        {
            name: 'Proposal 3',
            description: 'This is proposal 3',
            id: 3,
        }
    ]
}

function GroupDetail() {
    let dense = true
    let [group, setGroup] = useState(null)
    useEffect(() => {
        // Update the document title using the browser API
        setGroup(GROUPMOCK)
    });
    return group && (
        <Container>
            <h1>{group.name} </h1>
            <List dense={dense}>dense
                {group.proposals.map(elm => {
                    return (
                        <Link to={`/groups/${group.id}/proposal/${elm.id}`}>
                            <ListItem

                                className="group-item"
                                // secondaryAction={
                                //     <IconButton edge="end" aria-label="delete">
                                //         <DeleteIcon/>
                                //     </IconButton>
                                // }
                            >
                                <ListItemAvatar>
                                    <Avatar>
                                        <AccountBalanceIcon/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    className="group-title"
                                    primary={elm.name}
                                    secondary={elm.description}
                                />
                            </ListItem>
                        </Link>

                    )
                })}
            </List>
        </Container>
    )
}

export default GroupDetail;
