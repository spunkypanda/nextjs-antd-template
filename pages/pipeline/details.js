import Head from 'next/head'
import Link from "next/link";
import { Layout, Row, Col } from 'antd';

import HeaderComponent from '../../components/Header';

const { Content, Footer } = Layout;

const PipelineDetails = () => {
  return (
    <Layout className="layout">

			<Head>
        <title>About Us</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <HeaderComponent />

      <Content>
        <div style={{ background: '#fff', paddingTop: '120px', minHeight: 720 }}>
          <Row>
            <Col span={16} offset={4}>
							<center>
                <h1>Details page</h1>
                <Link href="/pipeline/list"><a>View all pipelines</a></Link>
							</center>
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

export default PipelineDetails;
