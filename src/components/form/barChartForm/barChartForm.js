import { Form, Radio, Button, Input, Select, Space } from 'antd'
import { PlusSquareOutlined, MinusCircleOutlined } from '@ant-design/icons';
import React, { useContext, useState } from 'react';
import { addDocument } from '~/firebase/service';
export default function BarChartForm() {

  const handleSubmitData = () => {
    addDocument('BarChart', { ...form.getFieldValue() })
    form.resetFields()
  }

  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };
  const handleChange = () => {
    form.setFieldsValue({
      sights: [],
    });
  };

  return (
    <div >
      <Form
        form={form}
        name="BarChartForm"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
        }}
        autoComplete="off"
      >
        <Form.Item
          name="BarChartTitle"
          label="BarChart Title"
          rules={[
            {
              required: true,
              message: 'Missing Title',
            },
          ]}
        >
          <Input placeholder='Enter Title'></Input>
        </Form.Item>

        <Form.Item
          name="xTitle"
          label="xAxis Name"
          rules={[
            {
              required: true,
              message: 'Missing Name',
            },
          ]}
        >
          <Input placeholder='Enter name'></Input>
        </Form.Item>

        <Form.Item
          name="yTitle"
          label="yAxis Name"
          rules={[
            {
              required: true,
              message: 'Missing Name',
            },
          ]}
        >
          <Input placeholder='Enter name'></Input>
        </Form.Item>

        <Form.List name="Data">
          {(fields, { add, remove }) => (
            <>
              {fields.map((field) => (
                <Space key={field.key} align="baseline">
                  <Form.Item
                    {...field}
                    label="x Axis"
                    name={[field.name, 'x']}
                    shouldUpdate={(prevValues, curValues) =>
                      prevValues.yAxis !== curValues.yAxis
                    }
                    rules={[
                      {
                        required: true,
                        message: 'Missing price',
                      },
                    ]}
                  >
                    <Input placeholder='Enter value' style={{ width: 225 }} />
                  </Form.Item>

                  <Form.Item
                    {...field}
                    label="y Axis"
                    name={[field.name, 'y']}
                    shouldUpdate={(prevValues, curValues) =>
                      prevValues.yAxis !== curValues.yAxis
                    }
                    rules={[
                      {
                        required: true,
                        message: 'Missing price',
                      },
                    ]}
                  >
                    <Input placeholder='Enter value' style={{ width: 225 }} />
                  </Form.Item>

                  <MinusCircleOutlined onClick={() => remove(field.name)} />
                </Space>
              ))}

              <Form.Item>
                <Button type="dashed" onClick={() => add()} block icon={<PlusSquareOutlined />}>
                  Add Data
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={handleSubmitData}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div >
  )
}
