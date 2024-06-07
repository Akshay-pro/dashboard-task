import { Layout, Menu } from "antd";
import { useState } from "react";
import {
    SignalFilled,
    PieChartOutlined,
    AppstoreOutlined,
    FileZipOutlined,
    SwitcherOutlined,
    SpotifyOutlined,
    SlackOutlined,
    RiseOutlined,
    LogoutOutlined
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import Logo  from "../assets/logo.png"
import { Link } from "react-router-dom";
const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem(<Link to="/dashboard">Dashboard</Link>, "1", <SignalFilled />),
    getItem("Entity Manager", "2", <AppstoreOutlined />),
    getItem(<Link to="/dashboard/data-manager">Data Manager</Link>, "3", <PieChartOutlined /> ),
    getItem("Reporting", "4", <FileZipOutlined /> ),
    getItem("Materiality", "5", <SwitcherOutlined />),
    getItem("Suppliers", "6", <SpotifyOutlined />),
    getItem("Analytics", "7", <RiseOutlined /> ),
    getItem("Targets", "8", <SlackOutlined /> ),
    getItem("Logout", "9", <LogoutOutlined /> ),
];

const Sidebar: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
                className="sidebar-wrapper"
            >
                <div className="sidebar-logo">
                    <img src={Logo} alt="logo" />
                    <h2>BREATHE ESG</h2>
                </div>

      
                <Menu
                    theme="dark"
                    defaultSelectedKeys={["1"]}
                    mode="inline"
                    items={items}
                    className="sidebar-menu"
                />
                
            </Sider>
        </>
    );
};

export default Sidebar;
