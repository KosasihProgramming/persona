import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { contactConfig } from "../../content_option";

export const ContactUs = () => {
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, message, email } = formData;
    let number = email;
    if (email.startsWith("0")) {
      number = "62" + email.slice(1);
    }
    // Buat link WhatsApp
    const whatsappLink = `https://wa.me/6281278961500?text=${encodeURIComponent(
      `Nama: ${name}\nPesan: ${message}`
    )}`;

    // Buka link WhatsApp di tab baru
    window.open(whatsappLink, "_blank");

    // Tampilkan pesan konfirmasi
    setFormdata((prevData) => ({
      ...prevData,
      alertMessage: "SUCCESS! Pesan Anda telah diarahkan ke WhatsApp",
      variant: "success",
      show: true,
    }));
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="px-16">
      <HelmetProvider>
        <Container>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{meta.title} | Contact</title>
            <meta name="description" content={meta.description} />
          </Helmet>
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 mb-4">Contact Me</h1>
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
          </Row>
          <Row className="sec_sp">
            <Col lg="12">
              <Alert
                //show={formData.show}
                variant={formData.variant}
                className={`rounded-0 co_alert ${
                  formData.show ? "d-block" : "d-none"
                }`}
                onClose={() => setFormdata({ show: false })}
                dismissible
              >
                <p className="my-0">{formData.alertmessage}</p>
              </Alert>
            </Col>
            <Col lg="5" className="mb-5">
              <h3 className="color_sec py-4">Get in touch</h3>
              <address>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                  {contactConfig.YOUR_EMAIL}
                </a>
                <br />
                <br />
                {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                  <p>
                    <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                  </p>
                ) : (
                  ""
                )}
              </address>
              <p>{contactConfig.description}</p>
            </Col>
            <Col lg="7" className="d-flex align-items-center">
              <form
                onSubmit={handleSubmit}
                className="contact__form w-100 mb-[5rem]"
              >
                <Row>
                  <Col lg="6" className="form-group">
                    <input
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Name"
                      value={formData.name || ""}
                      type="text"
                      required
                      onChange={handleChange}
                    />
                  </Col>
                  <Col lg="6" className="form-group">
                    <input
                      className="form-control rounded-0"
                      id="email"
                      name="email"
                      placeholder="No. Whatsapp Anda"
                      type="text"
                      value={formData.email || ""}
                      required
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <textarea
                  className="form-control rounded-0"
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <br />
                <Row>
                  <Col lg="12" className="form-group">
                    <button className="btn ac_btn" type="submit">
                      {formData.loading ? "Sending..." : "Send"}
                    </button>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        </Container>
        <div className={formData.loading ? "loading-bar" : "d-none"}></div>
      </HelmetProvider>
    </div>
  );
};
