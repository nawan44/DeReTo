import React, { PureComponent } from "react";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import { Container } from "@mui/material";
import AppBar from "../../component/view/appBar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";

const ItemList = () => {
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return (
    <Container style={{ width: "100%" }}>
      <AppBar />
      <Grid
        style={{
          margin: "0 auto",
          textAlign: "center",
          padding: "10px 0px",
          // backgroundColor: "green",
          width: "90%",
        }}
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <List sx={{ width: "100%", maxWidth: "90%" }}>
          {[0, 1, 2, 3].map((value) => {
            const labelId = `checkbox-list-label-${value}`;

            return (
              <ListItem
                sx={{ display: "list-item" }}
                key={value}
                style={{
                  margin: "20px 0",
                  backgroundColor: "#fff",
                  borderRadius: "7px",
                }}
                secondaryAction={
                  <IconButton edge="end" aria-label="comments">
                    <DeleteIcon style={{ color: "#888888" }} />
                  </IconButton>
                }
                disablePadding
              >
                <ListItemButton
                  role={undefined}
                  onClick={handleToggle(value)}
                  dense
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>
                  <IconButton edge="end" aria-label="comments">
                    <FiberManualRecordRoundedIcon
                      sx={{ fontSize: 10, color: "red", margin: "0 10px 0 0" }}
                    />
                  </IconButton>
                  <ListItemText
                    style={{ maxWidth: "100px" }}
                    id={labelId}
                    primary={`Line item ${value + 1}`}
                  />

                  <IconButton edge="end" aria-label="comments">
                    <CreateIcon style={{ color: "#888888" }} />
                  </IconButton>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Grid>
    </Container>
  );
};
export default ItemList;
