// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import Input from "@mui/material/Input";
// import Grid from "@mui/material/Grid";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import IconButton from "@mui/material/IconButton";
// import CreateIcon from "@mui/icons-material/Create";
// import SwapVertRoundedIcon from "@mui/icons-material/SwapVertRounded";
// import Button from "@mui/material/Button";
// import "../../assets/css/style.css";
// // import { sorts } from "../data/sorts";
// import DialogAddData from "../dialog/dialogAddToDoItem";
// import DialogSort from "../dialog/dialogSort";
// import DialogAddToDoItem from "../dialog/dialogAddToDoItem";
// const ariaLabel = { "aria-label": "description" };

// const AppBar = (props, ss) => {
//   const {
//     handleAddActivityGroup,
//     // getTodoItemList,
//     handle,
//     list,
//     todoItem,
//     param,
//     titleDetail,
//     setTitleDetail,
//     handleChangeTitleDetil,
//     setList,
//     item,
//     idDetail,
//     setIdDetail,
//     detailId,
//     handleCloseAddTodoItems,
//     sendTitle,
//     detailTitle,
//     dataDetail,
//     changeToDoItems,
//     value,
//     handleOpenAddToDoItems,
//     valueSort,
//     setValueSort,
//     onToDoItem,
//     titleBarDetail,
//     titleBarChange,
//   } = props;
//   const navigate = useNavigate();
//   let location = useLocation();

//   const [onEdit, setOnEdit] = useState(false);


//   const [openAddToDoItems, setOpenAddToDoItems] = useState(false);
//   console.log("titleBarDetail..........", titleBarDetail);
//   const [openSort, setOpenSort] = useState(false);
//   const [onEdit, setOnEdit] = useState(false);
//   // const [selectedSort, setSelectedSort] = useState(sorts[1]);
//   // const [openAddList, setOpenAddList] = useState(false);
//   // const [selectedAddList, setSelectedAddList] = useState(sorts[1]);
//   const clickEdit = () => {
//     setOnEdit(true);
//   };
//   const handleCloseAddToDoItems = (value) => {
//     setOpenAddToDoItems(false);
//   };

//   const handleChangeTitle = (event) => {
//     setTitleDetail(event.target.value);
//   };
//   const toActivity = (e) => {
//     navigate("/");
//     sendTitle(e);
//   };

//   // const TitleActivity = () => {
//   // if (location.pathname === `/` ) {
//   //   return <span data-cy="activity-title">Activity</span>;
//   // } else
//   // if (location.pathname === `/`) {
//   //   return (
//   //     <div data-cy="todo-title">
//   //       {" "}
//   //       <ArrowBackIosIcon onClick={toActivity} data-cy="todo-back-button" />
//   //       <Input
//   //         value={titleDetail}
//   //         data-cy="todo-title"
//   //         onChange={handleChangeTitle}
//   //         // label="Rachmat Gunawan"
//   //         placeholder="New Activity"
//   //         inputProps={ariaLabel}
//   //         sx={{ fontSize: "24px", fontWeight: "bold" }}
//   //       />
//   //       <IconButton edge="end" aria-label="comments">
//   //         <CreateIcon style={{ color: "#888888" }} />
//   //       </IconButton>{" "}
//   //     </div>
//   //   );
//   // } else
//   //   if (list == undefined) {
//   //     return (
//   //       <div>
//   //         <ArrowBackIosIcon data-cy="todo-back-button" onClick={toActivity} />
//   //         <Input
//   //           data-cy="todo-title"
//   //           value={titleBarChange ? titleDetail : titleBarChange}
//   //           onChange={handleChangeTitle}
//   //           // label="Rachmat Gunawan"
//   //           placeholder="New Activity"
//   //           sx={{ fontSize: "24px", fontWeight: "bold" }}
//   //         />
//   //         <IconButton
//   //           data-cy="todo-title-edit-button"
//   //           onClick={sendTitle}
//   //           edge="end"
//   //           aria-label="comments"
//   //         >
//   //           <CreateIcon style={{ color: "#888888" }} />
//   //         </IconButton>
//   //       </div>
//   //     );
//   //   } else {
//   //     return <span data-cy="activity-title">Activity</span>;
//   //   }
//   // };

