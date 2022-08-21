import React,{useState} from "react";
import { Container, Typography, Button, Grid } from "@mui/material";
import CardActivity from "../../../component/layout/cardActivity";
import AvatarMan from "../../../assets/avatar/avatar-man.png";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Box from '@mui/material/Box';

const ListActivity = ({
  clickActivity,
  setClickActivity,
  list,
  handleDeleteList,handleDeleteActivity,
  sortActivity,
  click,
  setClick,
  toDashboard,
  idDetail,
  setIdDetail,
  checkActivity,
  getDetail,
  setClickTitle,
  handleAddActivityGroup,
  valueSort,handleCloseDeleteList,handleCloseDeleteActivity
}) => {
  const [close, setClose] = useState(false);

 
  const styles = {
    position: 'absolute',
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    border: '1px solid',
    p: 1,
    bgcolor: 'background.paper',
  };
  const handleClickAway = () => {
    setClose(false);
    handleCloseDeleteList()
  };
  return (
    <Container style={{ width: "100%" }} 
    // data-cy="activity-item">
    >   
    {/* <ClickAwayListener
          data-cy="modal-delete-cancel-button"

      mouseEvent="onMouseDown"
      touchEvent="onTouchStart"
      onClickAway={handleClickAway}

      // data-cy="modal-delete-cancel-button"
    > */}
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
            data-cy="activity-empty-state"
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
              data-cy="activity-add-button"
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
          data-cy="todo-sort-button"
        >
          {valueSort == undefined ? (
            <>
              {list &&
                list?.map((item, index) => (
                  <CardActivity
                  data-cy="activity-item"
                    key={item.id}
                    click={click}
                    setClick={setClick}
                    index={index}
                    item={item}
                    list={list}
                    handleCloseDeleteActivity={handleCloseDeleteActivity}
                    // data-cy="activity-item"
                    handleDeleteActivity={handleDeleteActivity}
                    toDashboard={toDashboard}
                    getDetail={() => getDetail(item)}
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
                  data-cy="activity-item"
                    key={item.id}
                    click={click}
                    setClick={setClick}
                    index={index}
                    item={item}
                    list={list}
                    handleDeleteList={handleDeleteList}
                    toDashboard={toDashboard}
                    getDetail={() => getDetail()}
                    // setClickTitle={setClickTitle(true)}
                    setIdDetail={setIdDetail(item.id)}
                    // setIdDetail ={setIdDetail}
                  />
                ))}
            </>
          )}
        </Grid>
      )}

      {/* </ClickAwayListener> */}
    </Container>
  );
};
export default ListActivity;
