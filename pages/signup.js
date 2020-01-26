import { useEffect, useState } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import { Button, Checkbox, Col, Layout, Form, Input, Row, Spin } from 'antd';

import HeaderComponent from '../components/Header';

const { Content, Footer } = Layout;

const SignupForm = () => {
  const [loading, toggleLoading] = useState(false);
  const [loginInfo, setLoginInfo] = useState({});
  const [signupButtonVisibility, toggleSignupButtonVisibility] = useState(false);

  const { name, company_name, email, password, read_agreement } = loginInfo;

  const handleCheckBox = (event) => {
    const { checked, name } = event.target;
    const nextLoginInfo = { ...loginInfo, [name]: checked }
    setLoginInfo(nextLoginInfo);
  };

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
    if (name && company_name && email && password && read_agreement) {
      toggleSignupButtonVisibility(true);
    } else {
      toggleSignupButtonVisibility(false);
    }
  }, [name, company_name, email, password, read_agreement]);

	return (
		<div>
      <Spin spinning={loading}>
        <Form layout="vertical">
          <Form.Item>
            <Input placeholder="Name" name="name" onChange={handleInput} />
          </Form.Item>

          <Form.Item>
            <Input placeholder="Compnay" name="company_name" onChange={handleInput} />
          </Form.Item>

          <Form.Item>
            <Input placeholder="Email" name="email" onChange={handleInput} />
          </Form.Item>

          <Form.Item>
            <Input.Password placeholder="Password" name="password" onChange={handleInput} />
          </Form.Item>

          <Form.Item>
            <Checkbox name="read_agreement" onChange={handleCheckBox}>
              &nbsp;&nbsp;I have read the <a href="">agreement</a>
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <div style={{ textAlign: 'right'}}>
              <Button type="primary" onClick={submitLoginInfo} disabled={!signupButtonVisibility}>
                Let's go
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
        <title>Sign Up</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <HeaderComponent />

      <Content>
        <div style={{ background: '#fff', paddingTop: '100px', minHeight: 640 }}>
          <Row>
            <Col span={6} offset={9}>
							<center>
								<h1>Sign Up</h1>
                <SignupForm />
                <Link href="/signin"><a>Already a user? Log in</a></Link>
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
