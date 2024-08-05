import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import context from "./context";

const ContextProvider = ({ children }) => {
  const [menuStatus, setMenuStatus] = useState(false);
  const [menuStatus111, setMenuStatus111] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [currentActive, setCurrentActive] = useState("#home");

  const { pathname } = useRouter();

  const toggleMenu = (value) => {
    setMenuStatus((preMenuStatus) =>
      typeof value === "boolean" ? value : !preMenuStatus
    );
  };
  const toggleMenu111 = (value) => {
    setMenuStatus111((preMenuStatus111) =>
      typeof value === "boolean" ? value : !preMenuStatus111
    );
  };

  const toggleSearch = () => {
    setOpenSearch((preSearch) => !preSearch);
  };

  useEffect(() => {
    toggleMenu(false);
    toggleMenu111(false);
  }, [pathname]);

  const value = {
    menuStatus,
    menuStatus111,
    openSearch,
    toggleMenu,
    toggleMenu111,
    toggleSearch,
    currentActive,
    setCurrentActive,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
};

export default ContextProvider;
