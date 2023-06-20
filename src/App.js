import New from "./pages/new/New";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/theme/darkModeContext";
import DefaultLayout from "./layout/defaultLayout/DefaultLayout";
import { publicRoutes } from "./routes/routes";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthProvider from "./context/authentication/authProvider";
import AppProvider from "./context/authentication/appProvider";
import { ConfigProvider } from "antd";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <Router>
      <AuthProvider>
        <AppProvider>
          <div className={darkMode ? "app dark" : "app"}>
            <Routes>
              {publicRoutes.map((route, index) => {
                const Page = route.component;
                let Layout = DefaultLayout;
  
                if (route.layout) {
                  Layout = route.layout;
                } else if (route.layout === null) {
                  Layout = DefaultLayout;
                }
  
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <ConfigProvider
                        theme={{
                          token: {
                            colorPrimary: '#6439ff'
                          }
                        }}
                      >
                        <Layout>
                          <Page />
                        </Layout>
                      </ConfigProvider>
                    }
                  />
                );
              })}
            </Routes>
          </div>
        </AppProvider>
      </AuthProvider>
    </Router>

  );
}

export default App;
