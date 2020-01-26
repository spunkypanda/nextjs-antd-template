import Link from "next/link";
import Head from 'next/head'
import { Layout, Menu, Row, Col } from 'antd';

import HeaderComponent from '../components/Header';

const { Content, Footer } = Layout;

const Index = () => {
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
								<h1>About</h1>

                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                </p>

                <p>
                  Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </p>

                <p>
                  The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                </p>

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
