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
    this.saveEntry = this.saveEntry.bind(this);
  }

  componentDidMount() {
    const date = new Date();
    const monthFilter = date.getFullYear() + '.' + (date.getMonth() + 1);
    const dayFilter = monthFilter + '.' + date.getDate();
    const entriesList = entries.entries.filter(x => x[monthFilter])[0];
    const today = entriesList[monthFilter][dayFilter];

    this.setState({
      date: dayFilter,
      yesterday: today.Yesterday,
      today: today.Today,
      impediments: today.Impediments,
      goBacks: today.GoBacks,
    });
  }

  saveEntry() {
    const date = new Date();
    const monthFilter = date.getFullYear() + '.' + (date.getMonth() + 1);
    const dayFilter = monthFilter + '.' + date.getDate();
    const entriesList = entries.entries.filter((x) => x[monthFilter])[0];
    const today = entriesList[monthFilter][dayFilter];

    today.Yesterday = this.state.yesterday;
    today.Today = this.state.today;
    today.Impediments = this.state.impediments;
    today.GoBacks = this.state.goBacks;

    
  }

  render() {
    const date = new Date();
    const monthFilter = date.getFullYear() + '.' + (date.getMonth() + 1);
    const dayFilter = monthFilter + '.' + date.getDate();
    const entriesList = entries.entries.filter((x) => x[monthFilter])[0];
    const today = entriesList[monthFilter][dayFilter];

    return (
      <>
        <div class='main-section'>
          <EntryPart label={'Yesterday'} data={today.Yesterday} />
          <EntryPart label={'Today'} data={today.Today} />
          <EntryPart label={'Impediments'} data={today.Impediments} />
          <EntryPart label={'Go Backs'} data={today.GoBacks} />
          <div>
            <Fab color='secondary' aria-label='save' onClick={this.saveEntry}>
              <SaveAlt />
            </Fab>
          </div>
        </div>
      </>
    );
  }
}
