import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  AuditOutlined
} from "@ant-design/icons";
const Message = () =>
  import(/* webpackChunkName: 'Message' */ "../Home/Message/Message.jsx");
const PieChartOut = () =>
  import(
    /* webpackChunkName: 'PieChartOutlined' */ "../Home/PieChartOutlined/PieChartOutlined.jsx"
  );

const TeamOut = () =>
  import(
    /* webpackChunkName: 'TeamOutlined' */ "../Home/TeamOutlined/TeamOutlined.jsx"
  );

const ChinaTeam = () =>
  import(
    /* webpackChunkName: 'ChinaTeam' */ "../Home/TeamOutlined/Team2/ChinaTeam.jsx"
  );

const Team1Index = () =>
  import(
    /* webpackChunkName: 'Team1Index' */ "../Home/TeamOutlined/Team1/Team1Index.jsx"
  );

const JepanTeam = () =>
  import(
    /* webpackChunkName: 'JepanTeam' */ "../Home/TeamOutlined/Team2/JepanTeam.jsx"
  );

const Team2Index = () =>
  import(
    /* webpackChunkName: 'Team2Index' */ "../Home/TeamOutlined/Team1/Team2Index.jsx"
  );
const defaultRoute = [
  {
    path: "/login",
    name: "登录",
    lazy: async () => ({
      Component: (await import("../Home/Login/Login.jsx")).default
    })
  },
  {
    path: "*",
    name: "404",
    lazy: async () => ({
      Component: (await import("../Home/ErrorPage.jsx")).default
    })
  }
];
let route = [
  {
    path: "/",
    name: "布局",
    lazy: async () => ({
      Component: (await import("../Layout/DefaultLayout.jsx")).default
    }),
    children: [
      {
        path: "/disboard",
        name: "首页",
        lazy: async () => ({
          Component: (await import("../Home/Disboard/Disboard.jsx")).default
        }),
        icon: <FileOutlined />,
        handle: { title: "首页" }
      },
      {
        path: "/message",
        name: "消息",
        lazy: async () => ({
          Component: (await import("../Home/Message/Message.jsx")).default
        }),
        icon: <FileOutlined />,
        handle: { title: "消息" }
      },
      {
        path: "/tasks",
        name: "饼图",
        // element: <PieChartOut />,
        lazy: async () => ({
          Component: (
            await import("../Home/PieChartOutlined/PieChartOutlined.jsx")
          ).default
        }),
        icon: <PieChartOutlined />,
        handle: { title: "饼图" }
      },
      {
        path: "/team",
        name: "团队",
        icon: <TeamOutlined />,
        handle: { title: "团队" },
        children: [
          {
            path: "/team/index",
            name: "团队首页",
            // element: <TeamOut />,
            lazy: async () => ({
              Component: (await import("../Home/TeamOutlined/TeamOutlined.jsx"))
                .default
            }),
            icon: <UserOutlined />,
            handle: { title: "团队首页" }
          },
          {
            path: "/team/team1",
            name: "团队1",
            icon: <AuditOutlined />,
            handle: { title: "团队1" },
            children: [
              {
                path: "/team/team1/t1",
                name: "团队1-1",
                // element: <Team1Index />
                lazy: async () => ({
                  Component: (
                    await import("../Home/TeamOutlined/Team1/Team1Index.jsx")
                  ).default
                }),
                handle: { title: "团队1-1" }
              },
              {
                path: "/team/team1/t2",
                name: "团队1-2",
                // element: <Team2Index />
                lazy: async () => ({
                  Component: (
                    await import("../Home/TeamOutlined/Team1/Team2Index.jsx")
                  ).default
                }),
                handle: { title: "团队1-2" }
              }
            ]
          },
          {
            path: "/team/team2",
            name: "团队2",
            icon: <DesktopOutlined />,
            handle: { title: "团队2" },
            children: [
              {
                path: "/team/team2/jepan",
                name: "团队2-2",
                // element: <JepanTeam />
                lazy: async () => ({
                  Component: (
                    await import("../Home/TeamOutlined/Team2/JepanTeam.jsx")
                  ).default
                }),
                handle: { title: "团队2-2" }
              },
              {
                path: "/team/team2/china",
                name: "团队2-2",
                // element: <ChinaTeam />
                lazy: async () => ({
                  Component: (
                    await import("../Home/TeamOutlined/Team2/ChinaTeam.jsx")
                  ).default
                }),
                handle: { title: "团队2-2" }
              }
            ]
          }
        ]
      }
    ]
  }
];
export { route, defaultRoute };
