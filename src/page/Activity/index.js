import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container } from "@mui/material";
import AppBar from "../../component/layout/appBar";
import { useSnackbar } from "notistack";
import ListActivity from "./ListActivity";
import DialogDeleteData from "../../component/dialog/dialogDeleteData";
import "../../assets/css/style.css";
import DialogInformation from "../../component/dialog/dialogInformation";

const Activity = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { state } = useLocation();
  const [openDeleteList, setOpenDeleteList] = useState(false);
  const [openAddToDoItems, setOpenAddToDoItems] = useState(false);
  const [newList, setNewList] = useState({
    title: "New Activity",
    name: "",
  });
  const [onClick, setOnClick] = useState(false);
const [informasiHapus, setInformasiHapus] = useState(false)
  const [list, setList] = useState([]);
  const [selectedDeleteList, setSelectedDeleteList] = useState(list[1]);
  const [clickActivity, setClickActivity] = useState();
  const [title, setTitle] = useState();
  const [idDetail, setIdDetail] = useState();
  // const [todoItem, setTodoItem] = useState();
  const [deleteTitleList, setDeleteTitleList] = useState("");
  const [todoItemDetail, setTodoItemDetail] = useState();
  const [addActivity, setAddActivity] = useState([]);
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

  const toDetail = (value) => {
    navigate(`/detail/${value?.id}`, {
      state: { value: value, color: "green" },
      handleDeleteList,
    });
  };

  const deleteData = (id) => {
    // handleDeleteList
    const newList = list.filter((item) => item.id !== id);
    try {
      const response = fetch(
        process.env.REACT_APP_URL + `/activity-groups/${clickActivity}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      getListData();
      // onClick();
      setInformasiHapus(true)
      handleCloseDeleteList();
      enqueueSnackbar(
        "Activity berhasil dihapus",
        `[data-cy=modal-information]`,
        { variant: "success" }
      );
    } catch (err) {
      // console.log(err.message);
    }
  };
  const handleCloseAddToDoItems = (value) => {
    setOpenAddToDoItems(false);
  };


  const handleCloseInformasi = (value) => {
    // setTimeout(() => setInformasiHapus(false), 3000)

      setInformasiHapus(false)
   }
  // const handleOpenInformasi = (value) => {
  //   setInformasiHapus(true)
  

  // }
  //   return () => {
  //     clearTimeout(timeId)
    
  // }
  // }

  useEffect(() => {
    setTimeout(function(){
      setInformasiHapus(false)
  }, 3000);

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

      enqueueSnackbar("Activity berhasil ditambah", { variant: "success" });
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
    "    `[data-cy=sort-selection]``[data-cy=todo-sort-button]``[data-cy=todo-sort-button]`;";
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
  // console.log("todoItem ????????????", todoItem);
  return (
    <Container style={{ width: "100%" }}>
      <AppBar
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
      />
      <ListActivity
      handleCloseDeleteList={handleCloseDeleteList}
        idDetail={idDetail}
        setIdDetail={setIdDetail}
        list={list}
        sortActivity={sortActivity()}
        handleDeleteList={handleDeleteList}
        toDetail={toDetail}
        handleAddActivityGroup={handleAddActivityGroup}
        open={openDeleteList}
        valueSort={valueSort}
      />
      <DialogDeleteData
// data-cy="activity-item-delete-button"      
data-cy="modal-delete-confirm-button"
selectedValue={selectedDeleteList}
        clickActivity={clickActivity}
        open={openDeleteList}
        onClose={handleCloseDeleteList}
        onRemove={deleteData}
        deleteTitleList={deleteTitleList}
        onClick={() => setOnClick(!onClick)}
      />
      <DialogInformation open={informasiHapus}   data-cy="modal-information"     onClose={handleCloseInformasi}
 setInformasiHapus={setInformasiHapus}/>
    </Container>
  );
};
export default Activity;
