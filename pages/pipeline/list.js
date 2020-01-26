import { Layout, Row, Col } from 'antd';
import { Table, Divider, Tag } from 'antd';


import Head from 'next/head'

import HeaderComponent from '../../components/Header';
// import FooterComponent from '../../components/Footer';
import PipelineList from '../../components/PipelineList';

const { Content, Footer } = Layout;

const ViewPipelines = () => {
  return (
		<Layout className="layout">

			<Head>
        <title>View Pipelines</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

			<HeaderComponent />

			<Content>
				<div style={{ background: '#fff', padding: 24, minHeight: 720 }}>
					<Row>
						<Col span={20} offset={2}>
							<PipelineList />
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

export default ViewPipelines;
