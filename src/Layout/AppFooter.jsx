import { Layout } from "antd";
const { Footer } = Layout;

function AppFooter() {
  return (
    <Footer
      style={{
        textAlign: "center"
      }}
    >
      react-admin-template ©{new Date().getFullYear()} Created by 耶耶耶
    </Footer>
  );
}

export default AppFooter;
