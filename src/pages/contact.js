import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const ContactPage = ({ location, data }) => {
  const siteTitle = data.site.siteMetadata.title

  const contactLink = [
    {
      link: "https://twitter.com/rifaldhiaw/",
      icon: faTwitter,
      name: "twitter.com/rifaldhiaw",
    },
    {
      link: "https://www.instagram.com/rifaldhiaw/",
      icon: faInstagram,
      name: "instagram.com/rifaldhiaw",
    },
    {
      link: "https://github.com/rifaldhiaw/",
      icon: faGithub,
      name: "github.com/rifaldhiaw",
    },
    {
      link: "mailto:rifaldhiaw@gmail.com",
      icon: faEnvelope,
      name: "rifaldhiaw@gmail.com",
    },
  ]

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="Contact me"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <h2>Contact me</h2>
      <div className="flex mt-8">
        <section className="w-full xl:w-3/4 xl:pr-8">
          <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 px-2">
                <label
                  className="block font-bold mb-2 text-xs uppercase"
                  htmlFor="first-name"
                >
                  Name
                </label>

                <input
                  className="appearance-none block text-xs bg-gray-100 mb-6 px-3 py-1 rounded-lg text-gray-700 w-full border-1 border-solid border-gray-200 focus:shadow-outline outline-none"
                  name="name"
                  placeholder="Youe name ..."
                  type="text"
                />
              </div>

              <div className="w-full md:w-1/2 px-2">
                <label
                  className="block font-bold mb-2 text-xs uppercase"
                  htmlFor="email"
                >
                  Email
                </label>

                <input
                  className="appearance-none block text-xs bg-gray-100 mb-6 px-3 py-1 rounded-lg text-gray-700 w-full border-1 border-solid border-gray-200 focus:shadow-outline outline-none"
                  name="email"
                  type="email"
                  placeholder="example@mail.com"
                />
              </div>
            </div>

            <div className="px-2">
              <label
                className="block font-bold mb-2 text-xs uppercase"
                htmlFor="message"
              >
                Message
              </label>

              <textarea
                className="appearance-none block text-xs bg-gray-100 mb-6 px-3 py-1 rounded-lg text-gray-700 w-full border-1 border-solid border-gray-200 focus:shadow-outline outline-none"
                placeholder="Say something..."
                name="message"
                rows="8"
              />

              <button className="bg-yellow-500 font-bold px-4 py-2 rounded text-sm cursor-pointer border-0 hover:bg-yellow-400">
                Submit
              </button>
            </div>
          </form>
        </section>
        <section className="w-full xl:w-1/4 mt-4">
          <div className="flex flex-wrap">
            {contactLink.map(contact => {
              return (
                <a
                  className="w-full my-4"
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex pl-4 items-center h-8 text-black text-sm border-solid border-0 border-l-4 border-yellow-400 bg-yellow-200 hover:bg-yellow-400">
                    <div>
                      <FontAwesomeIcon
                        icon={contact.icon}
                        className="text-md"
                      />
                      <span className="ml-4">{contact.name}</span>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default ContactPage

export const contactPageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
