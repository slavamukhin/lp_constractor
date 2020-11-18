import React, { FC } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import './contactForm.less'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

interface IValues {
  username: string
  phone: string
}

export const ContactForm: FC = () => {

  return (
    <div className="wrapper">
      {/* <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        action='/'
        method="post"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone"
          name="phone"
          rules={[{ required: true, message: 'Please input your phone!' }]}
        >
          <Input />
        </Form.Item>


        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form> */}
      <form method="post" action="/">
        <input type="text" name="name" />
        <input type="text" name="phone" />
        <button type="submit" value="Submit">Send</button>
      </form>
    </div>
  );
};