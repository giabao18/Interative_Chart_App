import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { DarkModeContext } from "../../context/theme/darkModeContext";
import { useContext } from "react";
import { Button, Typography, Avatar } from 'antd'
import { AuthContext } from "~/context/authentication/authProvider";

export default function Navbar() {
  const { dispatch } = useContext(DarkModeContext);
  const { user: {
    displayName,
    photoURL,
  } } = useContext(AuthContext)


  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>

        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>

          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>

          <div>
            <Avatar
              style={{marginRight: '10px'}}
              src={photoURL}
            >
              {photoURL ? '' : displayName?.charAt(0)?.toUpperCase()}
            </Avatar>
            {/* <Typography.Text className='user_name'>{displayName}</Typography.Text> */}
          </div>

          <div>
            <div className="userName">{displayName}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

