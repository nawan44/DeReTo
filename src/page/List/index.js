import React, { useState } from "react";
import { Container, Typography, Button, Grid } from "@mui/material";
import CardActivity from "../../component/view/cardActivity";
import AvatarMan from "../../assets/avatar/avatar-man.png";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const List = ({
  lempar,
  setLempar,
  list,
  handleDeleteList,
  setClickItemList,
  clickItemList,
  click,
  setClick,
  toDashboard,
  checkToDo, idDetail, setIdDetail,
  checkActivity, toDetail, setClickTitle, handleAddActivityGroup
}) => {



  return (
    <Container style={{ width: "100%" }}>
      {list.length === 0 ? (
        <Grid
          style={{
            margin: "0 auto",
            textAlign: "center",
            padding: "0px 30px",
            width: "70%",
          }}
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid
            item
            xs={6}
            style={{
              margin: "0 auto",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            <img
              alt="Remy Sharp"
              width={250}
              src={AvatarMan}
              style={{ margin: "0", textAlign: "right" }}
            />
          </Grid>
          <Grid
            item
            xs={6}
            style={{
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <Button
              onClick={handleAddActivityGroup}
              sx={{ padding: "30px 90px" }}
              variant="outlined"
            >
              <AddCircleIcon sx={{ fontSize: 70, color: "#16ABF8" }} />
            </Button>

            <Typography
              style={{
                margin: "0 auto",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Buat Activity Pertamamu
            </Typography>
          </Grid>
        </Grid>
      ) : (
        <Grid
          style={{
            margin: "0 auto",
            textAlign: "center",
            width: "90%",
          }}
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {" "}
          {list &&
            list?.map((item, index) => (
              <CardActivity
                checkToDo={checkToDo}
                key={item.id}
                setClickItemList={setClickItemList}
                clickItemList={clickItemList}
                click={click}
                setClick={setClick}
                index={index}
                item={item}
                list={list}
                lempar={lempar}
                setLempar={setLempar}
                handleDeleteList={handleDeleteList}
                toDashboard={toDashboard}
                toDetail={() => toDetail(item)}
                setClickTitle={setClickTitle(true)}
                setIdDetail={setIdDetail(item.id)}
              // setIdDetail ={setIdDetail}
              />
            ))}
        </Grid>
      )}
    </Container>
  );
};
export default List;
