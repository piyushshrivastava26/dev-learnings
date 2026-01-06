import { useDispatch } from "react-redux";
import "./App.css";
import { useEffect, useState } from "react";
import authService from "./appwrite/authentication";
import { login, logout } from "./Store/authenticationSlice";
import { Header, Footer } from "./Components";

function App() {
  // console.log(process.env.REACT_APP_APPWRITE_URL)
  // console.log(import.meta.env.VITE_APPWRITE_URL);
  // console.log(import.meta.env.VITE_PROJECT_ID);

  const dispatch = useDispatch;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      // .catch(() => {})
      // .catch((error) => {
      //   console.error("Error fetching user data:", error)
      //   setError("Failed to load user data.")
      // })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div>
      <div>
        <Header />
        <main>
          <h1>Working on a project of react</h1>
          <h2>devDiary.</h2>
          <h4>pages to explore for deves</h4>
        </main>
        <Footer />
      </div>
    </div>
  ) : null;

  // return (
  //   <>
  //     <h1>Working on a project of react</h1>
  //     <h2>devDiary.</h2>
  //     <h4>pages to explore for deves</h4>
  //   </>
  // )
}

export default App;
