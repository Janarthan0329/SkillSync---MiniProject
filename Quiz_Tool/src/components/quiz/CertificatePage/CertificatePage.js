import React, { Component, Fragment } from "react";
import "./CertificatePage.css";
import Modal from "react-modal";
import { jsPDF } from "jspdf";
import certificateTemplate from "../../../assets/img/certificateTemplate.png";

Modal.setAppElement("#root");

class CertificatePage extends Component {
  state = {
    name: "",
    isModalOpen: false,
    certificateUrl: "",
  };

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleClaimCertificate = () => {
    const { name } = this.state;

    if (!name) {
      alert("Please enter your full name");
      return;
    }

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const image = new Image();

    image.src = certificateTemplate;
    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      context.drawImage(image, 0, 0);
      context.font = "100px 'Dancing Script', cursive";
      context.fillStyle = "#000";
      context.textAlign = "center";
      context.fillText(name, canvas.width / 2, canvas.height / 2); // Adjust this according to where you want the name to appear
      const certificateUrl = canvas.toDataURL("image/png");
      this.setState({ certificateUrl, isModalOpen: true });
    };
  };

  handleDownload = (format) => {
    const { certificateUrl, name } = this.state;
    const link = document.createElement("a");

    if (format === "png" || format === "jpg") {
      link.href = certificateUrl;
      link.download = `${name}.${format}`;
    } else if (format === "pdf") {
      const pdf = new jsPDF({ orientation: "landscape" });
      const width = pdf.internal.pageSize.getWidth();
      const height = pdf.internal.pageSize.getHeight();
      pdf.addImage(certificateUrl, "PNG", 0, 0, width, height); // Adjust the size accordingly
      pdf.save(`${name}.pdf`);
      return;
    }

    link.click();
  };


  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { name, isModalOpen, certificateUrl } = this.state;

    return (
      <Fragment>
        <div className="Congratulations">
          <div style={{ textAlign: "center" }}>
            <span className="mdi mdi-star-outline congratulation-icon"></span>
          </div>
          <h1>Congratulations!</h1>
          <p>
            You have successfully completed the quiz on "OpenAI's ChatGPT for
            Beginners" and are now eligible to receive your certificate.
          </p>
        </div>
        <div className="Certificate">
          <h2>Certificate</h2>
          <p>
            Please enter the full name that will display on your Certificate:
          </p>
          <input
            type="text"
            className="name-input"
            value={name}
            onChange={this.handleNameChange}
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <p>Click the button below to claim your certificate:</p>
          <button
            className="claim-button"
            onClick={this.handleClaimCertificate}
          >
            Claim Certificate
          </button>
        </div>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={this.closeModal}
          className="certificate-modal"
          overlayClassName="certificate-overlay"
        >
          <button className="close-button" onClick={this.closeModal}>
            <span className="mdi mdi-close"></span>
          </button>
          <img
            src={certificateUrl}
            alt="Certificate"
            className="generated-certificate"
          />
          <div className="modal-buttons">
            <button
              onClick={() => this.handleDownload("pdf")}
              className="modal-button"
            >
              Download PDF
            </button>
            <button
              onClick={() => this.handleDownload("png")}
              className="modal-button"
            >
              Download PNG
            </button>
            <button
              onClick={() => this.handleDownload("jpg")}
              className="modal-button"
            >
              Download JPG
            </button>
          </div>
        </Modal>
      </Fragment>
    );
  }
}

export default CertificatePage;
