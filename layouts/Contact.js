import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import { FaEnvelope, FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import ImageFallback from "./components/ImageFallback";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, form_action, phone, mail, location } = frontmatter;

  return (
    <section className="section lg:mt-16">
      <div className="container">
        <div className="relative pb-16 row">
          <ImageFallback
            className="-z-[1] object-cover object-top"
            src={"/images/map.svg"}
            fill="true"
            alt="map bg"
            priority={true}
          />
          <div className="lg:col-6">
            {markdownify(
              title,
              "h1",
              "h1 my-10 lg:my-11 lg:pt-11 text-center lg:text-left lg:text-[64px]"
            )}
          </div>
          <div className="p-6 border rounded contact-form-wrapper border-border dark:border-darkmode-border lg:col-6">
            <h2>
              Send Us A
              <span className="ml-1.5 inline-flex items-center text-purple-600">
                Message
                <BsArrowRightShort />
              </span>
            </h2>
            <form
              className="mt-12 contact-form"
              method="POST"
              action={form_action}
            >
              <div className="mb-6">
                <label className="block mb-2 font-secondary" htmlFor="name">
                  Full name
                  <small className="text-sm text-purple-600 font-secondary">
                    *
                  </small>
                </label>
                <input
                  className="w-full form-input"
                  name="name"
                  type="text"
                  placeholder="Thomas Milano"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 font-secondary" htmlFor="email">
                  Email Address
                  <small className="text-sm text-purple-600 font-secondary">
                    *
                  </small>
                </label>
                <input
                  className="w-full form-input"
                  name="email"
                  type="email"
                  placeholder="example@gmail.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 font-secondary" htmlFor="subject">
                  Subject
                  <small className="text-sm text-purple-600 font-secondary">
                    *
                  </small>
                </label>
                <input
                  className="w-full form-input"
                  name="subject"
                  type="text"
                  placeholder="Blog advertisement"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 font-secondary" htmlFor="message">
                  Your Message Here
                  <small className="text-sm text-purple-600 font-secondary">
                    *
                  </small>
                </label>
                <textarea
                  className="w-full form-textarea"
                  placeholder="Hello I’m Mr ‘x’ from………….."
                  rows="7"
                />
              </div>
              <input
                className="btn btn-primary"
                type="submit"
                value="Send Now"
              />
            </form>
          </div>
        </div>
        <div className="row">
          {phone && (
            <div className="md:col-6 lg:col-4">
              <Link
                href={`tel:${phone}`}
                className="my-4 flex h-[100px] items-center justify-center
             rounded border border-border p-4 text-purple-600 dark:border-darkmode-border"
              >
                <FaUserAlt />
                <p className="ml-1.5 text-lg font-bold text-dark dark:text-darkmode-light">
                  {phone}
                </p>
              </Link>
            </div>
          )}
          {mail && (
            <div className="md:col-6 lg:col-4">
              <Link
                href={`mailto:${mail}`}
                className="my-4 flex h-[100px] items-center justify-center
             rounded border border-border p-4 text-purple-600 dark:border-darkmode-border"
              >
                <FaEnvelope />
                <p className="ml-1.5 text-lg font-bold text-dark dark:text-darkmode-light">
                  {mail}
                </p>
              </Link>
            </div>
          )}
          {location && (
            <div className="md:col-6 lg:col-4">
              <span
                className="my-4 flex h-[100px] items-center justify-center
             rounded border border-border p-4 text-purple-600 dark:border-darkmode-border"
              >
                <FaMapMarkerAlt />
                <p className="ml-1.5 text-lg font-bold text-dark dark:text-darkmode-light">
                  {location}
                </p>
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
