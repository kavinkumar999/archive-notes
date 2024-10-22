import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";


const SystemDesignNotes = [
  {
    title: "Sub Item 1",
    url: "/sub-item-1",
  },
  {
    title: "Sub Item 2",
    url: "/sub-item-2",
  },
  {
    title: "Sub Item 3",
    url: "/sub-item-3",
  },
];

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg">Expert Notes</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <span>Front End Notes</span>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  {SystemDesignNotes.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <a href={subItem.url}>
                          <span>{subItem.title}</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <span>System Design Notes</span>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  {SystemDesignNotes.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <a href={subItem.url}>
                          <span>{subItem.title}</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
