import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { DataEntryTable } from '../components';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Data Entry',
    children: <DataEntryTable />,
  },
  {
    key: '2',
    label: 'Tracker',
    children: 'Content of Tab Pane 2',
  },
];

const DataManager: React.FC = () => {
  return (
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
  )
};

export default DataManager;