import { Outlet } from "react-router-dom";

import { Layout, theme } from "antd";
const { Content } = Layout;
import { AppAside, AppHeader, AppFooter, AppBreadcrumb } from "./index";

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();

  return (
    <Layout
      style={{
        width: "100%",
        height: "100%"
      }}
    >
      <AppAside />
      <Layout>
        <AppHeader />
        <Content
          style={{
            margin: "0 16px"
          }}
        >
          <AppBreadcrumb />
          <div
            style={{
              padding: 24,
              height: "100%",
              boxSizing: "border-box",
              background: colorBgContainer,
              borderRadius: borderRadiusLG
            }}
          >
            <Outlet />
          </div>
        </Content>
        <AppFooter />
      </Layout>
    </Layout>
  );
};
export default App;
