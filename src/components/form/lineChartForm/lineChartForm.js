import { Form, Radio, Button, Input, Select, Space } from 'antd'
import { PlusSquareOutlined, MinusCircleOutlined } from '@ant-design/icons';
import React, { useContext, useState } from 'react';
import { addDocument } from '~/firebase/service';


export default function LineChartForm() {

  const handleSubmitData = () => {
    addDocument('LineChart', { ...form.getFieldValue() })
    form.resetFields()
  }

  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };


  return (
    <div >
      <Form
        form={form}
        name="LineChartForm"
        onFinish={onFinish}
        style={{
          maxWidth: 700,
        }}
        autoComplete="off"
      >

        <Form.Item
          name="Title"
          label="Line Chart Title"
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
          name="TitleOfx"
          label="x-Axis Title"
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
          name="TitleOfy"
          label="y-Axis Title"
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
          label="Data labels"
          rules={[
            {
              required: true,
              message: 'Missing Name',
            },
          ]}
        >
          <Input placeholder='Enter array label (ex: Jan Feb Mar Apr...)'></Input>
        </Form.Item>

        <Form.List name="Data">
          {(fields, { add, remove }) => (
            <>
              {fields.map((field) => (
                <Space key={field.key} align="baseline">
                  <Form.Item
                    {...field}
                    label="Line Label"
                    name={[field.name, 'lineLabel']}
                    shouldUpdate={(prevValues, curValues) =>
                      prevValues.yAxis !== curValues.yAxis
                    }
                    rules={[
                      {
                        required: true,
                        message: 'Missing data',
                      },
                    ]}
                  >
                    <Input placeholder='Enter Line Label' style={{ width: 150 }} />
                  </Form.Item>

                  <Form.Item
                    {...field}
                    label="Line data values"
                    name={[field.name, 'lineValues']}
                    shouldUpdate={(prevValues, curValues) =>
                      prevValues.yAxis !== curValues.yAxis
                    }
                    rules={[
                      {
                        required: true,
                        message: 'Missing data',
                      },
                    ]}
                  >
                    <Input placeholder='Enter array value' style={{ width: 260 }} />
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
