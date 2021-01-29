import Component from "./types/Component";

export const ProductComponent = new Component([], "src/components/Product.css");
export const SliderComponent = new Component([], "src/components/Slider.css");
export const SearchBarComponent = new Component(
  [],
  "src/components/SearchBar.css"
);
export const SalesComponent = new Component(
  [ProductComponent],
  "src/components/Sales.css"
);

export const HeaderComponent = new Component([], "src/components/Header.css");
export const NavBarComponent = new Component(
  [SearchBarComponent],
  "src/components/NavBar.css"
);
export const MainComponent = new Component(
  [SliderComponent, SalesComponent],
  "src/components/Main.css"
);
export const FooterComponent = new Component([], "src/components/Footer.css");

export const HomePageComponent = new Component([
  HeaderComponent,
  NavBarComponent,
  MainComponent,
  FooterComponent,
]);

const AppComponent = new Component([HomePageComponent], "src/App.css");

export default AppComponent;
