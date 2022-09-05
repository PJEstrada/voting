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
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

const VOTE_DATA = [
    {
        value: 'yes',
        weight: 0.02
    },
    {
        value: 'yes',
        weight: 0.02
    },
    {
        value: 'no',
        weight: 0.02
    },
    {
        value: 'no',
        weight: 0.02
    },
    {
        value: 'no',
        weight: 0.02
    },
    {
        value: 'no',
        weight: 0.02
    },
    {
        value: 'no',
        weight: 0.02
    },
    {
        value: 'no',
        weight: 0.02
    }
]

function countVotes(votes) {
    let result = {}

    for (let vote of votes) {
        if (!result[vote.value]) {
            result[vote.value] = 1
        } else {
            result[vote.value] += 1
        }
    }
    return result
}

function VotingData() {
    let stats = countVotes(VOTE_DATA)
    return stats && (
      <Container>
          <h1>Results:</h1>
          <div className="voting-container">
              <Card className="voting-option">
                  <CardContent>
                      <h2>Yes: {stats.yes}</h2>
                      <div className="vote-chips-container">
                          {VOTE_DATA.filter(vote => vote.value === 'yes').map(vote => {
                              return (
                                <Chip className="chip-data" color="success" label={vote.weight} />
                              )

                          })}
                      </div>
                  </CardContent>
              </Card>
              <Card className="voting-option">
                  <CardContent>
                      <h2>No: {stats.no}</h2>
                      <div className="vote-chips-container">
                          {VOTE_DATA.filter(vote => vote.value === 'no').map(vote => {
                              return (
                                  <Chip className="chip-data" color="error" label={vote.weight} />
                              )

                          })}
                      </div>
                  </CardContent>
              </Card>
          </div>
      </Container>
    )
}

export default VotingData;
