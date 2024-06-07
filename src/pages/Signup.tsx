import { Col, Row } from "antd";
import "../scss/index.scss";
import Logo from "../assets/logo.png";
import FormImgHead from "../assets/FormImgHead.png";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { useAppDispatch, useAppSelector } from "../hooks/storeHook";
import { login } from "../features/authSlice";
import React from "react";
import { useNavigate } from "react-router-dom";

export type RegisterFormData = {
    email: string;
    password: string;
    confirmPassword: string;
};

const Signup: React.FC = () => {
    const {
        register,
        formState: { errors },
        watch,
        handleSubmit,
    } = useForm<RegisterFormData>();

    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    
    const {user} = useAppSelector((state) => state.auth);

    React.useEffect(() => {
        if(Boolean(user)){
            navigate('/dashboard');
        }
    }, [user, navigate])
    
    const [loading, setLoading] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

    const onSubmit = handleSubmit( async (data) => {
        const {email, password} = data;

        
        try {
            setLoading(true);
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user)
            await setDoc(doc(db, "users", user.uid), {email});
            setLoading(false);
            if(user && user.email){
                dispatch(login({email: user.email, id: user.uid}));
            }
            navigate('/login');
        } catch (error: any) {
            setLoading(false);
            const errorCode = error.code;
            setErrorMessage(errorCode);
        }
    });
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
                             {errorMessage && <p className="errorMsg">{errorMessage}</p>}
                            <h3 className="auth-heading">Sign Up</h3>

                            <form
                                action=""
                                className="auth-form"
                                onSubmit={onSubmit}
                            >
                                <div className="auth-item">
                                    <label htmlFor="" className="auth-label">
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        className="auth-input-field"
                                        placeholder="Your Email ID"
                                        {...register("email", {
                                            required: "Email is required",
                                        })}
                                    />
                                    {errors.email && (
                                        <span className="errorMsg">
                                            {errors.email.message}
                                        </span>
                                    )}
                                </div>
                                <div className="auth-item">
                                    <label htmlFor="" className="auth-label">
                                        Password
                                    </label>
                                    <input
                                        type="text"
                                        className="auth-input-field"
                                        placeholder="Password"
                                        {...register("password", {
                                            required: "Password field is required",
                                            minLength: {
                                                value: 6,
                                                message:
                                                    "Password must be at least 6 characters",
                                            },
                                        })}
                                    />
                                    {errors.password && (
                                        <div className="errorMsg">
                                            {errors.password.message}
                                        </div>
                                    )}
                                </div>
                                <div className="auth-item">
                                    <label htmlFor="" className="auth-label">
                                        Confirm Password
                                    </label>
                                    <input
                                        type="text"
                                        className="auth-input-field"
                                        placeholder="Password"
                                        {...register("confirmPassword", {
                                            validate: (val) => {
                                                if (!val) {
                                                    return "This field is required";
                                                } else if (
                                                    watch("password") != val
                                                ) {
                                                    return "Your passwords do not match";
                                                }
                                            },
                                        })}
                                    />
                                    {errors.confirmPassword && (
                                        <div className="errorMsg">
                                            {errors.confirmPassword.message}
                                        </div>
                                    )}
                                </div>

                                <div className="auth-button-wrapper">
                                    <button className="auth-button" disabled={loading}>
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

export default Signup;
