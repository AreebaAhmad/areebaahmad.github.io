import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

function Footer() {
    return (
        <footer className="bg-dark bg-opacity-75 mt-5 py-4 container rounded-4 shadow-lg">
            <div className="row align-items-center text-center text-md-start">
                <div className="col-md-6 mb-3 mb-md-0">
                    <h5 className="fw-bold mb-1 footer-h5">Areeba Ahmad</h5>
                    <p className="mb-0 footer-p">Software Developer</p>
                </div>
                <div className="col-md-6 text-md-end">
                    <a href="https://www.linkedin.com/in/areeba-ahmad-44b6141a2/" className=" me-3">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                </div>
            </div>
            <hr className="border-white border-opacity-25 mt-3" />
            <p className="text-center text-white-50 mb-0 small">
                &copy; {new Date().getFullYear()} Areeba Ahmad. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer