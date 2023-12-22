import { BrowserRouter } from "react-router-dom";
import { PageContainer } from "./layout/PageContainer/PageContainer";
import { ApplicationRoutes } from "./routes/router";

function App() {
  return (
    <BrowserRouter>
      <PageContainer>
        <ApplicationRoutes />
      </PageContainer>
    </BrowserRouter>
  );
}

export default App;
