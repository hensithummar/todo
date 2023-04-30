import { Box, Button, Grid, TextField } from "@mui/material";
import TodoFormContainer from "../container/todoForm.container";
import { attribute } from "../description/form.description";

const TodoForm = () => {
  const { handleChange, newTask, handleSubmit, error } = TodoFormContainer();

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Grid container spacing={2} alignItems="center">
        {attribute?.map((att) => {
          const { label, name } = att;
          return (
            <Grid item xs={5}>
              <TextField
                label={label}
                variant="outlined"
                name={name}
                type="text"
                defaultValue=""
                value={newTask[name]}
                helperText={error?.[name]}
                error={!!error?.[name]}
                autoFocus
                fullWidth
                onChange={(e) => handleChange(e)}
              />
            </Grid>
          );
        })}
        <Grid item xs={2}>
          <Button
            variant="contained"
            type="submit"
            sx={{
              background: "#22b7a8fa",
            }}
            fullWidth
          >
            ADD
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TodoForm;
