import { SidebarItemProps, SidebarProps, SidebarGroupEnum } from '@/utils/type';
import { frontendItems } from './frontend';

const hash: { [key in SidebarGroupEnum]: SidebarItemProps[] } = {
  [SidebarGroupEnum.SYSTEM_DESIGN]: frontendItems,
  [SidebarGroupEnum.BACKEND]: frontendItems,
  [SidebarGroupEnum.FRONTEND]: frontendItems,
};


function getSideBarItems(folder: SidebarGroupEnum): SidebarItemProps[] {
  const items = hash.hasOwnProperty(folder) ? hash[folder] : [];
  return items;
}

export function sidebarGroup(folderSections: {title: string, icon: JSX.Element}[]): SidebarProps[] {
 
  const sidebarItems = folderSections.map(section => {
    return ({
      ...section,
      items: getSideBarItems(section.title as SidebarGroupEnum)
    })
  });
  return sidebarItems;
}