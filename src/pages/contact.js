import React from "react"
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
      <div className="w-full md:w-3/4">
        <h2>Contact me</h2>
        <section>
          <p className="mb-3">
            I am not the guy whos always active in social media, but sure I
            still have them. Feel free to contact me via my social media.
          </p>
          <div className="flex flex-wrap">
            {contactLink.map(contact => {
              return (
                <a
                  className="w-full md:w-1/2 my-1"
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-yellow-400 rounded-full mr-5 text-black px-4 py-1 text-sm hover:bg-yellow-200">
                    <FontAwesomeIcon icon={contact.icon} />
                    <span className="ml-4">{contact.name}</span>
                  </div>
                </a>
              )
            })}
          </div>
        </section>
        <section className="mt-8">
          <p>Or u can just simply use form below to contact me:</p>
          <form name="contact" method="POST" data-netlify="true">
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
