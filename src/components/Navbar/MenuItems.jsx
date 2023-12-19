import Link from "next/link";

const MenuItems = () => {

  const menuItemss = [
    {
      title: "Features",
      href: "/features",
    },
    {
      title: "About Us",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  return (
      <ul className="flex flex-col sm:flex-row gap-4">
        {menuItemss.map((link, index) => (
          <li key={index}>
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
  );
};

export default MenuItems;
