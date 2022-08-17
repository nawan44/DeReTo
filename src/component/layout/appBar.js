import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Input from "@mui/material/Input";
import Grid from "@mui/material/Grid";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import IconButton from "@mui/material/IconButton";
import CreateIcon from "@mui/icons-material/Create";
import SwapVertRoundedIcon from "@mui/icons-material/SwapVertRounded";
import Button from "@mui/material/Button";
import "../../assets/css/style.css";
import SortDialog from "../dialog/sort";
import { useSnackbar } from "notistack";
import AddToDoItems from "../dialog/addData";
import {sorts} from "../data/sorts"
import EmptyDialog from "../dialog/empty";
const ariaLabel = { "aria-label": "description" };


const AppBar = (props, ss) => {
  const {
    addActivity,
    setAddActivity,
    newAddActivity,
    setNewAddActivity,
    handleAddActivityGroup,
    handle,
    clickItemList,
    titleActivity,
    handleChangeTitleActivity,
    lempar,
    click,
    list,
    todoItem,
    param,
    handleChange,
    newList,
    titleDetail,
    setTitleDetail,
    handleChangeTitleDetil,
    setList,
    item,
    idDetail,
    setIdDetail,
    detailId,
    clickTitle,
    handleCloseAddTodoItems,
    sendTitle,
    detailTitle,toDoItemList
    // handleOpenAddToDoItems,setO
    // openAddToDoItems,
    //  setOpenAddToDoItems
  } = props;
  const navigate = useNavigate();
  let location = useLocation();
  const [openAddToDoItems, setOpenAddToDoItems] = useState(false);

  const [title, setTitle] = useState(detailTitle ? detailTitle : "");

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [openSort, setOpenSort] = useState(false);
  const [selectedSort, setSelectedSort] = useState(sorts[1]);
  const [openAddList, setOpenAddList] = useState(false);
  const [selectedAddList, setSelectedAddList] = useState(sorts[1]);
  const handleOpenAddToDoItems = () => {
    setOpenAddToDoItems(true);
  };
  const handleCloseAddToDoItems = (value) => {
    setOpenAddToDoItems(false);
  };
  useEffect(() => {
    if (title) {
      setTitleDetail(title);
    }
  }, [title]);
  const handleChangeTitle = (event) => {
    const keyValue = event.key;
    setTitle((value) => value + keyValue);
    // setTitleDetail(value);
    sendTitle(event);
  };

  const toActivity = () => {
    navigate("/");
  };
  console.log("toDoItemTotal", toDoItemList?.length)
  console.log("list", list)

  const Title = () => {
    if (location.pathname === `/`) {
      return <span>Activity</span>;
    } else if (location.pathname === `/` && clickTitle == false) {
      return (
        <span>
          {" "}
          <span>
            <ArrowBackIosIcon onClick={toActivity} />
            {/* Child:{title} */}

            <Input
              // value={title}
              value={title}
              // onChange={handleChangeTitle}
              onKeyUp={handleChangeTitle}
              label="Rachmat Gunawan"
              // defaultValue="New Activity"
              placeholder="New Activity"
              inputProps={ariaLabel}
              sx={{ fontSize: "24px", fontWeight: "bold" }}
            />
          </span>
          <IconButton edge="end" aria-label="comments">
            <CreateIcon style={{ color: "#888888" }} />
          </IconButton>{" "}
        </span>
      );
    }
    // if ( location.pathname === `/detail/${lempar}` && clickTitle == true)
    else {
      return (
        <span>
          <ArrowBackIosIcon onClick={toActivity} />

          <Input
            value={title}
            // onChange={handleChange}
            // onChange={handleChangeTitle}
            onKeyUp={handleChangeTitle}
            // value={title}
            // onChange={title =>handleTitle(title)}
            label="Rachmat Gunawan"
            // defaultValue="New Activity"
            placeholder="New Activity"
            // inputProps={ariaLabel}
            sx={{ fontSize: "24px", fontWeight: "bold" }}
          />
        </span>
      );
    }
  };
  //   <span>
  //   {" "}
  //   <ArrowBackIosIcon onClick={toActivity} /> Daftar Belanja Bulanan{" "}
  //   <IconButton edge="end" aria-label="comments">
  //     <CreateIcon style={{ color: "#888888" }} />
  //   </IconButton>{" "}
  // </span>
  //     try {
  //       console.log(
  //         "form",  {
  //           title: title,
  //          email:"rachmat.d.gunawan@gmail.com",
  //           _comment: "list of priority is : very-high, high, normal, low, very-low"
  //       }
  //       )
  //       const response = await fetch(
  //         process.env.REACT_APP_URL +
  //           `/activity-groups`,
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },

  //           body: JSON.stringify(
  //             {
  //     title: title,
  //    email:"rachmat.d.gunawan@gmail.com",
  //     _comment: "list of priority is : very-high, high, normal, low, very-low"
  // }
  //           ),
  //         }
  //       );
  // } catch (err) {
  //   console.log(err.message);
  // }

  // const handleAddTodoItems = async () => {
  //   const newItems = [...list, newList];

  //   try {
  //     const response = await fetch(
  //       process.env.REACT_APP_URL +
  //         // `/todo-items/${id_todo_items}`,
  //         `/todo-items/id`,

  //       {
  //         method: "PATCH",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         //           body: JSON.stringify(
  //         //             {
  //         //     "title": "item 5.1-2",
  //         //     "is_active": 1,
  //         //     "priority": "normal",
  //         //     "_comment": "list of priority is : very-high, high, normal, low, very-low"
  //         // }
  //         //           ),
  //       }
  //     );
  //     setList(newList);
  //     enqueueSnackbar("Activity berhasil ditambah", { variant: "success" });
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };
  const viewSort = () => {
    if ( list?.length > 0 ||  toDoItemList?.length > 0) {
      return (
        <IconButton variant="outlined" sx={{ margin: "0 10px" }}>
          <SwapVertRoundedIcon onClick={handleOpenSort} />
        </IconButton>
      );
    } else {
      return <span></span>;
    }
  };
  const RightButton = () => {
    if ( list && !toDoItemList ) {
      return (
        <span>
          {viewSort()}
          <Button
            onClick={handleAddActivityGroup}
            variant="contained"
            style={{ backgroundColor: "#16ABF8", borderRadius: "20px" }}
          >
            + Tambah Activity
          </Button>
        </span>
      );
    }
    else if (!list && toDoItemList ) {
      return (
        <span>
          {viewSort()}
          <Button
            onClick={handleOpenAddToDoItems}
            variant="contained"
            style={{ backgroundColor: "#16ABF8", borderRadius: "20px" }}
          >
            + Tambah ToDoItems
          </Button>
        </span>
      );
    }

    else {
      return (
        <span>
          {" "}
          <Button
 
            variant="contained"
            style={{ backgroundColor: "#16ABF8", borderRadius: "20px" }}
          >
          +Tambah  Kosong
          </Button>
        </span>
      );
    }
  };

  const handleOpenSort = () => {
    setOpenSort(true);
  };

  const handleCloseSort = (value) => {
    setOpenSort(false);
    setSelectedSort(value);
  };

  return (
    <>
      <Grid
        style={{
          margin: "0 auto",
          textAlign: "center",
          margin: "50px",
        }}
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid
          item
          xs={6}
          style={{
            fontSize: "24px",
            textAlign: "left",
            fontWeight: "bold",
          }}
        >
          {Title()}
        </Grid>
        <Grid item xs={6}>
          {RightButton()}
        </Grid>
      </Grid>
      <SortDialog
        selectedValue={selectedSort}
        open={openSort}
        onClose={handleCloseSort}
        sorts={sorts}
      />

{/* <EmptyDialog
        selectedValue={selectedSort}
        open={openSort}
        onClose={handleCloseSort}
        sorts={sorts}
      /> */}
      <AddToDoItems
        ididi={idDetail}
        open={openAddToDoItems}
        onClose={handleCloseAddToDoItems}
      />
    </>
  );
};
export default AppBar;
