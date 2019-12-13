import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faPenSquare,
  faUser,
  faTh,
  faPhoneSquare,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"

import {
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

const Sidebar = () => {
  const menu = [
    {
      name: "Home",
      link: "/",
      icon: faHome,
    },
    {
      name: "Blog",
      link: "/blog",
      icon: faPenSquare,
    },
    {
      name: "About",
      link: "/about",
      icon: faUser,
    },
    {
      name: "Project",
      link: "/project",
      icon: faTh,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: faPhoneSquare,
    },
  ]

  const iconLink = [
    {
      link: "https://twitter.com/rifaldhiaw",
      icon: faTwitter,
    },
    {
      link: "https://www.instagram.com/rifaldhiaw/",
      icon: faInstagram,
    },
    {
      link: "https://github.com/rifaldhiaw/",
      icon: faGithub,
    },
    {
      link: "mailto:rifaldhiaw@gmail.com",
      icon: faEnvelope,
    },
  ]
  return (
    <div>
      <nav>
        <ul className="mx-0 my-8">
          {menu.map((val, index) => {
            return (
              <MenuList
                link={val.link}
                icon={val.icon}
                name={val.name}
                index={index}
              ></MenuList>
            )
          })}
        </ul>
      </nav>

      <div>
        {iconLink.map((val, index) => {
          return (
            <>
              <LinkIcon icon={val.icon} link={val.link} key={index}></LinkIcon>
              {index === 1 && <br />}
            </>
          )
        })}
      </div>
    </div>
  )
}

const MenuList = ({ link, icon, name, index }) => {
  return (
    <li className="list-none my-4" key={index}>
      <Link
        className="text-black rounded-full py-2 px-6 font-bold text-md no-underline hover:bg-yellow-200"
        activeClassName="text-link py-2 px-6"
        to={link}
      >
        <FontAwesomeIcon icon={icon} className="mr-3" />
        {name}
      </Link>
    </li>
  )
}

const LinkIcon = ({ icon, link }) => {
  return (
    <div className="m-3 inline-block">
      <a
        className="bg-yellow-400 text-black rounded text-center py-2 px-3"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={icon} className="" />
      </a>
    </div>
  )
}

export default Sidebar
