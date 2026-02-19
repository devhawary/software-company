import React from "react";
import styles from "./CardsSection.module.scss";
function CardsSection() {
  return (
    <section className="container card-section insight-section">
      <div className="row g-4">
        {/* Card Template */}
        <div className="col-md-4 d-flex">
          <div
            className={`${styles["card-style"]} card rounded-4 border-0 pb-2 flex-fill`}
          >
            <div className="p-3">
              <img
                src="/images/insights-page/post-2.webp"
                className={`card-img-top rounded-4 ${styles["hover-effect"]}`}
                alt="card-image"
              />
            </div>
            <div className="img-text ps-3 pe-3">
              <span
                className={`badge ${styles["badge-style"]} bg-success mb-2 p-2 rounded-3`}
              >
                Business
              </span>
              <h4 className="text-center">
                <a className="text-decoration-none text-dark" href="">
                  How can marketing help your business?
                </a>
              </h4>
              <div className="author d-flex align-items-center justify-content-center mt-3 mb-3">
                <img
                  src="/images/insights-page/02.webp"
                  alt="author-image"
                  className={`rounded-circle ${styles["rounded-avatar"]}`}
                />
                <small className="ms-2">
                  <span className="fw-bold">Kevin</span>
                  <span className="text-muted">· Apr 26, 2024</span>
                </small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className={`${styles["card-style"]} card rounded-4 border-0 pb-2 flex-fill`}
          >
            <div className="p-3">
              <img
                src="/images/insights-page/img-08.webp"
                className={`card-img-top rounded-4 ${styles["hover-effect"]}`}
                alt="card-image"
              />
            </div>
            <div className="img-text ps-3 pe-3">
              <span
                className={`badge ${styles["badge-style"]} bg-success mb-2 p-2 rounded-3`}
              >
                Marketing
              </span>
              <h4 className="text-center">
                <a className="text-decoration-none text-dark" href="">
                  The ultimate guide to marketing success
                </a>
              </h4>
              <div className="author d-flex align-items-center justify-content-center mt-3 mb-3">
                <img
                  src="/images/insights-page/04.webp"
                  alt="author-image"
                  className={`rounded-circle ${styles["rounded-avatar"]}`}
                />
                <small className="ms-2">
                  <span className="fw-bold">Sarah</span>
                  <span className="text-muted">· Apr 22, 2024</span>
                </small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className={`${styles["card-style"]} card rounded-4 border-0 pb-2 flex-fill`}
          >
            <div className="p-3">
              <img
                src="/images/insights-page/img-06.webp"
                className={`card-img-top rounded-4 ${styles["hover-effect"]}`}
                alt="card-image"
              />
            </div>
            <div className="img-text ps-3 pe-3">
              <span
                className={`badge ${styles["badge-style"]} bg-success mb-2 p-2 rounded-3`}
              >
                Strategy
              </span>
              <h4 className="text-center">
                <a className="text-decoration-none text-dark" href="">
                  A comprehensive guide to marketing
                </a>
              </h4>
              <div className="author d-flex align-items-center justify-content-center mt-3 mb-3">
                <img
                  src="/images/insights-page/02.webp"
                  alt="author-image"
                  className={`rounded-circle ${styles["rounded-avatar"]}`}
                />
                <small className="ms-2">
                  <span className="fw-bold">Amir</span>
                  <span className="text-muted">· Apr 20, 2024</span>
                </small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex">
          <div
            className={`${styles["card-style"]} card rounded-4 border-0 pb-2 flex-fill`}
          >
            <div className="p-3">
              <img
                src="/images/insights-page/img-05.webp"
                className={`card-img-top rounded-4 ${styles["hover-effect"]}`}
                alt="card-image"
              />
            </div>
            <div className="img-text ps-3 pe-3">
              <span
                className={`badge ${styles["badge-style"]} bg-success mb-2 p-2 rounded-3`}
              >
                Strategy
              </span>
              <h4 className="text-center">
                <a className="text-decoration-none text-dark" href="">
                  Maximizing your reach with marketing
                </a>
              </h4>
              <div className="author d-flex align-items-center justify-content-center mt-3 mb-3">
                <img
                  src="/images/insights-page/02.webp"
                  alt="author-image"
                  className={`rounded-circle ${styles["rounded-avatar"]}`}
                />
                <small className="ms-2">
                  <span className="fw-bold">David</span>
                  <span className="text-muted">· Apr 15, 2024</span>
                </small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex">
          <div
            className={`${styles["card-style"]} card rounded-4 border-0 pb-2 flex-fill`}
          >
            <div className="p-3">
              <img
                src="/images/insights-page/img-11.webp"
                className={`card-img-top rounded-4 ${styles["hover-effect"]}`}
                alt="card-image"
              />
            </div>
            <div className="img-text ps-3 pe-3">
              <span
                className={`badge ${styles["badge-style"]} bg-success mb-2 p-2 rounded-3`}
              >
                Boost
              </span>
              <h4 className="text-center">
                <a className="text-decoration-none text-dark" href="">
                  Top 5 reasons to invest in marketing
                </a>
              </h4>
              <div className="author d-flex align-items-center justify-content-center mt-3 mb-3">
                <img
                  src="/images/insights-page/04.webp"
                  alt="author-image"
                  className={`rounded-circle ${styles["rounded-avatar"]}`}
                />
                <small className="ms-2">
                  <span className="fw-bold">Sarah</span>
                  <span className="text-muted">· Apr 3, 2024</span>
                </small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex">
          <div
            className={`${styles["card-style"]} card rounded-4 border-0 pb-2 flex-fill`}
          >
            <div className="p-3">
              <img
                src="/images/insights-page/img-10.webp"
                className={`card-img-top rounded-4 ${styles["hover-effect"]}`}
                alt="card-image"
              />
            </div>
            <div className="img-text ps-3 pe-3">
              <span
                className={`badge ${styles["badge-style"]} bg-success mb-2 p-2 rounded-3`}
              >
                Business
              </span>
              <h4 className="text-center">
                <a className="text-decoration-none text-dark" href="">
                  How can marketing help your business?
                </a>
              </h4>
              <div className="author d-flex align-items-center justify-content-center mt-3 mb-3">
                <img
                  src="/images/insights-page/02.webp"
                  alt="author-image"
                  className={`rounded-circle ${styles["rounded-avatar"]}`}
                />
                <small className="ms-2">
                  <span className="fw-bold">Kevin</span>
                  <span className="text-muted">· Apr 26, 2024</span>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pagination */}
      <div className="mt-5">
        <nav aria-label="Page navigation example ">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <a
                className="page-link border-0 text-body fw-bold"
                href="#"
                aria-label="Previous"
              >
                <span aria-hidden="true">&lt;</span>
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link border-0 text-body fw-bold green-hover ms-2"
                href="#"
              >
                1
              </a>
            </li>
            <li className="page-item">
              <a
                className={`page-link border-0 text-white fw-bold rounded-circle ms-2 ${styles["green-bg"]}`}
                href="#"
              >
                2
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link border-0 text-body fw-bold green-hover ms-2"
                href="#"
              >
                3
              </a>
            </li>
            <li className="disabled text-muted">
              <span>…</span>
            </li>
            <li className="page-item">
              <a
                className="page-link border-0 text-body fw-bold green-hover ms-2"
                href="#"
              >
                8
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link border-0 text-body fw-bold green-hover ms-2"
                href="#"
              >
                9
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link border-0 text-body"
                href="#"
                aria-label="Next"
              >
                <span aria-hidden="true">&gt;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
export default CardsSection;
