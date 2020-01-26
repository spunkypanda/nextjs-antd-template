import Head from 'next/head'
import Link from 'next/link'
import { Layout, Row, Col } from 'antd';

import HeaderComponent from '../components/Header';

const { Header, Content, Footer } = Layout;



const Index = () => {
  return (
    <Layout className="layout">

			<Head>
        <title>Flashthrough</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

			<HeaderComponent />

      <Content>
        <div style={{ background: '#fff', paddingTop: '120px', minHeight: 720 }}>
          <Row>
            <Col span={16} offset={4}>
							<center>
								<h1>Flashthrough</h1>

                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                </p>

                <Link href="signup"><a>Set up a Flashthrough account</a></Link>

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

export default Index;
