import DashboardLayout from "../layout/DashboardLayout.vue";
import Icons from "../pages/Icons.vue";
// GeneralViews
import NotFound from "../pages/NotFoundPage.vue";
import Notifications from "../pages/Notifications.vue";
// Admin pages
import Overview from "../pages/Overview.vue";
import TableList from "../pages/TableList.vue";
import Typography from "../pages/Typography.vue";
import Upgrade from "../pages/Upgrade.vue";
import UserProfile from "../pages/UserProfile.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/admin/overview"
  },
  {
    path: "/admin",
    component: DashboardLayout,
    redirect: "/admin/overview",
    children: [
      {
        path: "overview",
        name: "Overview",
        component: Overview
      },
      {
        path: "user",
        name: "User",
        component: UserProfile
      },
      {
        path: "table-list",
        name: "Table List",
        component: TableList
      },
      {
        path: "typography",
        name: "Typography",
        component: Typography
      },
      {
        path: "icons",
        name: "Icons",
        component: Icons
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications
      },
      {
        path: "upgrade",
        name: "Upgrade to PRO",
        component: Upgrade
      }
    ]
  },
  { path: "*", component: NotFound }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
