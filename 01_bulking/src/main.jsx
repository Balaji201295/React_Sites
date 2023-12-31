import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Modal from "react-modal";
import App from "./App.jsx";
import "./index.css";
import {
  AboutUs,
  Blogs,
  SingleBlog,
  ContactUs,
  ErrorPage,
  FAQ,
  Home,
  Membership,
  MembershipDetails,
  Payment,
  PrivacyPolicy,
  ProgramDetails,
  Programs,
  TermsOfService,
  Trainers,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blogs/:id",
        element: <SingleBlog />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/blogs/${params.id}`),
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/membership",
        element: <Membership />,
      },
      {
        path: "/membership-details",
        element: <MembershipDetails />,
      },
      {
        path: "/programs",
        element: <Programs />,
      },
      {
        path: "/program-details",
        element: <ProgramDetails />,
      },

      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },

      {
        path: "/terms-of-service",
        element: <TermsOfService />,
      },
      {
        path: "/trainers",
        element: <Trainers />,
      },
    ],
  },
]);
Modal.setAppElement("#root");
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
