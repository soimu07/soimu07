import React, { useState, useContext } from "react";
import styles from "./home.scss";
import SlideShow from "../../components/slide-show/";
import ToDoList from "../../components/to-do-list";
import List from "../../components/list";
import Game from "../../components/game";
import Package from "../../components/package";
import PackageContent from "../../components/package-content";
import ResponsiveContext from "../../context/responsive.context";
import Countries from "../../components/countries";
import Calculator from "../../components/calculator";

const Home = ({ history }) => {
  const [activeId, setActiveId] = useState("Option1");
  const { isAtLeastTablet } = useContext(ResponsiveContext);
  const redirectToPage = (page) => {
    history.push(page);
  };

  return (
    <div className={styles.homeContainer}>
      <SlideShow></SlideShow>
      <Calculator></Calculator>
      <Countries></Countries>
      <section className={styles.packagesContainer}>
        <Package
          title="Option1"
          onSelect={() => setActiveId("Option1")}
          id="Option1"
          active={activeId === "Option1" || isAtLeastTablet}
        >
          <PackageContent
            buttonText="read more"
            onButtonClick={() => redirectToPage("/contact")}
          />
        </Package>
        <Package
          title="Option2"
          id="Option2"
          onSelect={() => setActiveId("Option2")}
          active={activeId === "Option2" || isAtLeastTablet}
        >
          <PackageContent
            buttonText="products"
            onButtonClick={() => redirectToPage("/products")}
          />
        </Package>
        <Package
          title="Option3"
          id="Option3"
          onSelect={() => setActiveId("Option3")}
          active={activeId === "Option3" || isAtLeastTablet}
        >
          <PackageContent
            buttonText="home"
            onButtonClick={() => redirectToPage("/")}
          />
        </Package>
      </section>
      <Game />
      <ToDoList></ToDoList>
      <List></List>
      <section className={styles.howToFindUsContainer} />
    </div>
  );
};
export default Home;
