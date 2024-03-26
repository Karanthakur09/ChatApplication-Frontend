import React from 'react'
import { useNavigate } from "react-router-dom";
import {
    AppBar,
    Box,
    IconButton,
    Toolbar,
    Tooltip,
    Typography,
} from "@mui/material";
import {
    Add as AddIcon,
    Menu as MenuIcon,
    Search as SearchIcon,
    Group as GroupIcon,
    Logout as LogoutIcon,
    Notifications as NotificationsIcon,
} from "@mui/icons-material";

function Header() {
    const navigate = useNavigate();
    const handleMobile = () => console.log("mobile");

    const logoutHandler = () => console.log("logout");
    const openSearch = () => console.log("y!!");
    const openNewGroup = () => {
        console.log("new group");
    };
    const openNotification = () => {
        console.log("sbcsj");
    };

    const navigateToGroup = () => navigate("/groups");
    return (
        <Box sx={{ flexGrow: 1 }} height={"4rem"}>
            <AppBar
                position="static"
                sx={{
                    bgcolor: orange,
                }}
            >
                <Toolbar>
                    <Typography
                        variant="h6"
                        sx={{
                            display: { xs: "none", sm: "block" },
                        }}
                    >
                        Chat-App
                    </Typography>

                    <Box
                        sx={{
                            display: { xs: "block", sm: "none" },
                        }}
                    >
                        <IconButton color="inherit" onClick={handleMobile}>
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                        }}
                    />
                    <Box>
                        <IconBtn
                            title={"Search"}
                            icon={<SearchIcon />}
                            onClick={openSearch}

                        />

                        <IconBtn
                            title={"New Group"}
                            icon={<AddIcon />}
                            onClick={openNewGroup}

                        />

                        <IconBtn
                            title={"Manage Groups"}
                            icon={<GroupIcon />}
                            onClick={navigateToGroup}

                        />

                        <IconBtn
                            title={"Notifications"}
                            icon={<NotificationsIcon />}
                            onClick={openNotification}

                        />

                        <IconBtn
                            title={"Logout"}
                            icon={<LogoutIcon />}
                            onClick={logoutHandler}
                        />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

const IconBtn = ({ title, icon, onClick, value
}) => {
    return (
        <Tooltip title={title}>
            <IconButton color="inherit" size="large" onClick={onClick}>
                {icon}
            </IconButton>

        </Tooltip>
    )

}

export default Header