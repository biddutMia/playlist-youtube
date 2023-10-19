import { Typography } from "@mui/material";

const CheckContent = ({ content }) => {
  return (
    <div>
      <Typography
        variant="subtitle1"
        sx={{ fontSize: "25px", textAlign: "center", marginTop: "10px" }}
      >
        {content}
      </Typography>
    </div>
  );
};

export default CheckContent;
