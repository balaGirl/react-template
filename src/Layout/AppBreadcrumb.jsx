import { Breadcrumb } from "antd";
import { useMatches } from "react-router-dom";

function Breadcrumbs(matches) {
  return matches
    .filter((match) => Boolean(match.handle?.title))
    .map((match) => match.handle);
}
function AppBreadcrumb() {
  const matches = useMatches();
  const items = Breadcrumbs(matches);
  return (
    <Breadcrumb
      style={{
        padding: "16px 0"
      }}
      items={items}
    />
  );
}
export default AppBreadcrumb;
