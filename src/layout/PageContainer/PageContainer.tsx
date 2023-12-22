import { Sidebar } from "../Sidebar/Sidebar";
import { Topbar } from "../Topbar/Topbar";
import {
  AppContainer,
  BodyContainer,
  InnerContainer,
  OuterContainer,
} from "./PageContainer.styles";
import type { PageContainerProps } from "./PageContainer.types";

export function PageContainer(props: PageContainerProps) {
  return (
    <AppContainer>
      <Topbar />

      <BodyContainer>
        <Sidebar />

        <OuterContainer>
          <InnerContainer {...props} />
        </OuterContainer>
      </BodyContainer>
    </AppContainer>
  );
}
