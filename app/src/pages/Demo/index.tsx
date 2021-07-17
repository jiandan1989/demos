import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { Button, Table, Modal, Popconfirm, Card, message, Space } from 'antd';
import type { FormInstance } from 'antd/lib/form';
import type { ColumnsType } from 'antd/lib/table';

import { useDetail, useQueryResult, useUpdateResult } from '@/hooks';

import { addDemoService, delDemoService, queryListService, updateDemoService } from './service';
import DemoForm from './DemoForm';

const Demo = () => {
  const formRef = useRef<FormInstance | null>(null);
  const [modalState, , { show, hide }] = useDetail<DemoInfo>();
  const [result, query, loading] = useQueryResult<BasicTableResult<DemoInfo>>(queryListService);

  const [addDemo] = useUpdateResult(addDemoService, () => {
    message.success('新增成功!');
  });

  const [updateDemo] = useUpdateResult(updateDemoService, () => {
    message.success('更新成功');
  });

  const [delDemo] = useUpdateResult(delDemoService, () => {
    message.success('删除成功!');
  });

  const { visible, isUpdate } = modalState;
  const { list } = result;

  const columns: ColumnsType<DemoInfo> = useMemo(
    () => [
      {
        dataIndex: 'id',
        key: 'id',
        title: 'ID',
        width: 200,
        fixed: 'left',
      },
      {
        dataIndex: 'userName',
        key: 'userName',
        title: '用户名',
      },
      {
        dataIndex: 'email',
        key: 'email',
        title: '邮箱',
      },
      {
        dataIndex: 'address',
        key: 'address',
        title: '地址',
      },
      {
        dataIndex: 'actions',
        key: 'actions',
        title: '编辑',
        fixed: 'right',
        width: 140,
        align: 'center',
        render: (_text, record) => (
          <Space size={3}>
            <Button
              type="link"
              onClick={() => {
                show(record, 'update');
              }}
            >
              编辑
            </Button>
            <Popconfirm
              title="要删?"
              onConfirm={() => {
                delDemo({ id: record.id });
              }}
            >
              <Button type="link">删除</Button>
            </Popconfirm>
          </Space>
        ),
      },
    ],
    [show, delDemo],
  );

  useEffect(() => {
    query();
  }, []);

  const onOk = useCallback(async () => {
    if (formRef.current) {
      const values = await formRef.current.validateFields();
      const fn = isUpdate ? updateDemo : addDemo;
      fn(values);
    }
  }, [formRef, isUpdate, addDemo, updateDemo]);

  return (
    <Card
      title="测试示例"
      extra={
        <Button
          onClick={() => {
            show();
          }}
        >
          新增
        </Button>
      }
    >
      <Table
        loading={loading}
        dataSource={list}
        columns={columns}
        rowKey="id"
        scroll={{ x: 'max-content' }}
      />
      <Modal destroyOnClose visible={visible} onOk={onOk} onCancel={hide}>
        <DemoForm ref={formRef} isUpdate={isUpdate} data={modalState.data} />
      </Modal>
    </Card>
  );
};
export default Demo;
