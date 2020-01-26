import { useState } from 'react';
import { Badge, Button, Col, Input, Row, Table } from 'antd';

import DeleteButton from './DeleteButton';
import Link from 'next/link';

const { Search } = Input;

const StatusMap = {
  running: {
    status: 'success',
    text: 'OK'
  },
  idle: {
    status: 'default',
    text: 'Idle'
  },
  processing: {
    status: 'processing',
    text: 'Processing'
  },
  stopped: {
    status: 'error',
    text: 'Stopped'
  },
  warning: {
    status: 'warning',
    text: 'Warning'
  }
};

const getStatusBadge = (statusCode = 'running') => {
  const statusObject = StatusMap[statusCode];
  return (<Badge status={statusObject.status} text={statusObject.text} />);
};

const columns = [
  {
    title: 'Pipeline',
    dataIndex: 'pipeline_name',
    key: 'pipeline_name',
    render: (value, record) => {
      return (<Link href="/pipeline/details"><a>{value}</a></Link>);
    },
  },
  {
    title: 'Workstream',
    dataIndex: 'workstream',
    key: 'workstream',
    // render: text => <a>{text}</a>,
  },
  {
    title: 'Scheduler',
    dataIndex: 'scheduler_name',
    key: 'scheduler_name',
  },
  {
    title: 'Schedule',
    dataIndex: 'schedule',
    key: 'schedule',
    render: () => '30 11 * * 5'
  },
  {
    title: 'Region',
    dataIndex: 'region',
    key: 'region',
    // render: text => <a>{text}</a>,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: () => getStatusBadge(),
  },
  {
    title: 'Actions',
    dataIndex: '',
    key: 'x',
    render: () => <DeleteButton title="Are you sure you want to delete this pipeline?" />
  },
];

const defaultData = [
  {
    key: '1',
    workstream: 'Demand',
    region: 'US East (Ohio)',
    scheduler_name: 32,
    pipeline_name: 'customer_rfm_weekly',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    workstream: 'Demand',
    region: 'US East (N. Virginia)',
    scheduler_name: 42,
    pipeline_name: 'customer_rfm_monthly',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    workstream: 'Revenue',
    region: 'US West (N. California)',
    scheduler_name: 42,
    pipeline_name: 'weekly_revenue',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '4',
    workstream: 'Revenue',
    region: 'US West (Oregon)',
    scheduler_name: 42,
    pipeline_name: 'monthly_revenue',
    address: 'London No. 1 Lake Park',
  },
];

// Search by pipeline name
// Filter by Region
// Filter by Workstream 

const PipelineList = ({ data = defaultData }) => {
  const [filteredInfo, setFilteredInfo] = useState();
  // const [sortedInfo, setSortedInfo] = useState();

  const handleChange = (pagination, filters, sorter) => {
    console.log('Parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
  };

  const clearFilters = () => {
    setFilteredInfo(null);
  };

  const clearAll = () => {
    setFilteredInfo(null);
  };

  return (
    <div>
      <div className="table-operations" style={{ marginBottom: '20px' }}>
        <Row>
          <Col span={20}>
            <Search
              placeholder="Search"
              onSearch={value => console.log(value)}
              // style={{ width:  }}
            />
          </Col>
          <Col span={2} offset={2}>
            <Button onClick={clearFilters}>Clear filters</Button>
          </Col>
        </Row>
      </div>
      <Table columns={columns} dataSource={data} onChange={handleChange} />
    </div>
  );
};

export default PipelineList;
