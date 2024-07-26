import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import {
  Input,
  InputBase,
  IconButton,
  Paper,
  makeStyles,
  Theme,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
    margin: "0 auto",
    marginTop: theme.spacing(2),
  },
  iconButton: {
    padding: 10,
  },
  input: {
    display: "inline-flex",
    flex: 1,
    marginTop: 0,
    marginBottom: 0,
    "& .MuiOutlinedInput-root": {
      padding: theme.spacing(0, 1),
      "& fieldset": {
        borderColor: theme.palette.divider,
      },
    },
  },
}));

interface SearchComponentProps {
  onSearch: (searchTerm: string) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ onSearch }) => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleClear = () => {
    setSearchTerm("");
    onSearch("");
  };

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Type to Search..."
        inputProps={{ "aria-label": "search" }}
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        startAdornment={
            <IconButton
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        }
        endAdornment={
            searchTerm && (
                <IconButton
                className={classes.iconButton}
                aria-label="clear"
                onClick={handleClear}
              >
                <ClearIcon />
              </IconButton>
            ) 
        }
      />
    </Paper>
  );
};

export default SearchComponent;
