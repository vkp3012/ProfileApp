import Home from "../pages/Home";
import Education from "../pages/Eduction";
import About from "../pages/About";
import Project from "../pages/Project";
import Contact from "../pages/Contact";
import Blog from "../components/common/BlogContect.js";

export const routesGen = {
    home : "/",
    education : "/eduction",
    about : "/about",
    project : "/project",
    contact : "/contact"
}

const routes = [
    {
        index:true,
        element : <Home/>,
        state:"home"
    },
    {
        path:"/education",
        element:<Education/>,
        state : "education"
    },
    {
        path:"/project",
        element:<Project/>,
        state : "project"
    },
    {
        path:"/about",
        element:<About/>,
        state : "about"
    },
    {
        path:"/contact",
        element:<Contact/>,
        state : "contact"
    },
    {
        path:"/blog",
        element:<Blog/>,
        state : "blog"
    }
]

export default routes