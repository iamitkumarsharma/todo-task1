import React, { useState, useEffect } from "react";

import List from "@material-ui/core/List";

import DeleteIcon from "@material-ui/icons/Delete";

import EditIcon from "@material-ui/icons/Edit";
import DoneIcon from "@material-ui/icons/Done";

import {
  Button,
  Card,
  IconButton,
  Grid,
  ListItem,
  TextField,
  Typography,
} from "@material-ui/core";

function ListContainer({ index, item, onRemove, onEdit }) {
  const [isEditable, setIsEditable] = useState(false);
  const [update, setUpdate] = useState({
    title: item.title,
    content: item.content,
  });
  const handleChange = (event) => {
    const { name, value } = event.target;

    setUpdate((preValue) => {
      return { ...preValue, [name]: value };
    });
  };

  return (
    <div>
      <Card style={{ margin: "5px", padding: "5px" }}>
        <ListItem key={index}>
          {isEditable ? (
            <Grid
              container
              spacing={2}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Grid item>
                <TextField
                  label="Title"
                  variant="outlined"
                  size="small"
                  name="title"
                  defaultValue={item.title}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Content"
                  variant="outlined"
                  name="content"
                  onChange={handleChange}
                  defaultValue={item.content}
                  fullWidth
                  size="small"
                />
              </Grid>
            </Grid>
          ) : (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="subtitle1"
                style={{
                  fontStyle: "italic",
                  color: "red",
                  textTransform: "capitalize",
                }}
              >
                {item.title}
              </Typography>
              <Typography variant="caption">{item.content}</Typography>
            </div>
          )}
          <div style={{ marginLeft: "auto", textAlign: "center" }}>
            {isEditable ? (
              <IconButton
                onClick={() => {
                  onEdit(update, index);
                  setIsEditable(false);
                }}
              >
                <DoneIcon />
              </IconButton>
            ) : (
              <IconButton onClick={() => setIsEditable(true)}>
                <EditIcon />
              </IconButton>
            )}

            <IconButton onClick={() => onRemove(index)}>
              <DeleteIcon />
            </IconButton>
          </div>
        </ListItem>
      </Card>
    </div>
  );
}

export default ListContainer;
