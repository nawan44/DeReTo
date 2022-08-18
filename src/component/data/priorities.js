import CircleIcon from "@mui/icons-material/Circle";

export const priorities = [
  {
    circle: (
      <CircleIcon
        style={{ margin: " 0 10px 0 0", color: "#ED4C5C", fontSize: "12px" }}
      />
    ),
    value: "very-high",
    label: "Very High",
  },
  {
    circle: (
      <CircleIcon
        style={{ margin: " 0 10px 0 0", color: "#F8A541", fontSize: "12px" }}
      />
    ),
    value: "high",
    label: "High",
  },
  {
    circle: (
      <CircleIcon
        style={{ margin: " 0 10px 0 0", color: "#00A790", fontSize: "12px" }}
      />
    ),
    value: "medium",
    label: "Medium",
  },
  {
    circle: (
      <CircleIcon
        style={{ margin: " 0 10px 0 0", color: "#428BC1", fontSize: "12px" }}
      />
    ),
    value: "low",
    label: "Low",
  },
  {
    circle: (
      <CircleIcon
        style={{ margin: " 0 10px 0 0", color: "#8942C1", fontSize: "12px" }}
      />
    ),
    value: "very-low",
    label: "Very Low",
  },
];
