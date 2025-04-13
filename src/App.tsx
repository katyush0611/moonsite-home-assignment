import { useState, useEffect } from "react";
import classes from "./App.module.scss";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SaveOutlined,
  HomeOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme, Typography } from "antd";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import AppRouting from "./routes";
import { useAppDispatch, useAppSelector } from "./utils/hooks";
import { fetchGarments } from "./store/garments/garments.actions";

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer, borderRadiusLG, colorPrimary },
  } = theme.useToken();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const appState = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(fetchGarments());
  }, []);

  return (
    <Layout className={classes.Layout}>
      <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          defaultSelectedKeys={["/"]}
          items={[
            {
              key: "/",
              icon: <HomeOutlined />,
              label: "Home Page",
              onClick: () => navigate("/"),
            },
            {
              key: "/outfit-builder",
              icon: <DatabaseOutlined />,
              label: "Outfit Builder",
              onClick: () => navigate("/outfit-builder"),
            },
            {
              key: "/saved",
              icon: <SaveOutlined />,
              label: "Saved Outfits",
              onClick: () => navigate("/saved"),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className={classes.Header}
          style={{
            background: colorBgContainer,
          }}
        >
          <Button
            type="primary"
            className={classes.MenuButton}
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          />

          <Typography.Title
            level={1}
            style={{ margin: "0 5px", color: colorPrimary }}
          >
            Moonsite Home Assignment
          </Typography.Title>
        </Header>
        <Content
          className={classes.Content}
          style={{
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
