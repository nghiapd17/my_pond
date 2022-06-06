import { Link, useNavigate } from "react-router-dom";

import { Row, Col, Button, Dropdown, Space, Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import "./header.css";
import { DownOutlined } from "@ant-design/icons";

const Headers = () => {
  let history = useNavigate();
  const goSignUp = () => {
    history("/signup");
  };
  const goSignIn = () => {
    history("/signin");
  };

  const menu = (
    <Menu
      items={[
        {
          label: <a href="https://www.antgroup.com">1st menu item</a>,
          key: "0",
        },
        {
          label: <a href="https://www.aliyun.com">2nd menu item</a>,
          key: "1",
        },
        {
          type: "divider",
        },
        {
          label: "3rd menu item",
          key: "3",
        },
      ]}
    />
  );
  return (
    <Header className="root">
      <Row>
        <Col span={6}>
          <img
            height="50px"
            src="https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/286027919_1166241084219156_1862926024443497496_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=ATOojfEj_nIAX-yq-w-&tn=usXoSCcmfBCXDfIW&_nc_ht=scontent-hkg4-1.xx&oh=00_AT-BVTpILcSP68BhdeDVTXkJjrZJDSbVkem0AKm---yVyw&oe=62A2C89E"
          />
        </Col>
        <Col className="navbar" span={12}>
          <Link to="/">Home</Link>
          <Link to="/list">Fishing lake list</Link>
          <Link to="/contact">Contact us</Link>
        </Col>
        <Col className="lgsu" span={6}>
          <Button onClick={() => goSignIn()} type="primary">
            Sign in
          </Button>
          <Button onClick={() => goSignUp()} type="primary">
            Sign up
          </Button>
        </Col>

        <Dropdown overlay={menu} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Click me
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </Row>
    </Header>
  );
};

export default Headers;
