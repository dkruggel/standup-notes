import React from 'react';
import entries from './Assets/db.json';

export default class Entry extends React.Component {
  render() {
    const date = new Date();
    const monthFilter = date.getFullYear() + '.' + (date.getMonth() + 1);
    const dayFilter = monthFilter + '.' + date.getDate();
    const entriesList = entries.entries[0];
    const today = entriesList[monthFilter][dayFilter];

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          margin: '1em',
          padding: '0.5em',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
          }}
        >
          <div style={{ paddingRight: '0.25em' }}>Yesterday:</div>
          <div style={{ textAlign: 'left' }}>{today.Yesterday}</div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
          }}
        >
          <div style={{ paddingRight: '0.25em' }}>Today:</div>
          <div style={{ textAlign: 'left' }}>{today.Today}</div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
          }}
        >
          <div style={{ paddingRight: '0.25em' }}>Impediments:</div>
          <div style={{ textAlign: 'left' }}>{today.Impediments}</div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
          }}
        >
          <div style={{ paddingRight: '0.25em' }}>Go Backs:</div>
          <div style={{ textAlign: 'left' }}>{today.GoBacks}</div>
        </div>
      </div>
    );
  }
}
