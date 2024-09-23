import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; // Import Yup for schema validation
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function Forms() {
  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[aA-zZ\s]+$/, "Only letters and spaces are allowed") // Ensure only letters and spaces
      .min(2, "Name must be at least 2 characters") // Minimum length
      .max(50, "Name must be less than 50 characters") // Maximum length
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format") // Check for valid email format
      .required("Email is required") // Required field
      .matches(
        /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/,
        "Email must be from gmail.com or yahoo.com"
      ), // Restrict to specific domains
    age: Yup.number().max(110, "nobody age is higher than 110").nullable(), //
    currentRole: Yup.string()
      .oneOf(
        [
          "Student",
          "Full Time Job",
          "Full Time Learner",
          "Prefer not to say",
          "Other",
        ],
        "You entered an invalid option"
      )
      .required("Current role is required"),
    userRecomend: Yup.string()
      .oneOf(["Definitely", "Maybe", "Not sure"])
      .required(),
    mostLike: Yup.string()
      .oneOf(["challenges", "projects", "community", "open source"])
      .required(),
    prefer: Yup.array().required(),
    comments: Yup.string()
      .max(500, "Comments must be 500 characters or less") // Maximum length validation
      .nullable(),
  });
  return (
    <Formik
      initialValues={{
        email: "",
        name: "",
        age: 0,
        currentRole: "",
        userRecomend: "Definitely",
        mostLike: "",
        prefer: "",
        comments: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, touched, errors }) => {
        return (
          <Form className="p-3">
            <div className="mb-3">
              {" "}
              <label htmlFor="form-name" className="form-label">
                Name
              </label>
              <Field
                id="form-name"
                type="text"
                name="name"
                className="form-control"
              />
              {touched.name && errors.name && (
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-danger form-text"
                />
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="form-email" className="form-label">
                Email
              </label>
              <Field
                id="form-email"
                type="email"
                name="email"
                className="form-control"
              />
              {touched.email && errors.email && (
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger form-text"
                />
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="form-age" className="form-label">
                Age(optional)
              </label>
              <Field
                id="form-age"
                type="number"
                name="age"
                className="form-control"
              />
              {touched.email && errors.email && (
                <ErrorMessage
                  name="age"
                  component="div"
                  className="text-danger form-text"
                />
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="current-role" className="form-label">
                Which option best describes your current role?
              </label>
              <Field
                id="current-role"
                name="currentRole"
                className="form-select"
                as="select"
              >
                <option value="">Select an option</option>
                <option value="Student">Student</option>
                <option value="Full Time Job">Full Time Job</option>
                <option value="Full Time Learner">Full Time Learner</option>
                <option value="Prefer not to say">Prefer not to say</option>
                <option value="Other">Other</option>
              </Field>
              {touched.currentRole && errors.currentRole && (
                <ErrorMessage
                  name="currentRole"
                  component="div"
                  className="text-danger form-text"
                />
              )}
            </div>
            <div className="mb-3 input-radio-box">
              <p>Would you recommend freeCodeCamp to a friend?</p>
              <label className="form-check-label">
                <Field
                  name="userRecomend"
                  value="definitely"
                  type="radio"
                  className="input-radio"
                  checked
                />
                Definitely
              </label>

              <label className="form-check-label">
                <Field
                  name="userRecomend"
                  value="maybe"
                  type="radio"
                  className="input-radio"
                />
                Maybe
              </label>

              <label className="form-check-label">
                <Field
                  name="userRecomend"
                  value="not-sure"
                  type="radio"
                  className="input-radio"
                />
                Not sure
              </label>

              {touched.userRecomend && errors.userRecomend && (
                <ErrorMessage
                  name="userRecomend"
                  component="div"
                  className="text-danger form-text"
                />
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="most-like" className="form-label">
                What is your favorite feature of freeCodeCamp?
              </label>
              <Field
                id="most-like"
                name="mostLike"
                className="form-control"
                as="select"
              >
                <option value="">Select an option</option>
                <option value="challenges">Challenges</option>
                <option value="projects">Projects</option>
                <option value="community">Community</option>
                <option value="openSource">Open Source</option>
              </Field>
              {touched.mostLike && errors.mostLike && (
                <ErrorMessage
                  name="mostLike"
                  component="div"
                  className="text-danger form-text"
                />
              )}
            </div>
            <div className="mb-3 prefer-box">
              <p>
                What would you like to see improved?
                <span className="clue">(Check all that apply)</span>
              </p>

              <label>
                <Field
                  name="prefer"
                  value="front-end-projects"
                  type="checkbox"
                  className="input-checkbox"
                />
                Front-end Projects
              </label>
              <label>
                <Field
                  name="prefer"
                  value="back-end-projects"
                  type="checkbox"
                  className="input-checkbox"
                />
                Back-end Projects
              </label>
              <label>
                <Field
                  name="prefer"
                  value="data-visualization"
                  type="checkbox"
                  className="input-checkbox"
                />
                Data Visualization
              </label>
              <label>
                <Field
                  name="prefer"
                  value="challenges"
                  type="checkbox"
                  className="input-checkbox"
                />
                Challenges
              </label>
              <label>
                <Field
                  name="prefer"
                  value="open-source-community"
                  type="checkbox"
                  className="input-checkbox"
                />
                Open Source Community
              </label>
              <label>
                <Field
                  name="prefer"
                  value="gitter-help-rooms"
                  type="checkbox"
                  className="input-checkbox"
                />
                Gitter help rooms
              </label>
              <label>
                <Field
                  name="prefer"
                  value="videos"
                  type="checkbox"
                  className="input-checkbox"
                />
                Videos
              </label>
              <label>
                <Field
                  name="prefer"
                  value="city-meetups"
                  type="checkbox"
                  className="input-checkbox"
                />
                City Meetups
              </label>
              <label>
                <Field
                  name="prefer"
                  value="wiki"
                  type="checkbox"
                  className="input-checkbox"
                />
                Wiki
              </label>
              <label>
                <Field
                  name="prefer"
                  value="forum"
                  type="checkbox"
                  className="input-checkbox"
                />
                Forum
              </label>
              <label>
                <Field
                  name="prefer"
                  value="additional-courses"
                  type="checkbox"
                  className="input-checkbox"
                />
                Additional Courses
              </label>
              {touched.prefer && errors.prefer && (
                <ErrorMessage
                  name="prefer"
                  component="div"
                  className="text-danger form-text"
                />
              )}
            </div>
            <div className="mb-3">
              <p>Any comments or suggestions?</p>
              <Field
                id="comments"
                className="input-textarea"
                name="comments"
                placeholder="Enter your comment here..."
                as="textarea"
              />
              {touched.comments && errors.comments && (
                <ErrorMessage
                  name="comments"
                  component="div"
                  className="text-danger form-text"
                />
              )}
            </div>
            <button
              className="btn btn-outline-primary"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}
export default Forms;
