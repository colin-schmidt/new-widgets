import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) { // lets users control click/command click(macs)
      return;
    }
    event.preventDefault(); //this prevents entire page from reloading every time a header link is clicked
    window.history.pushState({}, "", href); //this changes the url to the header element was clicked

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
