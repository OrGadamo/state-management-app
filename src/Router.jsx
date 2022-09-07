import { Route, Routes } from "react-router-dom";
import { Home, CounterPage } from "./components/pages/index";
import CounterProvider from "./context/Counter-context";
export default function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <CounterProvider>
            <CounterPage />
          </CounterProvider>
        }
      />
      <Route path="home" element={<Home />} />
    </Routes>
  );
}
