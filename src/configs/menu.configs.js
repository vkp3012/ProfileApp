import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SchoolIcon from '@mui/icons-material/School';
import InfoIcon from '@mui/icons-material/Info';
import ContactsIcon from '@mui/icons-material/Contacts';
import BallotIcon from '@mui/icons-material/Ballot';

const main = [
    {
        id : 1,
        display : "home",
        path : "/",
        icon : <HomeOutlinedIcon/>,
        state : "home"
    },
    {
        id : 2,
        display : "education",
        path : "/education",
        icon : <SchoolIcon/>,
        state : "education"
    },
    {
        id : 3,
        display : "project",
        path : "/project",
        icon : <BallotIcon/>,
        state : "project"
    },
    {
        id : 4,
        display : "about",
        path : "/about",
        icon : <InfoIcon/>,
        state : "home"
    },
    {
        id : 5,
        display : "contact",
        path : "/contact",
        icon : <ContactsIcon/>,
        state : "contact"
    }
]

const menuConfigs = { main }
export default menuConfigs