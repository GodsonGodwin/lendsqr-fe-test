import { RemoveRedEyeOutlined } from "@mui/icons-material";
import { Box, Card, CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";

const CardWrapper = styled(Card)`
  width: 180px;
  height: 130px;
  background: #ffffff;
  border: 1px solid rgba(84, 95, 125, 0.04);
  box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.04);
  border-radius: 4px;

  a {
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #545f7d;
  }

  .MuiSvgIcon-root {
    color: #545f7d;
    margin-right: 10px;
  }
`;

const PopoverCard = () => {
  return (
    <CardWrapper data-testid="popover-card">
      <CardContent>
        <Box
          sx={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
        >
          <RemoveRedEyeOutlined />
          <a>View Details</a>
        </Box>

        <Box
          sx={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
        >
          <RemoveRedEyeOutlined />
          <a>Blacklist User</a>
        </Box>

        <Box
          sx={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
        >
          <RemoveRedEyeOutlined />
          <a>Activate User</a>
        </Box>
      </CardContent>
    </CardWrapper>
  );
};

export default PopoverCard;
