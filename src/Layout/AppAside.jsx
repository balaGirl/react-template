import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { Layout, Menu } from "antd";
const { Sider } = Layout;

import { route } from "../route/router.jsx";

function getItem(label, key, icon, children, meta = {}) {
  return {
    key,
    icon,
    children,
    label,
    meta
  };
}
function filterRoutes(route) {
  return route.map((item) => {
    if (item.children && item.children.length) {
      return getItem(
        item.name,
        item.path,
        item.icon,
        filterRoutes(item.children),
        item.meta
      );
    } else {
      return getItem(item.name, item.path, item.icon, item.children, item.meta);
    }
  });
}

const items = filterRoutes(route[0].children);

function AppAside() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  let location = useLocation();
  const [defaultSelectedKeys] = useState(location.pathname);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        defaultSelectedKeys={defaultSelectedKeys}
        mode="inline"
        items={items}
        onClick={({ key, keyPath, domEvent }) => {
          navigate(key);
        }}
      />
    </Sider>
  );
}

export default AppAside;
