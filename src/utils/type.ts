export interface SidebarItemProps { name: string, url: string };

export interface SidebarProps { title: string, icon: JSX.Element, items: SidebarItemProps[] };

export enum SidebarGroupEnum {
  'HLD' = 'HLD',
  'TEMPLATES' = 'Templates',
  'JAVASCRIPT' = 'JavaScript',
  'REACT' = 'React',
  'DOM' = 'DOM',
  'LLD' = 'LLD',
  'DATABASE' = 'Database',
  'SYSTEM_DESIGN' = 'System Design'
}
