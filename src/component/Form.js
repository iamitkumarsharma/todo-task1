import React, { useState } from "react";
import { Button, Card, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

function Form(props) {
  return (
    <div>
      <Card
        style={{
          width: "auto",
          padding: "10px",
          height: "auto",
          margin: "5px",
        }}
      >
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <TextField
                label="Title"
                variant="outlined"
                size="small"
                name="title"
                onChange={(event) => props.inputChange(event)}
                value={props.note.title}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <TextField
                label="Content"
                variant="outlined"
                name="content"
                value={props.note.content}
                onChange={(event) => props.inputChange(event)}
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={2} md={2} lg={2}>
              <Button
                disabled={!props.note.title || !props.note.content}
                type="submit"
                color="primary"
                variant="contained"
                onClick={(event) => props.addNote(event)}
              >
                ADD
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>
    </div>
  );
}

export default Form;
