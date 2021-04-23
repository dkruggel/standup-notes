import React from 'react';
import entries from '../Assets/db.json';
import {
  Card,
  CardContent,
  Typography,
  Fab,
  TextField,
} from '@material-ui/core';
import { Edit, SaveAlt } from '@material-ui/icons';
import EntryPart from '../EntryPart/EntryPart.js';
import '../Entry/entry.css';

export default class Entry extends React.Component {
  render() {
    const date = new Date();
    const monthFilter = date.getFullYear() + '.' + (date.getMonth() + 1);
    const dayFilter = monthFilter + '.' + date.getDate();
    const entriesList = entries.entries[0];
    const today = entriesList[monthFilter][dayFilter];

    return (
      <>
        <div class='main-section'>
          <EntryPart label={'Yesterday'} data={today.Yesterday} />
          <EntryPart label={'Today'} data={today.Today} />
          <EntryPart label={'Impediments'} data={today.Impediments} />
          <EntryPart label={'Go Backs'} data={today.GoBacks} />
        </div>
        <div class='sections'>
          <div>
            <Fab color='primary' aria-label='edit'>
              <Edit />
            </Fab>
          </div>
          <div style={{ textAlign: 'right' }}>
            <Fab color='secondary' aria-label='save'>
              <SaveAlt />
            </Fab>
          </div>
        </div>
      </>
    );
  }
}