//   const viewSort = () => {
//     if (list?.length > 0 || dataDetail?.length > 0) {
//       return (
//         <IconButton variant="outlined" sx={{ margin: "0 10px" }}>
//           <SwapVertRoundedIcon
//             data-cy="todo-sort-button"
//             onClick={handleOpenSort}
//           />
//         </IconButton>
//       );
//     } else {
//       return <span></span>;
//     }
//   };
//   const RightButton = () => {
//     if (list && !dataDetail) {
//       return (
//         // <span data-cy="todo-sort-button">
//         <span>
//           <span data-cy="todo-sort-button">{viewSort()}</span>
//           <Button
//             onClick={handleAddActivityGroup}
//             variant="contained"
//             data-cy="activity-add-button"
//             style={{ backgroundColor: "#16ABF8", borderRadius: "20px" }}
//           >
//             + Tambah
//           </Button>
//         </span>
//       );
//     } else if (!list && dataDetail) {
//       return (
//         // <span data-cy="todo-sort-button">
//         <span>
//           <span data-cy="todo-sort-button">{viewSort()}</span>
//           <Button
//             onClick={handleOpenAddToDoItems}
//             data-cy="modal-add"
//             variant="contained"
//             style={{ backgroundColor: "#16ABF8", borderRadius: "20px" }}
//           >
//             + Tambah
//           </Button>
//         </span>
//       );
//     } else {
//       return (
//         <span>
//           {" "}
//           <Button
//             variant="contained"
//             style={{ backgroundColor: "#16ABF8", borderRadius: "20px" }}
//           >
//             +Tambah
//           </Button>
//         </span>
//       );
//     }
//   };

//   const handleOpenSort = () => {
//     setOpenSort(true);
//   };

//   const handleCloseSort = (value) => {
//     setOpenSort(false);
//     // setSelectedSort(value);
//   };

//   return (
//     <>
    
//           {list == undefined ? (

//         <Grid
//           item
//           xs={6}
//           style={{
//             fontSize: "24px",
//             textAlign: "left",
//             fontWeight: "bold",
//           }}
//         >
//             <div>
//               <ArrowBackIosIcon
//                 style={{
//                   width: "10%",
//                   float: "left",
//                   padding: "5px 0 0 0",
//                   fontSize: "35px",
//                 }}
//                 data-cy="todo-back-button"
//                 // onClick={toActivity}
// onClick={() => navigate("/")}
// />
//               {onEdit ? (
//                 <Input
//                   value={titleBarDetail !== titleDetail  ? titleDetail :titleBarDetail }   
//                   // 'data-cy="todo-title"
//                   onChange={handleChangeTitle}
//                onKeyUp={sendTitle}
//                   // label="Rachmat Gunawan"
//                   placeholder="New Activity"
//                   sx={{ fontSize: "24px", fontWeight: "bold" }}
//                 />
//               ) : (
//                 <div
//                   data-cy="todo-title"
//                   style={{ width: "70%", float: "left" }}
//                 >
//                   {titleBarDetail}
//                 </div>
//               )}
//               {/* } */}
//               <IconButton
//                 data-cy="todo-title-edit-button"
//                 onClick={titleBarDetail === titleDetail ? clickEdit : sendTitle}
//                 edge="end"
//                 aria-label="comments"
//               >
//                 <CreateIcon style={{ color: "#888888" }} />
//               </IconButton>{" "}
            
//             </div>
//             </Grid>

//           ) : (

//             <Grid
//           item
//           xs={6}
//           style={{
//             fontSize: "24px",
//             textAlign: "left",
//             fontWeight: "bold",
//           }}
//           data-cy="activity-title"
//         >

//             <span data-cy="activity-title">Activity</span>
//             </Grid>

//           )}
//         <Grid item xs={6} data-cy="todo-add-button">
//           {RightButton()}
//         </Grid>
//       </Grid>
   
   
  
//     </>
//   );
// };
// export default AppBar;
