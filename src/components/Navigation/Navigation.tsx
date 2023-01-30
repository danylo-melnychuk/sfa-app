import { Header } from "../Header/Header";

export const Navigation = ({ ...props }) => {

  return (
    <div className="navigation-wrapper">
      <Header />
      <div className="body-wrapper">
        {props.children}
      </div>
    </div>
  );
};
