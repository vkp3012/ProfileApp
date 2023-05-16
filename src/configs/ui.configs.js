const uiConfigs = {
    style : {
        gradientByImage : {
            dark : {
                backgroundImage : "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))"
            },
            light : {
                backgroundImage : "linear-gradient(to top, rgba(245,245,245,1), rgba(0,0,0,0))"
            }
        },
        horizontalGradientByImage : {
            dark : {
                backgroundImage : "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))"
            },
            light : {
                backgroundImage : "linear-gradient(to top, rgba(245,245,245,1), rgba(0,0,0,0))"
            }
        },
        typoLines : (lines,textAlign) => ({
            testAlign : textAlign || "justify",
            display : "-webkit-box",
            overflow : "hidden",
            webkitBoxOrient : "vertical",
            webkitLineClamp : lines
        }),
        mainContent : {
            maxWidth : "1366px",
            margin : "auto",
            padding : 2
        },
        backgroundImage : (imgPath) => ({
            position : "relative",
            backgroundSize : "cover",
            backgroundPosition : "center",
            backgroundColor : "darkGray",
            backgroundImage : `url(${imgPath})`
        })
    },
    size : {
        sidebarWidth : "30px",
        contentMaxWidth : "1366px"
    }

}

export default uiConfigs