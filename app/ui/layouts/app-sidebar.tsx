import * as React from "react";
import { NavMain } from "~/ui/components/navigation/nav-main";
import { NavUser } from "~/ui/components/navigation/nav-user";
import { TeamSwitcher } from "~/ui/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "~/ui/elements/sidebar";
import { SIDEBAR_DATA } from "~/utils/constant/sidebar";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const data = SIDEBAR_DATA;
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
