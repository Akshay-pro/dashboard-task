import React from 'react';
import { Divider, Table } from 'antd';
import type { TableColumnsType } from 'antd';

interface DataType {
  key: React.Key;
  assignmentTitle: string;
  type: string;
  noOfSuppliers:number;
  score: number;
  riskClassfication:React.ReactNode;
  status:React.ReactNode;
  
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'ASSIGNMENT TITLE',
    dataIndex: 'assignmentTitle',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'TYPE',
    dataIndex: 'type',
  },
  {
    title: 'NO. OF SUPPLIERS',
    dataIndex: 'noOfSuppliers',
  },
  {
    title: 'SCORE',
    dataIndex: 'score',
  },
  {
    title: 'RISK CLASSIFICATION',
    dataIndex: 'riskClassfication',
  },
  {
    title: 'STATUS',
    dataIndex: 'status',
  },
  {
    title: 'RESULT',
    render: (text: string) => {
      return (
        <a href="#">View</a>
      )
    },
  },
  {
    title: 'ACTIONS',
    render: (text: string) => {
      return (
        <a href="#">Delete</a>
      )
    },
  },
];

const data: DataType[] = [
  {
    key: '1',
    assignmentTitle: 'Assignment 1',
    type: "BRSR",
    noOfSuppliers: 10,
    score:20,
    riskClassfication: <span>Medium</span>,
    status: <span>Pending</span>,
  },
  {
    key: '2',
    assignmentTitle: 'Assignment 2',
    type: "BRSR",
    noOfSuppliers: 10,
    score:20,
    riskClassfication: <span>Low</span>,
    status: <span>Completed</span>,
  },
  {
    key: '3',
    assignmentTitle: 'Assignment 3',
    type: "BRSR",
    noOfSuppliers: 10,
    score:20,
    riskClassfication: <span>High</span>,
    status: <span>Completed</span>,
  },
  
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
 
};

const DataEntryTable: React.FC = () => {

  return (
    <div>
      <Divider />

      <Table
        rowSelection={{
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default DataEntryTable;