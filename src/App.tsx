import { useState, useEffect } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SaveOutlined,
  HomeOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme, Typography } from "antd";
import { useNavigate } from "react-router";
import AppRouting from "./routes";
import { useAppDispatch, useAppSelector } from "./utils/hooks";
import type { AppDispatch } from "./store/store";
import { fetchGarments } from "./store/garments/garments.actions";

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer, borderRadiusLG, colorPrimary },
  } = theme.useToken();
  let navigate = useNavigate();

  const dispatch = useAppDispatch<AppDispatch>();
  const garmentsState = useAppSelector((state) => state.garmentsStore);

  useEffect(() => {
    dispatch(fetchGarments());
  }, []);

  return (
    <Layout style={{ height: "100%" }}>
      <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <HomeOutlined />,
              label: "Home Page",
              onClick: () => navigate("/"),
            },
            {
              key: "2",
              icon: <DatabaseOutlined />,
              label: "Outfit Builder",
              onClick: () => navigate("/outfit-builder"),
            },
            {
              key: "3",
              icon: <SaveOutlined />,
              label: "Saved Outfits",
              onClick: () => navigate("/saved"),
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
            overflow: "hidden",
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
