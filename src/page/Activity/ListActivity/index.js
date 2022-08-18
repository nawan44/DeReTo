import React from "react";
import { Container, Typography, Button, Grid } from "@mui/material";
import CardActivity from "../../../component/layout/cardActivity";
import AvatarMan from "../../../assets/avatar/avatar-man.png";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const ListActivity = ({
  clickActivity,
  setClickActivity,
  list,
  handleDeleteList,
  sortActivity,
  click,
  setClick,
  toDashboard,
  idDetail,
  setIdDetail,
  checkActivity,
  toDetail,
  setClickTitle,
  handleAddActivityGroup,
  valueSort,
}) => {
  return (
    <Container style={{ width: "100%" }}>
      {list?.length === 0 ? (
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
          {valueSort == undefined ? (
            <>
              {list &&
                list?.map((item, index) => (
                  <CardActivity
                    key={item.id}
                    click={click}
                    setClick={setClick}
                    index={index}
                    item={item}
                    list={list}
                    handleDeleteList={handleDeleteList}
                    toDashboard={toDashboard}
                    toDetail={() => toDetail(item)}
                    // setClickTitle={setClickTitle(true)}
                    setIdDetail={setIdDetail(item.id)}
                    // setIdDetail ={setIdDetail}
                  />
                ))}
            </>
          ) : (
            <>
              {sortActivity &&
                sortActivity?.map((item, index) => (
                  <CardActivity
                    key={item.id}
                    click={click}
                    setClick={setClick}
                    index={index}
                    item={item}
                    list={list}
                    handleDeleteList={handleDeleteList}
                    toDashboard={toDashboard}
                    toDetail={() => toDetail(item)}
                    // setClickTitle={setClickTitle(true)}
                    setIdDetail={setIdDetail(item.id)}
                    // setIdDetail ={setIdDetail}
                  />
                ))}
            </>
          )}
        </Grid>
      )}
    </Container>
  );
};
export default ListActivity;
