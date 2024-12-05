import { BrowserRouter as Router } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AppRoutes from "./AppRoutes";

const App = () => {
  return (
    <Router>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </Router>
  );
};

export default App;
