import { Layout, Divider, Col, Row } from "antd";
import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "../components";
const { Content } = Layout;

const Dashboard: React.FC = () => {
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sidebar />
            <Layout>
                <Row>
                    <Col span={23} style={{ margin: "0 auto" }}>
                        <Header />

                        <Divider />
                        <Content>
                            <Outlet />
                        </Content>
                    </Col>
                </Row>
            </Layout>
        </Layout>
    );
};

export default Dashboard;
