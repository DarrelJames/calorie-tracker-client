import React from 'react'
import { Table, Header } from 'semantic-ui-react'
const MealTotalsRow = ({carbs, calories, protein, fat}) => {
  console.log({carbs, calories, protein, fat});
  return (
  <Table.Footer>
    <Table.Row>
      <Table.Cell>
        <Header as='h2'>Totals</Header>
      </Table.Cell>
      <Table.Cell>
        <Header as='h4'>{carbs}</Header>
      </Table.Cell>
      <Table.Cell>
        <Header as='h4'>{protein}</Header>
      </Table.Cell>
      <Table.Cell>
        <Header as='h4'>{fat}</Header>
      </Table.Cell>
      <Table.Cell>
        <Header as='h2'>{calories}</Header>
      </Table.Cell>
    </Table.Row>
  </Table.Footer>
)}



export default MealTotalsRow
