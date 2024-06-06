import { Col, Row } from "antd";
import "../scss/index.scss";
import Logo from "../assets/logo.png";
import FormImgHead from "../assets/FormImgHead.png";

const Login: React.FC = () => {
    return (
        <>
            <Row className="auth-main">
                <Col span={16} className="auth-container">
                    <div className="auth-left">
                        <div>
                            <p className="auth-left-p1">Welcome to</p>
                            <div className="auth-logo-wrapper">
                                <img src={Logo} alt="logo" />
                                <h2>BREATHE ESG</h2>
                            </div>
                            <p className="auth-left-p2">
                                We help you track your organisations metrics as
                                per the ESG Guidelines
                            </p>
                            <p className="auth-left-p3">
                                Sounds Interesting? <span>Get in touch!</span>
                            </p>
                        </div>
                    </div>
                    <div className="auth-right">
                        <div className="form-image">
                            <img src={FormImgHead} alt="Earth Image" />
                        </div>

                        <div className="auth-form-container">
                            <h3 className="auth-heading">Login</h3>
                            <p className="auth-title">
                                Enter your registered Email ID to continue
                            </p>
                            <form action="" className="auth-form">
                                <div className="auth-item">
                                    <label htmlFor="" className="auth-label">
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        className="auth-input-field"
                                        placeholder="Your Email ID"
                                    />
                                </div>
                                <div className="auth-item">
                                    <label htmlFor="" className="auth-label">
                                        Password
                                    </label>
                                    <input
                                        type="text"
                                        className="auth-input-field"
                                        placeholder="Password"
                                    />
                                </div>

                                <button className="signin-link">
                                    Sign Up with Google
                                </button>
                                <button className="signin-link">
                                    Sign Up with Twitter
                                </button>

                                <div className="auth-button-wrapper">
                                    <div className="signin-trouble">
                                        <span>
                                            Having trouble logging in?
                                            <a href="#">Contact Us</a>
                                        </span>
                                    </div>
                                    <button className="auth-button">
                                        Continue
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Login;
