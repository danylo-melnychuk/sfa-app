import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { NavigationRoutes } from "./components/helpers/route";
import { Loader } from "./components/Loader/Loader";
import { Navigation } from "./components/Navigation/Navigation";

// const Loading = () => {
//   return (
//     <>
//       <div>PreLoad</div>
//     </>
//   );
// };
function App() {
  return (
    <>
      <Navigation>
        <Suspense fallback={<Loader />}>
          <Routes>
            {NavigationRoutes.map((x) => (
              <Route key={x.id} path={x.path} element={<x.component />} />
            ))}
          </Routes>
        </Suspense>
      </Navigation>
    </>
  );
}

export default App;
