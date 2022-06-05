import { Row, Col, Button } from "antd";
import { Header } from "antd/lib/layout/layout";
import { Link } from "react-router-dom";
import "./header.css";

const Headers = () => {
  return (
    <Header className="root">
      <Row>
        <Col span={6}>Logo</Col>
        <Col className="navbar" span={12}>
          <Link to="/">Home</Link>
          <Link to="/list">Danh sách hồ câu</Link>
          <Link to="/contact">Liên hệ</Link>
        </Col>
        <Col className="lgsu" span={6}>
          <Button type="primary">Primary Button</Button>
          <Button type="primary">Primary Button</Button>
        </Col>
      </Row>
    </Header>
  );
};

export default Headers;
