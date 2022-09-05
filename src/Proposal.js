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
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import VotingData from "./VotingData";
const PROPOSALMOCK = {
    name: 'Proposal 1',
    description: 'This is proposal description it contains all the info about proposal.',
    id: 1,
}

function GroupDetail() {
    let dense = true
    let [proposal, setProposal] = useState(null)
    useEffect(() => {
        // Update the document title using the browser API
        setProposal(PROPOSALMOCK)
    });
    return proposal && (
        <Container>
            <h1>{proposal.name} </h1>
            <Card>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {proposal.description}
                    </Typography>
                </CardContent>
            </Card>
            <VotingData></VotingData>
        </Container>
    )
}

export default GroupDetail;
