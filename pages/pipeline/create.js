import { useState } from 'react';
import Head from 'next/head'
import { Button, Col, Form, Icon, Input, Layout, Modal, Row, Select, Upload } from 'antd';

import HeaderComponent from '../../components/Header';

const { Content, Footer } = Layout;
const { Option } = Select;
const { TextArea } = Input;

const CreatePipelineForm = () => {
	const [isModalOpen, toggleIsModalOpen] = useState(false);
	const openYamlInput = () => { toggleIsModalOpen(true) };
	const acceptYamlInput = () => { toggleIsModalOpen(true) };
	const cancelYamlInput = () => toggleIsModalOpen(false);

	return (
		<div>
			<Form layout="vertical">
				<Form.Item label="Pipeline name" >
					<Input placeholder="Pipeline name" />
				</Form.Item>

				<Form.Item label="Select platform" >
					<Select placeholder="Select platform">
						<Option value="aws">Amazon Web Services</Option>
						<Option value="gcp">Google Cloud Platform</Option>
					</Select>
				</Form.Item>

				<Form.Item label="Select machine" >
					<Select placeholder="Select machine">
					</Select>
				</Form.Item>

				<Form.Item label="Select docker image" >
					<Select placeholder="Select docker image">
					</Select>
				</Form.Item>

				<Form.Item label="API Endpoint name" >
					<Input placeholder="API Endpoint name" />
				</Form.Item>

				<Form.Item label="Port number" >
					<Input placeholder="Port number" />
				</Form.Item>

				<Form.Item label="Python version" >
					<Select placeholder="Python version">
						<Option value="2.7.16">2.7.16</Option>
						<Option value="3.7.3">3.7.3</Option>
					</Select>
				</Form.Item>

				<Form.Item label="Requirements.txt path" >
					<Input placeholder="Requirements.txt path" />
				</Form.Item>

				<Form.Item label="Repository link" >
					<Input placeholder="Repository link" />
				</Form.Item>

				<Form.Item label="Commit Id" >
					<Input placeholder="Commit Id" />
				</Form.Item>

				<Form.Item>
					<Upload>
						<Button><Icon type="upload" /> Upload YAML File</Button>
					</Upload>
				</Form.Item>

				<Form.Item>
					<Button type="default" onClick={() => openYamlInput()}>
						Input Configuration (YAML)
					</Button>
				</Form.Item>

        <Modal
          title="Input Configuration (YAML)"
          style={{ top: 20 }}
          visible={isModalOpen}
          onOk={() => acceptYamlInput()}
          onCancel={() => cancelYamlInput()}
        >
					<TextArea rows={20} />
        </Modal>

				<Form.Item>
					<Button type="primary">Deploy</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

const CreatePipeline = () => {
  return (
		<Layout className="layout">

			<Head>
        <title>Create Pipeline</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

			<HeaderComponent />

			<Content>
				<div style={{ background: '#fff', padding: 24, minHeight: 720 }}>
					<Row>
						<Col span={16} offset={4}>
							<CreatePipelineForm />
						</Col>
					</Row>
				</div>
			</Content>

		<Footer>
			<Row>
				<Col span={16} offset={4}>
					<center><h4>Footer</h4></center>
				</Col>
			</Row>
		</Footer>
  </Layout>
  );
};

export default CreatePipeline;
