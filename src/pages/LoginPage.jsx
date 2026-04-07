import { useLocalStorage } from "@uidotdev/usehooks";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Form, Image, Modal, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const loginImage = "../../tosca-dining-area.jpg";
  const url = "http://localhost:3000";
  const [modalShow, setModalShow] = useState(null);
  const handleShowSignUp = () => setModalShow("SignUp");
  const handleShowsLogin = () => setModalShow("Login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authToken, setAuthToken] = useLocalStorage("authToken", "");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log("logging in...");
      const res = await axios.post(`${url}/login`, { username, password });
      if (res.data && res.data.auth === true && res.data.token) {
        setAuthToken(res.data.token);
        console.log("Login succes, token saved");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleClose = () => setModalShow(null);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      console.log("signing up...");
      const res = await axios.post(`${url}/signup`, { username, password });
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (authToken) {
      navigate("/home");
    }
  }, [authToken, navigate]);

  return (
    <>
      <div style={{ height: "100vh" }}>
        <Row style={{ height: "100vh" }}>
          <Col
            style={{
              overflow: "hidden",
              position: "relative",
              height: "100vh",
            }}
            xs={6}
          >
            <Image style={{ height: "100%" }} fluid src={loginImage} />
          </Col>
          <Col xs={6}>
            <p className="mt-5" style={{ fontSize: 64 }}>
              <strong>Chong's Bookings</strong>
            </p>
            <h2 className="my-5" style={{ fontSize: 31 }}>
              Reserve now
            </h2>

            <Col sm={5} className="d-grid gap-2">
              <Button className="rounded-pill" variant="outline-dark">
                <i className="bi bi-google"></i> Sign up with Google
              </Button>
              <p style={{ textAlign: "center" }}>or</p>
              <Button classname="rounded-pill" onClick={handleShowSignUp}>
                Create an account
              </Button>
              <p style={{ fontSize: "12px" }}>
                By signing up, you agree to the Terms of Service and Privacy
                Policy.
              </p>
              <p className="mt-5" style={{ fontWeight: "bold" }}>
                Already have an account?
              </p>
              <Button
                classname="rounded-pill"
                variant="outline-primary"
                onClick={handleShowsLogin}
              >
                Sign in
              </Button>
            </Col>
            <Modal
              show={modalShow !== null}
              onHide={handleClose}
              animation={false}
              centered
            >
              <Modal.Body>
                <h2 className="mb-4" style={{ fontWeight: "bold" }}>
                  {modalShow === "SignUp"
                    ? "Create your account"
                    : "Log in to your account"}
                </h2>
                <Form
                  className="d-grid gap-2 px-5"
                  onSubmit={modalShow === "SignUp" ? handleSignUp : handleLogin}
                >
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>

                  <p style={{ fontSize: "12px" }}>
                    {modalShow === "SignUp"
                      ? `By signing up, you agree to the Terms of Service and Privacy
                    Policy, including Cookie Use. Chong's Bookings may use your
                    contact information, including your email address and phone
                    number for purposes outlined in our Privacy Policy, like
                    keeping your account seceure and personalising our services,
                    including ads.`
                      : `Forgot your login details?`}
                  </p>
                  <Button className="rounded-pill" type="submit">
                    {modalShow === "SignUp" ? "Sign up" : "Log in"}
                  </Button>
                </Form>
              </Modal.Body>
            </Modal>
          </Col>
        </Row>
      </div>
    </>
  );
}
