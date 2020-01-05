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

const Menubar = () => {
  return (
    <div className="flex justify-between bg-white pt-2 z-10">
      <nav className="w-full md:w-auto">
        <ul className="flex justify-between mx-0 mb-0">
          {menu.map(val => {
            return <MenuList link={val.link} icon={val.icon} name={val.name} />
          })}
        </ul>
      </nav>

      <div className="hidden sm:flex sm:justify-end ">
        <div>
          {iconLink.map((val, index) => {
            return <LinkIcon icon={val.icon} link={val.link} key={index} />
          })}
        </div>

        <div className="pt-1 pb-3 px-3">
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
    <li className="list-none" key={name}>
      <Link
        className="py-3 px-5 font-bold text-black text-sm border-solid border-0 border-b-4 border-transparent hover:border-yellow-400"
        activeClassName="border-solid border-0 border-b-4 border-yellow-400"
        to={link}
      >
        <FontAwesomeIcon icon={icon} className="text-sm lg:mr-3" />
        <span className="hidden lg:inline">{name}</span>
      </Link>
    </li>
  )
}

const LinkIcon = ({ icon, link }) => {
  return (
    <div className="mb-3 mx-1 lg:mx-2 inline-block">
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
