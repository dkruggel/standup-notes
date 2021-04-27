import React from 'react';
import entries from '../Assets/db.json';
import { Fab } from '@material-ui/core';
import { SaveAlt } from '@material-ui/icons';
import EntryPart from '../EntryPart/EntryPart.js';
import '../Entry/entry.css';

export default class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      yesterday: '',
      today: '',
      impediments: '',
      goBacks: '',
    };
  }

  render() {
    const date = new Date();
    const monthFilter = date.getFullYear() + '.' + (date.getMonth() + 1);
    const dayFilter = monthFilter + '.' + date.getDate();
    const entriesList = entries.entries[0];
    const today = entriesList[monthFilter][dayFilter];

    const saveEntry = () => {
      const date = new Date();
      const dateString =
        date.getFullYear() + '.' + (date.getMonth() + 1) + '.' + date.getDate();
      const yesterday = '';
      const today = '';
      const impediments = '';
      const goBacks = '';

      this.setState({
        date: dateString,
        yesterday: yesterday,
        today: today,
        impediments: impediments,
        goBacks: goBacks,
      });
    };

    return (
      <>
        <div class='main-section'>
          <EntryPart label={'Yesterday'} data={today.Yesterday} />
          <EntryPart label={'Today'} data={today.Today} />
          <EntryPart label={'Impediments'} data={today.Impediments} />
          <EntryPart label={'Go Backs'} data={today.GoBacks} />
          <div>
            <Fab color='secondary' aria-label='save' onClick={saveEntry()}>
              <SaveAlt />
            </Fab>
          </div>
        </div>
      </>
    );
  }
}
