import { useRouteError } from "react-router-dom";
import { Empty } from 'antd';

export default function ErrorPage() {
  // const error = useRouteError();
  // console.error(error);

  return (
    <Empty description="404 页面找不到了" />
  );
}
