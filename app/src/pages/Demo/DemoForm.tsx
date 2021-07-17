import React from 'react';
import { Form, Input } from 'antd';
import type { FormInstance } from 'antd/lib/form';

interface IProps {
  isUpdate?: boolean;
  data?: DemoInfo;
}

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const DemoForm = React.forwardRef<FormInstance, IProps>((props, ref) => {
  const { data } = props;
  const [form] = Form.useForm();

  return (
    <Form form={form} ref={ref} {...layout}>
      <Form.Item
        label="用户名"
        name="userName"
        initialValue={data?.userName}
        rules={[
          {
            required: true,
            message: '请输入用户名',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="地址" name="address" initialValue={data?.address}>
        <Input />
      </Form.Item>
      <Form.Item label="邮箱" name="email" initialValue={data?.email}>
        <Input />
      </Form.Item>
    </Form>
  );
});

export default DemoForm;
