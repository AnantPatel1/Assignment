import DocumentTextIcon from "@heroicons/react/24/outline/DocumentTextIcon";
import Squares2X2Icon from "@heroicons/react/24/outline/Squares2X2Icon";

import WalletIcon from "@heroicons/react/24/outline/WalletIcon";

import CalendarDaysIcon from "@heroicons/react/24/outline/CalendarDaysIcon";

import UserIcon from "@heroicons/react/24/outline/UserIcon";
import Cog6ToothIcon from "@heroicons/react/24/outline/Cog6ToothIcon";

import CurrencyDollarIcon from "@heroicons/react/24/outline/CurrencyDollarIcon";

import UsersIcon from "@heroicons/react/24/outline/UsersIcon";

import ListenerIcon from "@heroicons/react/24/outline/IdentificationIcon";
const iconClasses = `h-6 w-6`;
const submenuIconClasses = `h-5 w-5`;

const routes = [
  {
    path: "/app/dashboard",
    icon: <Squares2X2Icon className={iconClasses} />,
    name: "Dashboard",
  },
  {
    path: "/app/mentor",
    icon: <UserIcon className={iconClasses} />,
    name: "1 on 1 mentor",
  },
  {
    path: "/app/interview", // url
    icon: <UsersIcon className={`${iconClasses} inline`} />, // icon component
    name: "Mock Interviews", // name that appear in Sidebar
  },

  {
    path: "/app/test", // url
    icon: <ListenerIcon className={`${iconClasses} inline`} />, // icon component
    name: "Practise Test", // name that appear in Sidebar
  },

  {
    path: "/app/communication", // url
    icon: <DocumentTextIcon className={iconClasses} />, // icon component
    name: "Communication", // name that appear in Sidebar
  },
  {
    path: "/app/report", // url
    icon: <CalendarDaysIcon className={iconClasses} />, // icon component
    name: "Report", // name that appear in Sidebar
  },
  {
    path: "", //no url needed as this has submenu
    icon: <Cog6ToothIcon className={`${iconClasses} inline`} />, // icon component
    name: "Settings", // name that appear in Sidebar
    submenu: [
      {
        path: "/app/settings-profile", //url
        icon: <UserIcon className={submenuIconClasses} />, // icon component
        name: "Profile", // name that appear in Sidebar
      },
      {
        path: "/app/settings-billing",
        icon: <WalletIcon className={submenuIconClasses} />,
        name: "Billing",
      },
      {
        path: "/app/settings-team", // url
        icon: <UsersIcon className={submenuIconClasses} />, // icon component
        name: "Team Members", // name that appear in Sidebar
      },
    ],
  },
  {
    path: "", //no url needed as this has submenu
    icon: <CurrencyDollarIcon className={iconClasses} />, // icon component
    name: "Premium", // name that appear in Sidebar
  },
];

export default routes;
