import { Table } from '@nextui-org/react';

export default function table(){
  const columns = [
    {
      key: "header_1",
      label: "HEADER",
    },
    {
      key: "header_2",
      label: "HEADER",
    },
    {
      key: "header_3",
      label: "HEADER",
    },
    {
      key: "header_4",
      label: "HEADER",
    }
  ];
  const rows = [
    {
      key: "1",
      header_1: "Item",
      header_2: "Item",
      header_3: "Item",
      header_4: "Item"
    },
    {
      key: "2",
      header_1: "Item",
      header_2: "Item",
      header_3: "Item",
      header_4: "Item"
    },
    {
      key: "3",
      header_1: "Item",
      header_2: "Item",
      header_3: "Item",
      header_4: "Item"
    },
    {
      key: "4",
      header_1: "Item",
      header_2: "Item",
      header_3: "Item",
      header_4: "Item"
    },
  ];
  return (
    <Table
      lined
      headerLined
      shadow={false}
      css={{ backgroundColor: 'white'}}
    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column key={column.key}> {column.label} </Table.Column>
        )}
      </Table.Header>

      <Table.Body items={rows}>
        {(item) => (
          <Table.Row key={item.key}>
            {(columnKey) => <Table.Cell> {item[columnKey]} </Table.Cell>}
          </Table.Row>
        )}
      </Table.Body>
      
    </Table>
  );

}