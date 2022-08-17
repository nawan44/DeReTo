import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import SortIcon from "@mui/icons-material/Sort";
import SouthIcon from "@mui/icons-material/South";
import NorthIcon from "@mui/icons-material/North";
import SwapVertRoundedIcon from "@mui/icons-material/SwapVertRounded";

export const sorts = [
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
      title: "Terlama",
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
      title: "A - Z",
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
      title: "Z - A",
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