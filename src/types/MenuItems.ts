type MenuItem = {
  title: string;
  path: string;
  id: string;
};

export enum MenuLinkType {
  home = "home",
  products = "products",
  services = "services",
  about = "about",
}

const menuItems: Array<MenuItem> = [
  {
    title: "Home",
    path: "/",
    id: MenuLinkType.home,
  },
  {
    title: "Produtos",
    path: "/",
    id: MenuLinkType.products,
  },
  {
    title: "Serviços",
    path: "/",
    id: MenuLinkType.services,
  },
  {
    title: "Sobre Nós",
    path: "/",
    id: MenuLinkType.about,
  },
];

export default menuItems;
