import './App.css';
import { ThemeProvider} from '@mui/material/styles';
import { ToastContainer } from "react-toastify";
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import themeConfigs from './configs/theme.configs';
import MainLayout from './components/mainLayout/MainLayout';
import routes from "./routes/routes"
import PageWrapper from "./components/common/PageWrapper"

import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function App() {
  const { themeMode } = useSelector((state) => state.themeMode);

  return (
      <ThemeProvider theme={themeConfigs.custom({ mode: themeMode })}>
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          pauseOnHover
          theme={themeMode}
        />
        <CssBaseline />
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<MainLayout />}>
                  {routes.map((route, index) => (
                    route.index ? (
                      <Route
                        index
                        key={index}
                        element={route.state ? (
                          <PageWrapper state={route.state}>{route.element}</PageWrapper>
                        ) : route.element}
                      />
                    ) : (
                      <Route
                        path={route.path}
                        key={index}
                        element={route.state ? (
                          <PageWrapper state={route.state}>{route.element}</PageWrapper>
                        ) : route.element}
                      />
                    )
                  ))}
                </Route>
            </Routes>
          </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
