import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Layout from "./components/DefaultLayout/DefaultLayout";
import { publicRoutes } from "./routes/routes";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <Router>

      <div className={darkMode ? "app dark" : "app"}>
        {/* <BrowserRouter>
        <Routes>
          <Layout>
            <Route path="/">
               <Route index element={<Home />} /> */}
        {/* <Route path="login" element={<Login />} />  */}
        {/* <Route path="users">
                <Route index element={<List />} />
                <Route path=":userId" element={<Single />} />
                <Route
                  path="new"
                  element={<New inputs={userInputs} title="Add New User" />}
                />
              </Route> */}
        {/* <Route path="barchart" element={<Barchart/>} />
              <Route path="products">
                <Route index element={<List />} />
                <Route path=":productId" element={<Single />} />
                <Route
                  path="new"
                  element={<New inputs={productInputs} title="Add New Product" />}
                />
              </Route> */}
        {/* </Route>
          </Layout>
        </Routes>
      </BrowserRouter> */}

          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;

              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
      </div>
    </Router>

  );
}

export default App;
