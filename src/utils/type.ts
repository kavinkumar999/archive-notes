export interface SidebarItemProps { name: string, url: string };

export interface SidebarProps { title: string, icon: JSX.Element, items: SidebarItemProps[] }[];

export enum SidebarGroupEnum {
  'SYSTEM_DESIGN' = 'System Design',
  'BACKEND' = 'Backend',
  'FRONTEND' = 'Frontend'
}