import { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  FileSearchOutlined,
  HistoryOutlined,
} from "@ant-design/icons";
import classes from "./App.module.scss";
import { Button, Layout, Menu, theme, Typography } from "antd";
import { useNavigate } from "react-router";
import AppRouting from "./routes";

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer, borderRadiusLG, colorPrimary, colorPrimaryBg },
  } = theme.useToken();
  let navigate = useNavigate();
  return (
    <Layout style={{ height: "100%" }}>
      <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
        <Menu
          // theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <FileSearchOutlined />,
              label: "Query Builder",
              onClick: () => navigate("/"),
            },
            {
              key: "2",
              icon: <HistoryOutlined />,
              label: "Search History",
              onClick: () => navigate("/history"),
            },
            {
              key: "3",
              icon: <SettingOutlined />,
              label: "Settings",
              onClick: () => navigate("/settings"),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            width: "100%",
            background: colorBgContainer,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            type="primary"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />

          <Typography.Title
            level={1}
            style={{ margin: "0 5px", color: colorPrimary }}
          >
            Moonsite Home Assignment
          </Typography.Title>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <AppRouting />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
