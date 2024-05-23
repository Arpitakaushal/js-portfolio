/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/ik.jpeg";

const imageAltText = "desktop with camera and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "JS Project (Integrating REST API)",
    description:
      " This project demonstrates the power of JavaScript by integrating with a REST API. It explores how to fetch, manipulate, and potentially send data to an external API.",
    url: "https://github.com/Arpitakaushal/project3",
  },
  {
    title: "JavaScript Registration Form",
    description:
      "Create a seamless registration experience with this JavaScript-powered form. Validate user input and ensure your data remains secure",
    url: "https://github.com/Arpitakaushal/3-hour-js-project",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://github.com/Arpitakaushal/build-resume",
  },
  {
    title: "Simple and Slick Calculator",
    description:
      " This project is a web-based calculator built with HTML, CSS, and JavaScript. It provides a user-friendly interface for performing basic arithmetic operations like addition, subtraction, multiplication, and division.",
    url: "https://github.com/Arpitakaushal/calcultor/tree/main",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
