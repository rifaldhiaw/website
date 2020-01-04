import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faPenSquare,
  faUser,
  faTh,
  faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons"

import {
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

const Menubar = () => {
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
  ]

  return (
    <div className="flex justify-between">
      <nav>
        <ul className="flex mx-0">
          {menu.map(val => {
            return <MenuList link={val.link} icon={val.icon} name={val.name} />
          })}
        </ul>
      </nav>

      <div className="flex">
        {iconLink.map((val, index) => {
          return <LinkIcon icon={val.icon} link={val.link} key={index} />
        })}

        <div className="p-3">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round" />
          </label>
        </div>
      </div>
    </div>
  )
}

const MenuList = ({ link, icon, name }) => {
  return (
    <li className="list-none my-4" key={name}>
      <Link
        className="py-2 px-5 font-bold text-black text-sm border-solid border-0 border-b-4 border-transparent hover:border-yellow-400"
        activeClassName="border-solid border-0 border-b-4 border-yellow-400"
        to={link}
      >
        <FontAwesomeIcon icon={icon} className="text-sm mr-3" />
        {name}
      </Link>
    </li>
  )
}

const LinkIcon = ({ icon, link }) => {
  return (
    <div className="m-3 inline-block">
      <a
        className="text-black text-center py-2 px-3"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={icon} className="text-md" />
      </a>
    </div>
  )
}

export default Menubar
