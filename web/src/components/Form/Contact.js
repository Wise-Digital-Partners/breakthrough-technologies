import React, { Component } from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";

import ButtonSolid from "../Button/ButtonSolid";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const StyledForm = styled.div`
  .field {
    ${tw`mb-5`}
  }
  .label {
    ${tw`text-sm font-medium text-gray-900 block mb-1`}
  }
  [multiple],
  [type="date"],
  [type="datetime-local"],
  [type="email"],
  [type="month"],
  [type="number"],
  [type="password"],
  [type="search"],
  [type="tel"],
  [type="text"],
  [type="time"],
  [type="url"],
  [type="week"],
  select,
  textarea {
    ${tw`w-full bg-transparent px-4 py-3 border border-solid border-gray-200 rounded-sm focus:border-blue-300 focus:ring-blue-300`}
  }
  select {
    &:invalid {
      ${tw`text-opacity-60`}
    }
  }
`;

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(
        () =>
          (document.getElementById("contact-form-ajax-response").innerHTML =
            "Thank you for contacting us! We will get in touch with you shortly."),
        form.remove(),
        (window.dataLayer = window.dataLayer || []),
        window.dataLayer.push({
          event: "contactFormSubmission",
        })
      )
      .catch((error) => alert(error));
  };

  render() {
    return (
      <StyledForm>
        <div id="contact-form-ajax-response"></div>
        <form
          name="Contact"
          method="post"
          action=""
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="Contact" />
          <div hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </div>

          <div className="field">
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              id="name"
              required={true}
            />
          </div>

          <div className="field">
            <label className="label" htmlFor="company-name">
              Company Name
            </label>
            <input
              type="text"
              name="company-name"
              onChange={this.handleChange}
              id="company-name"
              required={true}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6 w-full">
            <div className="field">
              <label className="label" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                onChange={this.handleChange}
                id="phone"
                required={true}
              />
            </div>
            <div className="field">
              <label className="label" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                onChange={this.handleChange}
                id="email"
                required={true}
              />
            </div>
          </div>

          {/* <div className="field">
            <label className="label" htmlFor="service-select">
              What Can We Help You With?
            </label>
            <select
              name="service-select"
              id="service-select"
              onBlur={this.handleChange}
              required={true}
            >
              <option value="" disabled defaultValue>
                Select one...
              </option>
              <option value="Estate Planning">Estate Planning</option>
              <option value="Business Advising">Business Advising</option>
              <option value="Long Term Care Planning">
                Long Term Care Planning
              </option>
              <option value="Other">Other</option>
            </select>
          </div> */}

          <div className="field">
            <label className="label" htmlFor="message">
              Message (optional)
            </label>
            <textarea
              className="textarea"
              name="message"
              onChange={this.handleChange}
              id="message"
              rows="4"
              required={false}
            />
          </div>

          <div className="mt-2">
            <ButtonSolid as="button" type="submit" text="Submit" />
          </div>
        </form>
      </StyledForm>
    );
  }
}
