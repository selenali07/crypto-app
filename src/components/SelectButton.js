import { makeStyles } from "@material-ui/core";

const SelectButton = ({ children, selected, onClick }) => {
  const useStyles = makeStyles({
    selectbutton: {
      cursor: "pointer",
      borderRadius:"5%",
      backgroundColor: selected ? "white" : "",
      color:selected ? "black" : "",
      fontWeight: selected ? 700 : 400,
      margin: "0.5rem",
      textAlign:"center",
      "&:hover": {
        backgroundColor: "#fff",
        color: "#212121",
      },
      width: "2rem",
    },
  });

  const classes = useStyles();

  return (
    <span onClick={onClick} className={classes.selectbutton}>
      {children}
    </span>
  );
};

export default SelectButton;
