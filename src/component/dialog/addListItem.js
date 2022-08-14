import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Container, Divider, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import MenuItem from "@mui/material/MenuItem";
import CircleIcon from "@mui/icons-material/Circle";
import { withStyles } from "@material-ui/core/styles";
import "../../assets/css/style.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    secondary: {
      main: "#16ABF8",
    },
  },
});
const priorities = [
  {
    circle: (
      <CircleIcon
        style={{ margin: " 0 10px 0 0", color: "#ED4C5C", fontSize: "12px" }}
      />
    ),
    value: "very-high",
    label: "Very High",
  },
  {
    circle: (
      <CircleIcon
        style={{ margin: " 0 10px 0 0", color: "#F8A541", fontSize: "12px" }}
      />
    ),
    value: "high",
    label: "High",
  },
  {
    circle: (
      <CircleIcon
        style={{ margin: " 0 10px 0 0", color: "#00A790", fontSize: "12px" }}
      />
    ),
    value: "medium",
    label: "Medium",
  },
  {
    circle: (
      <CircleIcon
        style={{ margin: " 0 10px 0 0", color: "#428BC1", fontSize: "12px" }}
      />
    ),
    value: "low",
    label: "Low",
  },
  {
    circle: (
      <CircleIcon
        style={{ margin: " 0 10px 0 0", color: "#8942C1", fontSize: "12px" }}
      />
    ),
    value: "very-low",
    label: "Very Low",
  },
];
const styles = {
  dialogPaper: {
    width: "500px",
    height: "400px",
  },
};

function AddListItem(props) {
  const { 
    onClose, selectedValue, open, classes, lempar, setLempar } = props;
  const navigate = useNavigate();
  const [valueKirim, setValueKirim] = useState({
    namaList :"",
    priorityList:""
  });
  const [namaList, setNamaList] = useState("")
  const [priority, setPriority] = useState("");
  const [kirim, setKirim] = useState({
    id: null,
    title: "",
    list_kegiatan: {
      nama_list: "",
      priority: "",
    },
  });
  const [newLempar, setNewLempar] = useState({
    title: "New Activity",
    name: "",
  });
  useEffect(
    () => {
      setValueKirim({
        ...valueKirim,
        id_list: lempar,
        title: lempar?.title,
        list_kegiatan: {
          nama_list: valueKirim.namaList,
          priority: valueKirim.priorityList,
        },
      });
    },
    [lempar?.title]
    ,[ valueKirim]  
  );
  const addData = async (e) => {
   
    e.preventDefault();

    try {
      let form = {
        activity_group_id : valueKirim.id_list,
        title : valueKirim.namaList,
        _comment :  valueKirim.priorityList
      };
      const response = await fetch(
        process.env.REACT_APP_URL + "/todo-items",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Authorization: localStorage.getItem("token"),
          },
          body: JSON.stringify(form),
        }
      );
      // const res = await response.json();
      // navigate("/item-list");
      onClose()
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };
  const handleClose = () => {
    onClose(selectedValue);
  };
  // const handleChangePriority = (event) => {
  //   // event.preventDefault();
  //   setPriority(event.target.value);
  // };
  const handleChange = (event) => {
    // event.preventDefault();
    setValueKirim({
            ...valueKirim,
            [event.target.name] :event.target.value
            
          })
    // setNamaList(event.target.value);
  };
  // const handleChange = (event) => {
  //   event.preventDefault();
  //   setPriority(event.target.value);
  //   setNamaList(event.target.value);
  // setKirim({
  //   ...kirim,
  //   [event.target.name]: event.target.value,
  // });
  // };

  // const addData = () => {
  //   const newItems = [...lempar, newLempar];

  //   setLempar(newItems);
  //   navigate("/item-list");
  // };
  return (
    <ThemeProvider theme={theme}>
      <Dialog
        onClose={handleClose}
        open={open}
        classes={{ paper: classes.dialogPaper }}
      >
        <DialogTitle>Tambah List Item</DialogTitle>
        <Divider />
        <div style={{ padding: "20px" }}>
          <Typography
            style={{ fontWeight: 600, fontSize: "12px", lineHeight: "18px" }}
          >
            NAMA LIST ITEM
          </Typography>
          <TextField
            id="id"
            value={valueKirim.namaList}
            name="namaList"
            onChange={handleChange}
            label="Tambahkan nama list item"
            variant="outlined"
            style={{ margin: "10px 0", width: "100%" }}
          />
          <Typography
            style={{
              fontWeight: 600,
              fontSize: "12px",
              margin: "10px 0",
              lineHeight: "18px",
            }}
          >
            PRIORITY
          </Typography>
          <TextField
            id="id"
            select
            label="Pilih Priority"
            name="priorityList"
            value={valueKirim.priorityList}
            onChange={handleChange}
            style={{ margin: "10px 0 10px 0", width: "100%" }}
          >
            {priorities.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.circle}
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <Divider />
        <Grid
          container
          sx={{ padding: "0 0 20px 0 " }}
          justifyContent="flex-end"
        >
          <Button
            onClick={addData}
            variant="contained"
            color="secondary"
            sx={{
              width: "100px",
              borderRadius: "15px",
              color: "white",
              float: "right",
              margin: "20px 20px 0 20px",
            }}
          >
            Simpan
          </Button>
        </Grid>
      </Dialog>{" "}
    </ThemeProvider>
  );
}

export default withStyles(styles)(AddListItem);
