import React from 'react';
import { Activities } from '../components/Activities';
import { Icon, Table } from 'semantic-ui-react';

export const ActivitiesTable = () => {
  const headerItems = ['Activity', 'Icon', 'Weather Code', 'Type'];
  return (
    <Table celled>
      { generateTableHeader(headerItems) }
      <Table.Body>
        { generateTableRows(Activities) }
      </Table.Body>
    </Table>
  );
}

const generateTableHeader = headerItems  => {
  const headerCells = headerItems
    .map((headerItem, i) => {
      return (
      <Table.HeaderCell key={ i }>
        { headerItem }
      </Table.HeaderCell>)
    });

  return (
  <Table.Header>
    <Table.Row>
      { headerCells }
    </Table.Row>
  </Table.Header>
  );
}

const generateTableRows = activities => {
  return activities.map((activity, i) => {
    return (
    <Table.Row key={ i }>
      <Table.Cell>
        { activity.title }
      </Table.Cell>
      <Table.Cell>
        <Icon name={ activity.icon } size="big" />
      </Table.Cell>
      <Table.Cell>
        { `${ activity.code }xx` }
      </Table.Cell>
      <Table.Cell>
        { activity.active ? 'Active' : 'Relaxed' }
      </Table.Cell>
    </Table.Row>
    )
  });
}
