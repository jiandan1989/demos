import React, { useEffect, useState } from 'react';
import { Button, Table, Modal, Form, Input } from 'antd';
import useQueryData from '@/hooks/useQueryData';
import { queryListService } from './service';
import { _onCreate } from '@/.umi/plugin-dva/dva';

const Demo = () => {
  const [result, query] = useQueryData(queryListService);
  const [form] = Form.useForm();
  const { list } = result;
  const [ModalVisible, setModalVisible] = useState<boolean>(false);
  const [Modalrecord, setrecord] = useState<{ a: string; b: string; c: string }>();
  // const [Modalkey,SetModalkey]=useState<string>()
  const opening = (record: any) => {
    setModalVisible(true);
    setrecord(record);
  };
  // console.log(Modalrecord);

  // const change=(key:any)=>{
  //   console.log(key);
  //   SetModalkey(key)
  // }

  const handleOk = () => {
    // console.log(form.getFieldsValue());
    form
      .validateFields()
      .then(
        (values) => {
          console.log(values);
        },
        (error) => {
          console.log(error, '>>>>error');
        },
      )
      .catch((error) => {
        console.log(error);
      });
    setModalVisible(false);
  };
  const handleCanle = () => {
    setModalVisible(false);
  };
  const columns = [
    {
      dataIndex: 'a',
      key: 'a',
      title: 'a',
    },
    {
      dataIndex: 'b',
      key: 'b',
      title: 'b',
    },
    {
      dataIndex: 'c',
      key: 'c',
      title: 'c',
    },
    {
      dataIndex: 'actions',
      key: 'actions',
      title: '编辑',
      render: (_: any, record: any) => (
        <Button type="link" onClick={() => opening(record)}>
          编辑
        </Button>
      ),
    },
  ];

  useEffect(() => {
    query();
  }, []);

  useEffect(() => {
    if (ModalVisible) {
      form.resetFields();
    }
  }, [Modalrecord, ModalVisible]);

  return (
    <div>
      <Table dataSource={list} columns={columns} rowKey="a" />
      <Modal destroyOnClose visible={ModalVisible} onOk={handleOk} onCancel={handleCanle}>
        <Form form={form} initialValues={Modalrecord}>
          <Form.Item
            label="a"
            name="a"
            rules={[
              {
                required: true,
                message: '请输入a',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="b" name="b">
            <Input />
          </Form.Item>
          <Form.Item label="c" name="c">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
export default Demo;
