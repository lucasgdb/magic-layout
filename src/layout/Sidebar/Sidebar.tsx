import { useNavigate } from "react-router-dom";
import { SidebarContainer } from "./Sidebar.styles";

export function Sidebar() {
  const navigate = useNavigate();

  return (
    <SidebarContainer>
      <button onClick={() => navigate("/")}>Principal</button>
      <button onClick={() => navigate("/scrollable")}> Usando Scrollbar</button>
      <button onClick={() => navigate("/centralizing")}>Centralizando</button>
    </SidebarContainer>
  );
}
