import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import UserTable from "users/UserTable";

it("render without crashing", () => {
  render(
    <BrowserRouter>
      <UserTable
        users={[{
          id: "1",
          organization: "labore-dolor-et",
          userName: "Wilburn.Rice",
          email: 'Maverick.Hyatt83@gmail.com',
          createdAt: "Dec 27, 2072 04:44 AM",
          status: "active",
          profile:{
            phoneNumber: "494-278-0946",

          }
        }]}/>
    </BrowserRouter>
  );
  const div = screen.getByTestId("user-table");
  expect(div).toBeInTheDocument();
});