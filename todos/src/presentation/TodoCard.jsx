import { Box, Divider, Typography } from "@mui/material";

const TodoCard = ({ bgcolor, title, totalTask, children }) => {
  return (
    <Box
      sx={{
        backgroundColor: `${bgcolor}`,
        borderRadius: "5px",
        padding: "10px",
        margin: "10px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        width: "300px",
        height: "fit-content",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Typography variant="inherit" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography variant="h6">{totalTask}</Typography>
      </Box>

      <Divider sx={{ marginBottom: "10px", marginTop: "10px" }} />
      {children}
    </Box>
  );
};

export default TodoCard;
