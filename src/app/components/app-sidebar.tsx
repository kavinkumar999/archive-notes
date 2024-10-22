'use client';
import { usePathname, useRouter } from 'next/navigation';
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
import { 
  Code, 
  Layout, 
  Database, 
  Cloud, 
  Lock, 
  Coins, 
  CookingPot, 
  Terminal,
  BookOpen,
  ChevronRight
} from 'lucide-react';

const menuItems = {
  frontend: [
    {
      title: "React Best Practices",
      url: "/frontend/react",
      icon: <Code className="w-5 h-5" />
    },
    {
      title: "UI/UX Patterns",
      url: "/frontend/ui-ux",
      icon: <Layout className="w-5 h-5" />
    },
    {
      title: "Performance Tips",
      url: "/frontend/performance",
      icon: <Coins className="w-5 h-5" />
    },
    {
      title: "Mobile First Design",
      url: "/frontend/mobile",
      icon: <CookingPot className="w-5 h-5" />
    }
  ],
  systemDesign: [
    {
      title: "Database Architecture",
      url: "/system-design/database",
      icon: <Database className="w-5 h-5" />
    },
    {
      title: "Cloud Infrastructure",
      url: "/system-design/cloud",
      icon: <Cloud className="w-5 h-5" />
    },
    {
      title: "Security Patterns",
      url: "/system-design/security",
      icon: <Lock className="w-5 h-5" />
    },
    {
      title: "API Design",
      url: "/system-design/api",
      icon: <Terminal className="w-5 h-5" />
    }
  ]
};

export default function AppSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const isActive = (url: string) => pathname === url;

  return (
    <Sidebar className="min-h-screen">
      <SidebarContent className="bg-background border-r border-border px-3 py-6">
        <SidebarGroup>
          {/* Title Section with Icon */}
          <div className="px-4 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6 text-primary" />
              <SidebarGroupLabel className="text-2xl font-bold text-primary cursor-pointer" onClick={()=> router.push('/')}>
                Expert Notes
              </SidebarGroupLabel>
            </div>
            {/* Separator */}
            <div className="h-px bg-border" />
          </div>
          
          <SidebarGroup className="space-y-8">
            {/* System Design Section */}
            <div className="space-y-4">
              <div className="px-4 flex items-center gap-2">
                <Database className="w-5 h-5 text-muted-foreground" />
                <SidebarGroupLabel className="text-xl font-semibold text-foreground">
                  System Design
                </SidebarGroupLabel>
              </div>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.systemDesign.map((item) => (
                    <SidebarMenuItem 
                      key={item.title}
                      className={`rounded-[--radius] transition-all text-nowrap duration-200`}
                    >
                      <SidebarMenuButton asChild>
                        <a 
                          href={item.url} 
                          className={`
                            flex items-center gap-3 px-4 py-3 text-base font-medium
                            rounded-[--radius] transition-all duration-200
                            group relative
                            ${isActive(item.url) 
                              ? 'text-primary bg-secondary hover:bg-secondary hover:text-primary' 
                              : 'hover:bg-secondary hover:text-primary'
                            }
                          `}
                        >
                          <span>
                            {item.icon}
                          </span>
                          {item.title}
                          {isActive(item.url) && (
                            <ChevronRight className="w-4 h-4 absolute right-2 text-primary" />
                          )}
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </div>


            {/* Frontend Section */}
            <div className="space-y-4">
              <div className="px-4 flex items-center gap-2">
                <Layout className="w-5 h-5 text-muted-foreground" />
                <SidebarGroupLabel className="text-xl font-semibold text-foreground">
                  Front End
                </SidebarGroupLabel>
              </div>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.frontend.map((item) => (
                    <SidebarMenuItem 
                      key={item.title}
                      className={`rounded-[--radius] transition-all text-nowrap duration-200`}
                    >
                      <SidebarMenuButton asChild>
                        <a 
                          href={item.url} 
                          className={`
                            flex items-center gap-3 px-4 py-3 text-base font-medium
                            rounded-[--radius] transition-all duration-200
                            group relative
                            ${isActive(item.url) 
                              ? 'text-primary bg-secondary hover:bg-secondary hover:text-primary' 
                              : 'hover:bg-secondary hover:text-primary'
                            }
                          `}
                        >
                          <span>
                            {item.icon}
                          </span>
                          {item.title}
                          {isActive(item.url) && (
                            <ChevronRight className="w-4 h-4 absolute right-2 text-primary" />
                          )}
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </div>

            
          </SidebarGroup>
          
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}