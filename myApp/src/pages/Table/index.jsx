import React from 'react';
import { Table } from 'antd';
import { connect } from 'dva';

class TableDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'table/queryTableData',
      payload: {
        keyword: '关键词'
      }
    });
  }

  render() {
    const columns = [
      {
        dataIndex: 'a',
        key: 'a',
        title: 'A',
      },
      {
        dataIndex: 'b',
        key: 'b',
        title: 'B',
      },
    ];
    return (
      <Table
        rowKey="id"
        loading={this.props.loading}
        columns={columns}
        dataSource={this.props.list}
      />
    );
  }
}

function mapStateToProps({ table, loading }) {
  return { list: table.list, loading: loading.effects['table/queryTableData'] };
}

export default connect(mapStateToProps)(TableDemo);
