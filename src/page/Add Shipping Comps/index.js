import React, { useState, useEffect } from "react"
import { styled } from '@mui/material/styles';
import { Outlet, Link } from "react-router-dom";

import TopBar from "../../component/view/appBar";
import avatar from "../../assets/avatar/avatar.png"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from 'react-router-dom';

import DeleteIcon from '@mui/icons-material/Delete';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const AddShippingComps = (props) => {
  let location = useLocation();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    navigate('/');
  };
  const [formData, setFormData] = useState({
    user: {
      username: "",
      password: ""
    },
  });

  const handleChange = (e) => {
    setFormData({
      user: {
        ...formData.user,
        [e.target.name]: e.target.value,
      },
    });
  };
  const TitleShippingComps = () => {
    if (location.pathname === "/add-shipping-comps") {
      return <span>Tambah Shipping Comps</span>

    } else if (location.pathname === "/edit-shipping-comps") {
      return <span>Edit Shipping Comps</span>
    }
  }
  const IconShippingComps = () => {
   if (location.pathname === "/edit-shipping-comps") {
      return  <IconButton
      style={{
        // color: "#FFFF",
        // zIndex: 2000,
        // position: "absolute",
        // top: "8px",
        // right: "10px",
        backgroundColor:"red",
        float:"left",
        marginLeft:"10px"
        ,"&:hover": {
          background: "#fff",
      },
      }}
    // onClick={() => {
    //     localStorage.removeItem("token");
    //     history.push("login");
    // }}
    >
      <DeleteIcon style={{color:"#fff","&:hover": {
          background: "red",
      },}} />
    </IconButton>
    } else {
      return <span></span>
    }
  }

  return (
    <div style={{ padding: "100px 0 0 280px", height: "700px", margin: "0 auto", textAlign: "center" }}>
      <Grid item xs={8} style={{ height: "500px", borderRadius: "15px", margin: "0 auto", textAlign: "center" }} className="bg-white">
        <Grid item xs={24} style={{ padding: "25px 0 35px 20px" }}>
          <Typography style={{ float: "left", fontWeight: "bold", fontSize: "24px", }} className="">
            {TitleShippingComps()}
          </Typography>
         {IconShippingComps()}
        </Grid>
        <Paper className="p-10" style={{ boxShadow: "none" ,borderRadius: "15px", height: "500px" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label style={{ textAlign: "left", float: "left" }}
              className=" text-gray-400 text-base font-family:roboto font-bold ">
              Nama</label>
            <input
              {...register("nama", { required: true })}
              // error=errors
              name="nama"

              type="nama"
              // value={formData.user.password}
              // onChange={handleChange}
              className={
                "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mt-4"
              }
            />
            {errors.nama && <span style={{ color: "red" }}>Nama harus diisi</span>}
            <div className="flex items-center mt-3 justify-left">
              <button
                className={
                  "bg-blue-600 hover:bg-blue-500 py-2 px-4 text-xl rounded-lg border border-blue focus:outline-none text-white focus:border-blacks  mt-8"

                  //     

                }
                value="Login"
                type="submit"
              >
                Simpan
              </button>
            </div>
          </form>
        </Paper>
      </Grid>


    </div>
  );
}
export default AddShippingComps



