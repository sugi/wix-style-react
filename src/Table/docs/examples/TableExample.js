/* eslint-disable */

class TableExample extends React.Component {
  state = {
    data: [
      { render: () => <ListItemSection type="subheader" title="My family" />},
      { firstName: 'Meghan', lastName: 'Bishop' },
      { firstName: 'Sara', lastName: 'Porter' },
      { render: () => <ListItemSection type="subheader" title="My friends" />},
      { firstName: 'Deborah', lastName: 'Rhodes' },
      { firstName: 'Walter', lastName: 'Jenning' },
    ],
  };

  render() {
    return (
      <Table
        data={this.state.data}
        columns={[
          { title: 'First', render: row => row.firstName },
          { title: 'Last', render: row => row.lastName },
        ]}
      >
        <Table.Content />
      </Table>
    );
  }
}
