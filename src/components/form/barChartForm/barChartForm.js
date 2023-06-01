import React from 'react'
import { Form, Radio, Button, Input } from 'antd'
import { useState } from 'react';

export default function BarChartForm() {

  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState('Bar Chart');
  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  const barChart= {
    title: '',
    xAxisTitle: '',
    xAxisValue: [],
    yAxisTitle: '',
    yAxisValue: [],
    
  }

  // Bar charts data
  // x axis
  const [xaxis, setxAxis] = useState([])
  // y axis
  const [yaxis, setyAxis] = useState([])


  return (
    <div >
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          requiredMarkValue: requiredMark,
        }}
        onValuesChange={onRequiredTypeChange}
        requiredMark={requiredMark}
      >
        {/* <Form.Item label="Choose Chart types to input data" style={{fontSize: "large",fontWeight: 700, color: "#6439ff"}} name="requiredMarkValue">
          <Radio.Group>
            {chartNames.map((chartName) =>
              <Radio.Button key={chartName.id} value={chartName.name} style={{
                fontWeight: 600,
                color: "#6439ff"
                }}>
                  {chartName.name}
                  </Radio.Button>
            )}
            <Radio.Button value="optional">Optional</Radio.Button>
            <Radio.Button value>Required</Radio.Button>
            <Radio.Button value={false}>Hidden</Radio.Button>
          </Radio.Group>
        </Form.Item> */}

        <Form.Item label="Bar Chart Title"
        //  tooltip="This is a required field"
        >
          <Input placeholder="input title" />
        </Form.Item>

        {/* X-Axis Title */}
        <Form.Item
          label="X-Axis Title"
        // tooltip={{
        //   title: 'Tooltip with customize icon',
        //   icon: <InfoCircleOutlined />,
        // }}
        >
          <Input placeholder="input X-Axis Title" />
        </Form.Item>

        {/* X-Axis Value List */}
        <Form.Item
          label="X-Axis Value List"
        >
          <Input placeholder="input X-Axis values" />
        </Form.Item>

        {/* Y-Axis Title */}
        <Form.Item
          label="Y-Axis Title"
        >
          <Input placeholder="input X-Axis Title" />
        </Form.Item>

        {/* Y-Axis Value List */}
        <Form.Item
          label="Y-Axis Value List"
        >
          <Input placeholder="input X-Axis values" />
        </Form.Item>


        <Form.Item>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  )
}
