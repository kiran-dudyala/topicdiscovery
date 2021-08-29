/* eslint-disable no-use-before-define */
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { FetchSearchTopics } from "../pages/api/TopicsApi";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  inputRoot: {
    color: "#f8f9fe",
    borderRadius: 8,
    backgroundColor: "#f8f9fe",
    "& .MuiOutlinedInput-notchedOutline": {
      borderWidth: "2px",
      borderColor: "#c9c9d4",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderWidth: "2px",
      borderColor: "#c9c9d4",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderWidth: "2px",
      borderColor: "#c9c9d4",
    },
  },
}));

export default function Search(props) {
  const classes = useStyles();
  const [searchTopic, setSearchTopic] = useState([]);
  const [searcShtarted, setSearchStarted] = useState(false);
  const router = useRouter();

  const handleonChange = (event, value, reason) => {
    if (reason === "select-option") {
      props.onSearchChange(true);
      setSearchStarted(false);
      router.push(`/topic/${value}`);
    }
    if (reason === "clear") {
      setSearchStarted(false);
    }
  };

  const handleOnchange = (e) => {
    if (e.target.value.length > 2) {
      let data = e.target.value;
      setSearchStarted(true);
      FetchSearchTopics(e.target.value).then((res) => {
        setSearchTopic(res.length > 0 && res.includes(data.toLocaleUpperCase())? res: [data]);
      });
    }
  };

  return (
    <Autocomplete
      className={classes.inputRoot}
      clearOnEscape={true}
      id="combo-box-demo"
      options={searchTopic}
      blurOnSelect={true}
      noOptionsText={
        searcShtarted
          ? "ok, finding your search now..."
          : "please enter your search..."
      }
      getOptionLabel={(option) => option.toUpperCase()}
      onChange={(e, v, r) => handleonChange(e, v, r)}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          onChange={(e) => handleOnchange(e)}
        />
      )}
    />
  );
}
