import { Layout, theme, Image, Space, Dropdown,message } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
const { Header } = Layout;
import "./layout.scss";
import { useNavigate } from 'react-router-dom';

function AppHeader() {
  const {
    token: { colorBgContainer }
  } = theme.useToken();
  const navigate = useNavigate();

  const items = [
    {
      key: "change",
      icon: <SmileOutlined />,
      label: "更改密码"
    },
    {
      key: "logout",
      label: "退出登录",
      icon: <SmileOutlined />
    }
  ];
  const onClick = ({ key }) => {
    if (key === "logout") {
      navigate("/login");
    } else {
      message.info('密码更改成功');
    }
  };
  return (
    <Header
      style={{
        padding: 0,
        background: colorBgContainer
      }}
    >
      <div className="user">
        <Space>
          <Image
            style={{
              borderRadius: "5px"
            }}
            width={50}
            height={50}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <Dropdown
            menu={{
              items,
              onClick
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                admin
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </Space>
      </div>
    </Header>
  );
}

export default AppHeader;
