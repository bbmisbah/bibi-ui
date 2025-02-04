import React from "react";
import { Grid } from "@bibi-ui/grid";
import { Link } from "react-router-dom";

export const ComponentsPage: React.FC = () => {
    const componentsData = [
        {
          name: "Button",
          image: "https://component.gallery/static/6c328145b09763aaf5debda0c2dbf266/Button%20Icon..svg",
          description: "Button is a component used to trigger an action or event",
          route: "/button",
        },
        {
          name: "Header",
          image: "https://component.gallery/static/8da6484bc584b46766a4b7fd8fcf3b1c/Header%20Icon..svg",
          description: "An element that appears across the top of all pages on a website or application.",
          route: "/header",
        },
        {
          name: "Navbar",
          image: "https://component.gallery/static/a64c877443e412accdea0de33931d076/Navigation%20Icon..svg",
          description: "Navbar is used to show a navigation bar on the top of the page.",
          route: "/navbar",
        },
        {
          name: "Footer",
          image: "https://component.gallery/static/11425a32dd05c91dd4e441c4f8dc4f54/Footer%20Icon..svg",
          description: "Footer is used at the bottom of the page to display copyright and legal information or links to related content.",
          route: "/footer",
        },
        {
          name: "Hero",
          image: "https://component.gallery/static/e52c057ca09f2da159fb45b11a5ed204/Hero%20i%20icon..svg",
          description: "Hero is a large banner, usually appearing as one of the first items on a page; it often contains a full-width image.",
          route: "/hero",
        },
        {
          name: "Grid",
          image: "https://component.gallery/static/252d744b1c127db6f89bba94c55f600c/Table%20Icon..svg",
          description: "Grid is a layout for managing grid layouts",
          route: "/grid",
        },
      ];
    
      console.log("Grid", Grid);
      const componentsWithLinks = componentsData.map((component) => ({
        ...component,
        link: (
          <Link to={component.route} style={{ textDecoration: "none", color: "inherit" }}>
            {component.name}
          </Link>
        ),
      }));

  
  return (
    <div style={{ padding: "2rem"}}>
      <h1 style={{textAlign: "center" }}>Components</h1>
      <p style={{textAlign: "center" }}>Explore all the reusable components of Bibi-UI.</p>
      <Grid columns={3} gap="1.5rem" components={componentsWithLinks} />
    </div>
  );
};