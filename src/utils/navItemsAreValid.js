export default function navItemsAreValid (navItems) {
  // TODO: Disable debug logging or hide behind DEBUG global flag
  console.log(`checking navItems:`, navItems);

  if (!navItems || !Array.isArray(navItems)) return false;

  for (let i = 0; i < navItems.length; i++) {
    const currentNavItem = navItems[i];

    console.log(`Checking currentNavItem:`, currentNavItem);

    if (!currentNavItem.label || !currentNavItem.action) {
      console.log(`currentNavItem isn't valid.`);
      return false;
    }; 
  }

  return true;
}
