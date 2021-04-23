import React from 'react';
import { Card, CardContent, Typography, TextField } from '@material-ui/core';

export default class EntryPart extends React.Component {
  render() {
    return (
      <Card>
        <CardContent>
          <Typography color='textSecondary' gutterBottom>
            {this.props.label}:
          </Typography>
          <TextField
            id='outlined-basic'
            defaultValue={this.props.data}
            variant='outlined'
            multiline
            rowsMax={20}
          />
        </CardContent>
      </Card>
    );
  }
}
