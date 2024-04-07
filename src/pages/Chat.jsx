import React, { Fragment, useRef } from 'react'

import { IconButton, Skeleton, Stack } from "@mui/material";
import { grayColor, orange } from "../constants/color";
import AppLayout from "../components/layout/AppLayout";
import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import FileMenu from '../components/dialogs/FileMenu';
import { InputBox } from '../components/styles/StyleComponents';

function Chat() {
  const containerRef=useRef(null);
  const fileMenuRef=useRef(null)

  return (
    <Fragment>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={grayColor}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {/* {message loading} */}
      </Stack>

      <form
        style={{
          height: "10%",
        }}
        
      >
        <Stack
          direction={"row"}
          height={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          position={"relative"}
        >
          <IconButton
            sx={{
              position: "absolute",
              left: "1.5rem",
              rotate: "30deg",
            }}
           ref={fileMenuRef}
          >
            <AttachFileIcon />
          </IconButton>

          <InputBox
            placeholder="Type Message Here..."
           
          />

          <IconButton
            type="submit"
            sx={{
              rotate: "-30deg",
              bgcolor: orange,
              color: "white",
              marginLeft: "1rem",
              padding: "0.5rem",
              "&:hover": {
                bgcolor: "error.dark",
              },
            }}
          >
            <SendIcon />
          </IconButton>
        </Stack>
      </form>

      <FileMenu  />
    </Fragment>
  )
}

export default AppLayout()(Chat);