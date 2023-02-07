import { Header } from "../Header/Header";
import "./Navigation.css";

export const Navigation = ({ ...props }) => (
  <div className="navigation-wrapper">
    <Header />
    <div className="body-wrapper">{props.children}</div>
  </div>
);
