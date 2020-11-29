import React, { useEffect, useState } from 'react';
import { Button, Table, Modal, Form, Input, Popconfirm } from 'antd';
import useQueryData from '@/hooks/useQueryData';
import { queryListService } from './service';
import { _onCreate } from '@/.umi/plugin-dva/dva';

const Demo = () => {
  const [result, query] = useQueryData(queryListService);
  const [form] = Form.useForm();
  const { list } = result;
  const [ModalVisible, setModalVisible] = useState<boolean>(false);
  const [Modalrecord, setrecord] = useState<{ a: string; b: string; c: string }>();
  const [isUpdata, setIsUpdate] = useState<boolean>(false);
  const opening = (record: any, update: boolean) => {
    setModalVisible(true);
    setrecord(record);
    setIsUpdate(update);
  };
  const deleting = (key:any) => {
    console.log(key);
  };
  // console.log(isUpdata, 'isUpdata>>>>>>>>');
  const handleOk = () => {
    form
      .validateFields()
      .then(
        (values) => {
          console.log(values);
        },
        (error) => {
          // console.log(error, '>>>>error');
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
  const onFieldsChange=(changedFields:any, allFields:any)=>{
    // console.log(changedFields,'changedFields');
    // console.log(allFields,'allFields');
  }
  const onValuesChange=(changedValues:any, allValues:any)=>{
    // console.log(changedValues, allValues);
    
  }
 

  const normFile= e =>{
    console.log(e,'e');
    if(Array.isArray(e)){
      return e
    }
    return e&&e.fileList
  }
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
        <div>
          <Button type="link" onClick={() => opening(record, true)}>
            编辑
          </Button>
          <Popconfirm title="要删?" onConfirm={() => deleting(record.key)}>
            <a>删除</a>
          </Popconfirm>
      </div>
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
      <Button onClick={() => opening(null, false)}>
        新增
      </Button>
      <Table dataSource={list} columns={columns} rowKey="a" />
      <Modal destroyOnClose visible={ModalVisible} onOk={handleOk} onCancel={handleCanle}>
        <Form form={form} initialValues={Modalrecord}
        onFieldsChange={onFieldsChange}
        onValuesChange={onValuesChange}
        >
          <Form.Item
            label="a"
            name="a"
            extra="hello"
            getValueFromEvent={normFile}
            hasFeedback={true}
            help="aaaaaaa"
            validateTrigger={['onChange', 'onBlur']}
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
          <Form.Item label="c" name="c" 
            >
            <Input disabled={isUpdata} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
export default Demo;
