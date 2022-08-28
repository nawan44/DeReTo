import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Grid, Input, Button } from "@mui/material";
import AppBar from "../../component/layout/appBar";
import ListActivity from "./ListActivity";
import ModalInformation from "../../component/dialog/dialogInformation";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import IconButton from "@mui/material/IconButton";
import CreateIcon from "@mui/icons-material/Create";
import "../../assets/css/style.css";
import DialogDeleteActivity from "../../component/dialog/dialogDeleteActivity";
// import DialogDeleteActivity from "../../component/dialog/dialogDeleteActivity";
// import DialogDeleteData from "../../component/dialog/dialogDeleteData";
import SwapVertRoundedIcon from "@mui/icons-material/SwapVertRounded";
import DialogSort from "../../component/dialog/dialogSort";
const Activity = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [openDeleteActivity, setOpenDeleteActivity] = useState(false);
  const [openSort, setOpenSort] = useState(false);
  const [openDeleteList, setOpenDeleteList] = useState(false);
  const [openAddToDoItems, setOpenAddToDoItems] = useState(false);
  const [newList, setNewList] = useState({
    title: "New Activity",
    name: "",
  });
  const [onClick, setOnClick] = useState(false);
  const [informasiHapus, setInformasiHapus] = useState(false);
  const [list, setList] = useState([]);
  const [selectedDeleteActivity, setSelectedDeleteActivity] = useState(list[1]);

  const [selectedDeleteList, setSelectedDeleteList] = useState(list[1]);
  const [clickActivity, setClickActivity] = useState();
  const [title, setTitle] = useState();
  const [idDetail, setIdDetail] = useState();
  const [detail, setDetail] = useState([]);
  // const [deleteTitleList, setDeleteTitleList] = useState("");


  const [deleteTitleList, setDeleteTitleList] = useState("");
  const [todoItemDetail, setTodoItemDetail] = useState();
  const [addActivity, setAddActivity] = useState([]);
  const [detailId, setDetailId] = useState();
  const [newAddActivity, setNewAddActivity] = useState({
    title: "New Activity",
    name: "",
  });

  useEffect(() => {
    getListData();
  }, []);

  useEffect(() => {
    getListData();
  }, [onClick]);

  // useEffect(() => {

  //   getListData();
  // }, [deleteData]);

  const getListData = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_URL +
          // "/activity-groups?email=yoga%2B1%40skyshi.io",
          "/activity-groups?email=rachmat.d.gunawan@gmail.com",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let res = await response.json();
      setList(res.data);
      setOnClick(true);
    } catch (err) {
      console.log(err.message);
    }
  };
  console.log("list", list);
  // const toDetail = () =>{
  // if(detail){
  // navigate(`/detail/${clickActivity}`, {
  //     state: {  detail :  detail },
  //     // handleDeleteList,
  //   });}
  // }
  const handleOpenSort = () => {
    setOpenSort(true);
  };

  const getDetail = async (value) => {
    // try {
      console.log("value?.id",value?.id)
    const response = await fetch(
      process.env.REACT_APP_URL + `/activity-groups/${value?.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },

        // body: JSON.stringify({
        //   title: titleDetail,
        //   email: "rachmat.d.gunawan@gmail.com",
        // }),
      }
    );
    let res = await response.json();
    setDetailId(res.id);
    setDetail(res.todo_items);
    // setTitleBar(res.title);
    navigate(`/detail/${value?.id}`
    , {
      state: {
        value: value,
        titleBarDetil: res.title,
        dataDetail: res.todo_items,
      },
    }
    );
    // } catch (err) {}
  };

  const viewSort = () => {
    if (list?.length > 0 || detail?.length > 0) {
      return (
        <IconButton variant="outlined" sx={{ margin: "0 10px" }}>
          <SwapVertRoundedIcon
            data-cy="todo-sort-button"
            onClick={handleOpenSort}
          />
        </IconButton>
      );
    } else {
      return <span></span>;
    }
  };
  const RightButton = () => {
    // if (list && !detail) {
      return (
        <span>
          <span data-cy="todo-sort-button">{viewSort()}</span>
          <Button
            onClick={handleAddActivityGroup}
            variant="contained"
            data-cy="activity-add-button"
            style={{ backgroundColor: "#16ABF8", borderRadius: "20px" }}
          >
            + Tambah
          </Button>
        </span>
      );
    } 
  //   else if (!list && detail) {
  //     return (
  //       <span>
  //         <Button
  //           onClick={handleOpenAddToDoItems}
  //           variant="contained"
  //           style={{ backgroundColor: "#16ABF8", borderRadius: "20px" }}
  //         >
  //           + Tambah
  //         </Button>
  //       </span>
  //     );
  //   } else {
  //     return (
  //       <span>
  //         {" "}
  //         <Button
  //           variant="contained"
  //           style={{ backgroundColor: "#16ABF8", borderRadius: "20px" }}
  //         >
  //           +Tambah
  //         </Button>
  //       </span>
  //     );
  //   }
  // };

  //   useEffect(() => {
  //     toDetail()
  //   }, [getDetail]);

  const handleCloseAddToDoItems = (value) => {
    setOpenAddToDoItems(false);
  };


  const handleCloseInformasi = (value) => {
    setInformasiHapus(false);
  };
  const handleCloseSort = (value) => {
    setOpenSort(false);
    // setSelectedSort(value);
  };

  useEffect(() => {
    setTimeout(function () {
      setInformasiHapus(false);
    }, 2000);
  }, [informasiHapus]);

  const handleAddActivityGroup = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_URL + `/activity-groups`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            title: title ? title : newAddActivity.title,
            email: "rachmat.d.gunawan@gmail.com",
            priority:
              "list of priority is : very-high, high, normal, low, very-low",
          }),
        }
      );
      const newItems = [...addActivity, newAddActivity];
      setAddActivity(newItems);
      setOpenAddToDoItems(true);
      getListData();
    } catch (err) {
      console.log(err.message);
    }
  };
  const handleOpenAddToDoItems = () => {
    const newItems = [...list, newList];
    setList(newItems);
    setOpenAddToDoItems(true);
  };
  const handleDeleteActivity = (value) => {
    setOpenDeleteActivity(true);
    setClickActivity(value.id);
    setDeleteTitleList(value.title);
  };
  const handleCloseDeleteActivity = (value) => {

    setOpenDeleteActivity(false);
    setSelectedDeleteActivity(value);
    setOnClick(true);
  };
  const handleDeleteList = (value) => {
    setOpenDeleteList(true);
    setClickActivity(value.id);
    setDeleteTitleList(value.title);
  };

  const handleCloseDeleteList = (value) => {
    setOpenDeleteList(false);
    setSelectedDeleteList(value);
    setOnClick(true);
  };
  const [valueSort, setValueSort] = useState();

  const sortActivity = () => {
    if (valueSort === "Terbaru") {
      return list.sort(
        (b, a) =>
          new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      );
    } else if (valueSort === "Terlama") {
      return list.sort(
        (a, b) =>
          new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      );
    } else if (valueSort === "A - Z") {
      return list.sort((a, b) => a.title.localeCompare(b.title));
    } else if (valueSort === "Z - A") {
      return list.sort((a, b) => b.title.localeCompare(a.title));
    } else if (valueSort === "Belum Selesai") {
      return list.sort((a, b) => b.title.localeCompare(a.title));
    }
  };
  const changeToDoSort = (newValue) => {
    setValueSort(newValue);
  };
  return (
    <Container style={{ width: "100%" }}>
      {/* <AppBar
        idDetail={idDetail}
        setIdDetail={setIdDetail}
        handleAddActivityGroup={handleAddActivityGroup}
        setList={setList}
        list={list}
        clickActivity={clickActivity}
        handleCloseAddToDoItems={handleCloseAddToDoItems}
        handleOpenAddToDoItems={() => handleOpenAddToDoItems()}
        setOpenAddToDoItems={setOpenAddToDoItems}
        openAddToDoItems={openAddToDoItems}
        valueSort={valueSort}
        setValueSort={changeToDoSort}
      /> */}
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
        {/* {list == undefined ? (
          <Grid
            item
            xs={6}
            style={{
              fontSize: "24px",
              textAlign: "left",
              fontWeight: "bold",
            }}
          >
            <div>
              <ArrowBackIosIcon
                style={{
                  width: "10%",
                  float: "left",
                  padding: "5px 0 0 0",
                  fontSize: "35px",
                }}
                data-cy="todo-back-button"
                // onClick={toActivity}
                onClick={() => navigate("/")}
              />
            
              {/* } 
              <IconButton
                data-cy="todo-title-edit-button"
                onClick={titleBar === titleDetail ? clickEdit : sendTitle}
                edge="end"
                aria-label="comments"
              >
                <CreateIcon style={{ color: "#888888" }} />
              </IconButton>
            </div>
          </Grid>
        ) : (
           */}
          <Grid
            item
            xs={6}
            style={{
              fontSize: "24px",
              textAlign: "left",
              fontWeight: "bold",
            }}
            data-cy="activity-title"
          >
            <span data-cy="activity-title">Activity</span>
          </Grid>
        
        <Grid item xs={6} data-cy="todo-add-button">
        <Button
            onClick={handleAddActivityGroup}
            variant="contained"
            data-cy="activity-add-button"
            style={{ backgroundColor: "#16ABF8", borderRadius: "20px" }}
          >
            + Tambah
          </Button>
        </Grid>
      </Grid>
      <ListActivity
        handleCloseDeleteList={handleCloseDeleteList}
        idDetail={idDetail}
        setIdDetail={setIdDetail}
        handleCloseDeleteActivity={handleCloseDeleteActivity}
        list={list}
        sortActivity={sortActivity()}
        handleDeleteActivity={handleDeleteActivity}
        handleDeleteList={handleDeleteList}
        getDetail={getDetail}
        handleAddActivityGroup={handleAddActivityGroup}
        openDeleteList={openDeleteList}
        openDeleteActivity={openDeleteActivity}
        valueSort={valueSort}
      />
      <DialogDeleteActivity
        selectedValue={selectedDeleteActivity}
        clickActivity={clickActivity}
        open={openDeleteActivity}
        onClose={handleCloseDeleteActivity}
        deleteTitleList={deleteTitleList}
        onClick={() => setOnClick(!onClick)}
        setOpenDeleteActivity={setOpenDeleteActivity}
        setInformasiHapus={setInformasiHapus}
      />
      <ModalInformation
        data-cy="modal-information"
        open={informasiHapus}
        onClose={handleCloseInformasi}
        setInformasiHapus={setInformasiHapus}
      />

      <DialogSort
        open={openSort}
        onClose={handleCloseSort}
        // sorts={sorts}
        valueSort={valueSort}
        setValueSort={setValueSort}
      />
      {/* <DialogAddToDoItem
        onToDoItem={onToDoItem}
        open={openAddToDoItems}
        onClose={handleCloseAddToDoItems}
        // getTodoItemList={getTodoItemList}
      /> */}
    </Container>
  );
};
export default Activity;
