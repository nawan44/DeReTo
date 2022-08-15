import React, { useState, useEffect } from "react";
import AvatarWoman from "../../assets/avatar/avatar-woman.jpg";
import { Container, Grid } from "@mui/material";
import AddListItem from "../../component/dialog/addListItem";
import AppBar from "../../component/view/appBar";
import { useLocation } from "react-router-dom";

const Detail = (props) => {
  const {
    lempar,
    list,
    setLempar,
    setOpenAddTodoItems,
    openAddTodoItems,
    handleCloseAddTodoItems,
  } = props;
  let location = useLocation();
  const [openAddToDoItems, setOpenAddToDoItems] = useState(false);
  const { state } = useLocation();
  const { value, color } = state; // Read values passed on state
  const [titleDetail, setTitleDetail] = useState();

  const [detailTitle, setDetailTitle] = useState(value?.title);
  console.log("titleDetail ???", titleDetail);

  // const handleChangeTitleDetil = (newValue) => {
  //   // Here, we invoke the callback with the new value
  //   if (titleDetail !== "New Activity") {
  //     setTitleDetail(newValue);
  //     sendTitle();
  //   } else {
  //     return false;
  //   }
  // };

  const check = () => {
    if (titleDetail !== "New Activity") {
      return true;
    } else return false;
  };
  // console.log("check", check())
  useEffect(() => {
    // // check();

    console.log("camer", titleDetail); // // }
  }, [titleDetail]);
  console.log("ssss", location.pathname !== `/detail`);
  const sendTitle = async () => {
    if (location.pathname !== `/detail`) {
      console.log("form", {
        title: titleDetail,
        email: "rachmat.d.gunawan@gmail.com",
        // _comment: "list of priority is : very-high, high, normal, low, very-low",
      });
      try {
        const response = await fetch(
          process.env.REACT_APP_URL + `/activity-groups`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify({
              title: titleDetail,
              email: "rachmat.d.gunawan@gmail.com",
              // _comment:
              // "list of priority is : very-high, high, normal, low, very-low",
            }),
          }
        );
      } catch (err) {
        console.log(err.message);
      }
    } else {
      console.log("LLL");
    }
  };

  const handleCloseAddToDoItems = (value) => {
    setOpenAddToDoItems(false);
  };
  const handleOpenAddToDoItems = () => {
    setOpenAddToDoItems(true);
  };
  return (
    <Container style={{ width: "100%" }}>
      <AppBar
        detailTitle={detailTitle}
        titleDetail={titleDetail}
        setTitleDetail={setTitleDetail}
        // handleChangeTitleDetil={handleChangeTitleDetil}
        sendTitle={sendTitle}
      />
      <Grid
        style={{
          margin: "0 auto",
          textAlign: "center",
          padding: "40px 0px",
          width: "90%",
        }}
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <img
          alt="Remy Sharp"
          width={300}
          src={AvatarWoman}
          style={{ margin: "0 auto", textAlign: "center" }}
          onClick={handleOpenAddToDoItems}
        />
      </Grid>
      <AddListItem open={openAddToDoItems} onClose={handleCloseAddToDoItems} />
    </Container>
  );
};
export default Detail;
