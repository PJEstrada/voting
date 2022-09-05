import logo from './logo.svg';
import './App.css';
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
import { Routes, Route, Link } from "react-router-dom";
const GROUPS_LIST = [
    {
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
    },
    {
        name: 'Group 2',
        description: 'This is group 2',
        id: 2,
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
    },
    {
        name: 'Group 3',
        description: 'This is group 3',
        id: 3,
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
]


function GroupList() {
    let dense = true
    return (
        <Container>
            <h1>Groups: </h1>
            <List dense={dense}>dense
                {GROUPS_LIST.map(elm => {
                    return (
                        <Link to={`/groups/${elm.id}`}>
                            <ListItem
                                className="group-item"
                            >
                                <ListItemAvatar>
                                    <Avatar>
                                        <Group/>
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
    );
}

export default GroupList;
