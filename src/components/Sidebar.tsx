import { useState } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";

import Badge from "../Icons/badge.svg";
import Chart from "../Icons/chart.svg";
import Coins from "../Icons/coins.svg";
import Handshake from "../Icons/handshake.svg";
import Galaxy from "../Icons/galaxy.svg";
import Product from "../Icons/product.svg";
import Sack from "../Icons/sack.svg";
import Saving from "../Icons/saving.svg";
import Scroll from "../Icons/scroll.svg";
import Tire from "../Icons/tire.svg";
import Transaction from "../Icons/trans.svg";
import UserFriends from "../Icons/user-friends.svg";
import Users from "../Icons/users.svg";
import Brief from "../Icons/brief.svg";
import Clipboard from "../Icons/clipboard.svg";
import Slider from "../Icons/sliders.svg";
import UserAcct from "../Icons/user-cog.svg";
import UserCheck from "../Icons/user-check.svg";
import Hand from "../Icons/hand.svg";
import UserTimes from "../Icons/user-times.svg";

const Custumers = [
  {
    icon: UserFriends,
    iconName: "Users",
  },

  {
    icon: Users,
    iconName: "Gaurantors",
  },

  {
    icon: Sack,
    iconName: "Loans",
  },

  {
    icon: Handshake,
    iconName: "Decision Models",
  },

  {
    icon: Saving,
    iconName: "Savings",
  },

  {
    icon: Hand,
    iconName: "Loan Request",
  },

  {
    icon: UserCheck,
    iconName: "Whitelist",
  },

  {
    icon: UserTimes,
    iconName: "Karma",
  },
];

const Businesses = [
  {
    id: 1,
    icon: Brief,
    iconName: "Organisation",
  },

  {
    id: 2,

    icon: Sack,
    iconName: "Loan Product",
  },

  {
    id: 3,
    icon: Product,
    iconName: "Savings Product",
  },

  {
    icon: Handshake,
    iconName: "Decision Models",
  },

  {
    icon: Coins,
    iconName: "Fees and Charges",
  },

  {
    icon: Transaction,
    iconName: "Transaction",
  },

  {
    icon: Galaxy,
    iconName: "Services",
  },

  {
    icon: UserAcct,
    iconName: "Service Account",
  },

  {
    icon: Scroll,
    iconName: "Settlement",
  },

  {
    icon: Chart,
    iconName: "Reports",
  },
];

const Settings = [
  {
    icon: Slider,
    iconName: "Preferences",
  },

  {
    icon: Product,
    iconName: "Loan Product",
  },

  {
    icon: Badge,
    iconName: "Fees and Pricing",
  },

  {
    icon: Clipboard,
    iconName: "Audit Logs",
  },

  {
    icon: Tire,
    iconName: "System Message",
  },
];

const SideBarWrapper = styled(Box)`
  width: 283px;
  min-height: 100vh;
  background: #ffffff;
`;

const SideBarContent = styled(Box)``;

const MenuItems = styled(Box)`
  margin-top: 40px;
`;

const Menu = styled("ul")`
  a {
    display: flex;
    align-items: center;
    font-family: "Work Sans";
    font-weight: 400;
    font-size: 16px;
    width: 283px;
    margin-bottom: 30px;
    padding-left: 30px;
    color: #213f7d;
  }

  img {
    width: auto;
    margin-right: 10px;
  }

  .active {
    height: 40px;

    background-color: #39cdcd1f;
    border-left: 3px solid #39cdcc;
  }

  .MuiSvgIcon-root {
    margin-right: 10px;
  }
`;

const MenuList = styled("li")`
  display: flex;
  align-items: center;
  padding-bottom: 30px;
  font-family: "Work Sans";
  font-weight: 500;
  font-size: 16px;
  color: #545f7d;

  .MuiSvgIcon-root {
    margin-right: 10px;
  }
`;

const SideBar = () => {
  const [activeClass, setActiveClass] = useState<string>();

  return (
    <SideBarWrapper>
      <SideBarContent>
        <MenuList sx={{ paddingTop: "40px", paddingLeft: "30px" }}>
          <BusinessCenterIcon /> Switch Organization
          <ArrowDropDownIcon />
        </MenuList>
        <MenuList sx={{ paddingTop: "50px", paddingLeft: "30px" }}>
          <HomeIcon /> Dashboard
        </MenuList>

        <MenuItems>
          <MenuList sx={{ paddingLeft: "30px", paddingBottom: "10px" }}>
            CUSTUMERS
          </MenuList>
          <Menu>
            {Custumers.map((item, index) => {
              return (
                <a
                  key={item.iconName}
                  className={activeClass === item.iconName ? "active" : ""}
                  onClick={() => setActiveClass(item.iconName)}
                  href="#"
                >
                  <img
                    src={item.icon as string}
                    alt="icon"
                    height="16px"
                    width="16px"
                  />
                  {item.iconName}
                </a>
              );
            })}
          </Menu>
        </MenuItems>

        <MenuItems>
          <MenuList sx={{ paddingLeft: "30px", paddingBottom: "10px" }}>
            BUSINESSES
          </MenuList>
          <Menu>
            {Businesses.map((item, index) => {
              return (
                <a
                  key={item.iconName}
                  className={activeClass === item.iconName ? "active" : ""}
                  onClick={() => setActiveClass(item.iconName)}
                  href="#"
                >
                  <img
                    src={item.icon as string}
                    alt="icon"
                    height="16px"
                    width="16px"
                  />
                  {item.iconName}
                </a>
              );
            })}
          </Menu>
        </MenuItems>

        <MenuItems>
          <MenuList sx={{ paddingLeft: "30px", paddingBottom: "10px" }}>
            SETTINGS
          </MenuList>
          <Menu>
            {Settings.map((item, index) => {
              return (
                <a
                  key={item.iconName}
                  className={activeClass === item.iconName ? "active" : ""}
                  onClick={() => setActiveClass(item.iconName)}
                  href="#"
                >
                  <img
                    src={item.icon as string}
                    alt="icon"
                    height="16px"
                    width="16px"
                  />
                  {item.iconName}
                </a>
              );
            })}
          </Menu>
        </MenuItems>

        <MenuList
          sx={{ paddingLeft: "30px", paddingBottom: "20px", cursor: "pointer" }}
        >
          <LogoutIcon /> Logout
        </MenuList>
      </SideBarContent>
    </SideBarWrapper>
  );
};

export default SideBar;
