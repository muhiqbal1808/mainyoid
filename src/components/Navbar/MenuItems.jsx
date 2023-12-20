import Link from "next/link";

const MenuItems = () => {

  const menuItemss = [
    {
      title: "Shop",
      href: "/shop",
    },
    {
      title: "Tournaments",
      href: "/tournament",
    },
    {
      title: "Articles",
      href: "/article",
    },
  ];

  return (
      <ul className="flex flex-col sm:flex-row md:gap-4 sm:gap-2 absolute sm:static top-16 left-4 sm:left-0">
        {menuItemss.map((link, index) => (
          <li key={index} className="sm:mt-0 mt-4 sm:w-full sm:p-0  p-4 hover:scale-105 hover:text-yellow-500 transition-all">
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
  );
};

export default MenuItems;
