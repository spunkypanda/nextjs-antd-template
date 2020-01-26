import Link from 'next/link';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const HeaderComponent = () => (
  <Header>
    <Menu mode="horizontal">
      <Menu.Item key="home">
        <Link href="/"><a>Home</a></Link>
      </Menu.Item>

      <Menu.Item key="create">
        <Link href="/pipeline/create"><a>Create</a></Link>
      </Menu.Item>
      <Menu.Item key="list">
        <Link href="/pipeline/list"><a>List</a></Link>
      </Menu.Item>

      <Menu.Item key="about">
        <Link href="/about"><a>About</a></Link>
      </Menu.Item>

      <Menu.Item key="signin">
        <Link href="/signin"><a>Sign In</a></Link>
      </Menu.Item>
    </Menu>
  </Header>
);

export default HeaderComponent;
