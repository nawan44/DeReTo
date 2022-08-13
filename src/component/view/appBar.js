import React, { useState } from "react";
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
  const { handle, click } = props;
  const navigate = useNavigate();
  let location = useLocation();
  const toDashboard = () => {
    navigate("/dashboard-empty");
  };
  const toListActivity = () => {
    navigate("/list-activity");
  };
  const Title = () => {
    if (
      location.pathname === "/dashboard" ||
      location.pathname === "/dashboard-empty"
    ) {
      return <span>Activity</span>;
    } else if (location.pathname === "/item-list") {
      return (
        <span>
          {" "}
          <ArrowBackIosIcon onClick={toListActivity} /> Daftar Belanja Bulanan{" "}
          <IconButton edge="end" aria-label="comments">
            <CreateIcon style={{ color: "#888888" }} />
          </IconButton>{" "}
        </span>
      );
    } else {
      return (
        <span>
          {" "}
          <span>
            <ArrowBackIosIcon onClick={toDashboard}/>

            <Input
              defaultValue="New Activity"
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
  };
  const RightButton = () => {
    if (
      location.pathname === "/dashboard-empty"
    ) {
      return (
        <span>
          {" "}
          <Button
            variant="contained"
            style={{ backgroundColor: "#16ABF8", borderRadius: "20px" }}
          >
            + Tambah
          </Button>
        </span>
      );
    } else if (location.pathname === "/list-activity" && click == true) {
      return (
        <span>
          {" "}
          <Button
            variant="contained"
            onClick={handleOpenAddList}
            style={{ backgroundColor: "#16ABF8", borderRadius: "20px" }}
          >
            + Tambah
          </Button>
        </span>
      );
    } else if (location.pathname === "/list-activity" && click == false) {
      return (
        <span>
          {" "}
          <IconButton variant="outlined" sx={{ margin: "0 10px" }}>
            <SwapVertRoundedIcon onClick={handleOpenSort} />
          </IconButton>
          <Button
 onClick={handle}             variant="contained"
            style={{ backgroundColor: "#16ABF8", borderRadius: "20px" }}
          >
            + Tambah
          </Button>
        </span>
      );
    }
  };
  const [openSort, setOpenSort] = useState(false);
  const [selectedSort, setSelectedSort] = useState(sorts[1]);
  const [openAddList, setOpenAddList] = useState(false);
  const [selectedAddList, setSelectedAddList] = useState(sorts[1]);

  const handleOpenSort = () => {
    setOpenSort(true);
  };

  const handleCloseSort = (value) => {
    setOpenSort(false);
    setSelectedSort(value);
  };

  const handleOpenAddList = () => {
    setOpenAddList(true);
  };

  const handleCloseAddList = (value) => {
    setOpenAddList(false);
    setSelectedAddList(value);
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
        open={openAddList}
        onClose={handleCloseAddList}
      />
    </>
  );
};
export default AppBar;
