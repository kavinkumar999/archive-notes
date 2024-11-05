import { SidebarItemProps, SidebarProps, SidebarGroupEnum } from '@/utils/type';
import { jsItems, reactItems, domItems, systemDesignItems, databaseItems } from '@/utils/item-util';

const hash: { [key in SidebarGroupEnum]: SidebarItemProps[] } = {
  [SidebarGroupEnum.HLD]: systemDesignItems,
  [SidebarGroupEnum.JAVASCRIPT]: jsItems,
  [SidebarGroupEnum.REACT]: reactItems,
  [SidebarGroupEnum.DOM]: domItems,
  [SidebarGroupEnum.DATABASE]: databaseItems,
  [SidebarGroupEnum.BACKEND]: [],
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