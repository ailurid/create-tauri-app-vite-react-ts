import { FunctionComponent } from "react";
import { AppShell, Navbar, Header, Footer } from "@mantine/core";
import { MainContent } from "../content/MainContent";
import { SidebarContent } from "../content/SidebarContent";
import { HeaderContent } from "../content/HeaderContent";
import { FooterContent } from "../content/FooterContent";

export const App: FunctionComponent = () => {
  const header = (
    <Header height={40} p="md">
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <HeaderContent />
      </div>
    </Header>
  );

  const navbar = (
    <Navbar p="md" width={{ sm: 300, lg: 300 }}>
      <SidebarContent />
    </Navbar>
  );

  const footer = (
    <Footer height={60}>
      <FooterContent />
    </Footer>
  );

  return (
    <AppShell
      // navbarOffsetBreakpoint="sm"
      fixed
      header={header}
      navbar={navbar}
      footer={footer}
    >
      <MainContent />
    </AppShell>
  );
};
