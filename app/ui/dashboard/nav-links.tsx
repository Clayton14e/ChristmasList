import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'People', 
    href: '/dashboard', 
    icon: UserGroupIcon 
  },
  {
    name: 'Gifts',
    href: '/dashboard/gifts',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Budget', 
    href: '/dashboard/budget', 
    icon: CurrencyDollarIcon 
  },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <a
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-green-100 hover:text-green-500 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </a>
        );
      })}
    </>
  );
}
