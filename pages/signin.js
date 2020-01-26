import { useEffect, useState } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import { Col, Button, Form, Input, Layout, Row, Spin } from 'antd';

import HeaderComponent from '../components/Header';

const { Content, Footer } = Layout;

const SigninForm = () => {
  const [loading, toggleLoading] = useState(false);
  const [loginInfo, setLoginInfo] = useState({});
  const [signinButtonVisibility, toggleSigninButtonVisibility] = useState(false);

  const { email, password } = loginInfo;

  const handleInput = (event) => {
    const { value, name } = event.target;
    const nextLoginInfo = { ...loginInfo, [name]: value }
    setLoginInfo(nextLoginInfo);
  };

  /*
  const clearInput = () => {
    setLoginInfo({});
  };
  */

  const submitLoginInfo = () => {
    toggleLoading(true);
  };

  useEffect(() => {
    if (loading) setTimeout(() => toggleLoading(false), 2000);
  }, [loading]);

  useEffect(() => {
    if (email && password) {
      toggleSigninButtonVisibility(true);
    } else {
      toggleSigninButtonVisibility(false);
    }
  }, [email, password]);

	return (
		<div>
      <Spin spinning={loading}>
        <Form layout="vertical">
          <Form.Item>
            <Input placeholder="Email" name="email" onChange={handleInput} />
          </Form.Item>

          <Form.Item>
            <Input.Password placeholder="Password" name="password" onChange={handleInput} />
          </Form.Item>

          <Form.Item>
            <div style={{ textAlign: 'right'}}>
              <Button type="primary" onClick={submitLoginInfo} disabled={!signinButtonVisibility}>
                Signin
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Spin>
		</div>
	);
};

const Index = () => {
  return (
    <Layout className="layout">

			<Head>
        <title>Sign In</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <HeaderComponent />

      <Content>
        <div style={{ background: '#FFF', paddingTop: '120px', minHeight: 720 }}>
          <Row>
            <Col span={6} offset={9}>
							<center>
								<h1>Sign In</h1>
                <SigninForm />
                <Link href="/signup"><a>Set up a Flashthrough account</a></Link>
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
