import React, { useState,useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Input from "@mui/material/Input";
import Grid from "@mui/material/Grid";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import IconButton from "@mui/material/IconButton";
import CreateIcon from "@mui/icons-material/Create";
import SwapVertRoundedIcon from "@mui/icons-material/SwapVertRounded";
import Button from "@mui/material/Button";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import SortIcon from "@mui/icons-material/Sort";
import SouthIcon from "@mui/icons-material/South";
import NorthIcon from "@mui/icons-material/North";
import "../../assets/css/style.css";
import SortDialog from "../dialog/sort";
import AddListItem from "../dialog/addListItem";
import { useSnackbar } from "notistack";
import { formControlUnstyledClasses } from "@mui/base";

const ariaLabel = { "aria-label": "description" };

const sorts = [
  {
    title: "Terbaru",
    icon: (
      <span>
        <SortIcon
          style={{
            fontSize: "16px",
            color: "#16ABF8",
          }}
        />
        <SouthIcon
          style={{
            fontSize: "16px",
            color: "#16ABF8",
          }}
        />
      </span>
    ),
  },
  {
    title: "Terlama",
    icon: (
      <span>
        <SortIcon
          style={{
            fontSize: "16px",
            color: "#16ABF8",
          }}
        />
        <NorthIcon
          style={{
            fontSize: "16px",
            color: "#16ABF8",
          }}
        />
      </span>
    ),
  },
  {
    title: "A - Z",
    icon: (
      <span>
        <SouthIcon
          style={{
            fontSize: "16px",
            color: "#16ABF8",
          }}
        />
        <SortByAlphaIcon
          style={{
            fontSize: "16px",
            color: "#16ABF8",
          }}
        />
      </span>
    ),
  },
  {
    title: "Z - A",
    icon: (
      <span>
        <NorthIcon
          style={{
            fontSize: "16px",
            color: "#16ABF8",
          }}
        />
        <SortByAlphaIcon
          style={{
            fontSize: "16px",
            color: "#16ABF8",
          }}
        />
      </span>
    ),
  },
  {
    title: "Belum Selesai",
    icon: (
      <SwapVertRoundedIcon
        style={{
          fontSize: "24px",
          color: "#16ABF8",
        }}
      />
    ),
  },
];
const AppBar = (props) => {
  const {
    addActivity, setAddActivity,newAddActivity, setNewAddActivity,
    handleAddActivityGroup,
    handle,
    clickItemList,
    setTitle,
    title,
    lempar,
    click,
    list,
    todoItem,
    newList,
    setList,item,idDetail, setIdDetail,clickTitle,handleCloseAddTodoItems,
    // handleOpenAddToDoItems,setO
    // openAddToDoItems,
    //  setOpenAddToDoItems
  } = props;
  const navigate = useNavigate();
  let location = useLocation();
  const [openAddToDoItems, setOpenAddToDoItems] = useState(false);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [openSort, setOpenSort] = useState(false);
  const [selectedSort, setSelectedSort] = useState(sorts[1]);
  const [openAddList, setOpenAddList] = useState(false);
  const [selectedAddList, setSelectedAddList] = useState(sorts[1]);
console.log("openAddToDoItems",openAddToDoItems)
const handleOpenAddToDoItems = () =>{
  setOpenAddToDoItems(true)
  console.log("sahbcasbc")
}
const handleCloseAddToDoItems = (value) => {
  setOpenAddToDoItems(false);
};

useEffect((value) => {

}, [idDetail]);
console.log("APP BAR lempar", idDetail)
  // const toDashboard = () => {
  //   navigate("/dashboard");
  // };
  const toActivity = () => {
    navigate("/");
  };
  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  console.log("app clickTitle",clickTitle)

console.log("kk", location.pathname === `/detail/${idDetail}`)
  const Title = () => {
    if ( location.pathname === `/`) {
      return <span>Activity</span>;
    }
  else  if ( location.pathname === `/` && clickTitle == false) {
      return (
        <span>
          {" "}
          <span>
            <ArrowBackIosIcon onClick={toActivity} />

            <Input
              value={title}
              onChange={handleTitle}
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
    else  {
      return (
        <span>
        <ArrowBackIosIcon onClick={toActivity} />

        <Input
          value={title}
          onChange={handleTitle}
          label="Rachmat Gunawan"
          // defaultValue="New Activity"
          placeholder="New Activity"
          inputProps={ariaLabel}
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

  const handleAddTodoItems = async () => {
    const newItems = [...list, newList];

    try {
      const response = await fetch(
        process.env.REACT_APP_URL +
          // `/todo-items/${id_todo_items}`,
          `/todo-items/id`,

        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          //           body: JSON.stringify(
          //             {
          //     "title": "item 5.1-2",
          //     "is_active": 1,
          //     "priority": "normal",
          //     "_comment": "list of priority is : very-high, high, normal, low, very-low"
          // }
          //           ),
        }
      );
      setList(newList);
      enqueueSnackbar("Activity berhasil ditambah", { variant: "success" });
    } catch (err) {
      console.log(err.message);
    }
  };
const viewSort = () => {
  if (clickTitle == true) {
    return  (<IconButton variant="outlined" sx={{ margin: "0 10px" }}>
             <SwapVertRoundedIcon onClick={handleOpenSort} />
           </IconButton>
    )
  } else {
    return (<span></span>)
  }
}
  const RightButton = () => {
    if (location.pathname === "/") {
      return (
        <span>
          {viewSort ()}
              
          <Button
          onClick={handleAddActivityGroup}
            variant="contained"
            style={{ backgroundColor: "#16ABF8", borderRadius: "20px" }}
          >
            + rgr
          </Button>
        </span>
      ) }
         
    // } else if ( location.pathname === `/detail/${idDetail}` ){
    //   return (
    //     <span>
    //       {" "}
    //       <IconButton variant="outlined" sx={{ margin: "0 10px" }}>
    //         <SwapVertRoundedIcon onClick={handleOpenSort} />
    //       </IconButton>
    //       <Button
    //         onClick={handle}
    //         // onClick={handleAddActivityGroup}

    //         variant="contained"
    //         style={{ backgroundColor: "#16ABF8", borderRadius: "20px" }}
    //       >
    //         + sadsd
    //       </Button>
    //     </span>
    //   );
    // }
    else    {
      return (
        <span>
          {" "}
          <Button
            // onClick={handleAddActivityGroup}
            onClick={handleOpenAddToDoItems}

            variant="contained"
            style={{ backgroundColor: "#16ABF8", borderRadius: "20px" }}
          >
            + Tambacsch
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
      <AddListItem
        selectedValue={selectedAddList}
        open={openAddToDoItems}
        onClose={handleCloseAddToDoItems}
      />
    </>
  );
};
export default AppBar;
