import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
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
      <SidebarContent className="sidebar-bg">
        <SidebarGroup>
          <SidebarGroupLabel className="text-3xl font-bold mb-6">Expert Notes</SidebarGroupLabel>
          
          <SidebarGroup>
            <SidebarGroupLabel className="text-2xl font-bold">Front End</SidebarGroupLabel>
            <SidebarGroupContent className="mt-4">
              <SidebarMenu>
              {SystemDesignNotes.map((subItem) => (
                  <SidebarMenuItem key={subItem.title} className="hover:bg-red-700 active:bg-red-700">
                    <SidebarMenuButton asChild>
                      <a href={subItem.url} className="text-lg dark:hover:text-gray-400">
                        {subItem.title}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel className="text-2xl font-bold">System Design</SidebarGroupLabel>
            <SidebarGroupContent className="mt-4">
              <SidebarMenu>
              {SystemDesignNotes.map((subItem) => (
                  <SidebarMenuItem key={subItem.title}>
                    <SidebarMenuButton asChild>
                      <a href={subItem.url} className="text-lg dark:hover:text-gray-400">
                        {subItem.title}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
