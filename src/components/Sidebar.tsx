import { useState } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import {
    Analytics,
    BusinessCenter,
    CleanHands,
    Euro,
    Groups,
    Handshake,
    HouseSiding,
    HowToReg,
    Layers,
    LibraryBooks,
    ManageAccounts,
    PeopleAlt,
    RateReview,
    Receipt,
    ReceiptLong,
    Savings,
    SupportAgent,
    Tune,
  } from "@mui/icons-material";
  
  
  export const Custumers = [
    {
      icon: PeopleAlt,
      iconName: "Users",
    },
  
    {
      icon: Groups,
      iconName: "Gaurantors",
    },
  
    {
      icon: Euro,
      iconName: "Loans",
    },
  
    {
      icon: Handshake,
      iconName: "Decision Models",
    },
  
    {
      icon: Savings,
      iconName: "Savings",
    },
  
    {
      icon: CleanHands,
      iconName: "Loan Request",
    },
  
    {
      icon: HowToReg,
      iconName: "Whitelist",
    },
  ];
  
  export const Businesses = [
    {
      id: 1,
      icon: BusinessCenter,
      iconName: "Organisation",
    },
  
    {
      id: 2,
  
      icon: CleanHands,
      iconName: "Loan Product",
    },
  
    {
      id: 3,
      icon: HouseSiding,
      iconName: "Savings Product",
    },
  
    {
      icon: Handshake,
      iconName: "Decision Models",
    },
  
    {
      icon: Layers,
      iconName: "Fees and Charges",
    },
  
    {
      icon: Receipt,
      iconName: "Transaction",
    },
  
    {
      icon: SupportAgent,
      iconName: "Services",
    },
  
    {
      icon: ManageAccounts,
      iconName: "Service Account",
    },
  
    {
      icon: ReceiptLong,
      iconName: "Settlement",
    },
  
    {
      icon: Analytics,
      iconName: "Reports",
    },
  ];
  
  export const Settings = [
    {
      icon: BusinessCenter,
      iconName: "Preferences",
    },
  
    {
      icon: Tune,
      iconName: "Loan Product",
    },
  
    {
      icon: HouseSiding,
      iconName: "Fees and Pricing",
    },
  
    {
      icon: LibraryBooks,
      iconName: "Audit Logs",
    },
  
    {
      icon: RateReview,
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
                  <item.icon /> {item.iconName}
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
                  <item.icon fontSize="small" /> {item.iconName}
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
                  <item.icon fontSize="small" /> {item.iconName}
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
