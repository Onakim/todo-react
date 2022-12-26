import { Component } from "react";
import Form from "react-bootstrap/Form";
import styles from "./AuthFormInner.module.scss";

// ({loginField, passField, error})
class AuthFormInner extends Component {
  render() {
    const { loginField, useLoginField } = this.props.loginField;
    const { passField, usePassField } = this.props.passField;
    return (
      <>
        {/* {error !== '' ? <p className={styles.error}>{error}</p> : null} */}
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter login"
            value={loginField}
            onChange={(e) => useLoginField(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={passField}
            onChange={(e) => usePassField(e.target.value)}
          />
        </Form.Group>
      </>
    );
  }
}

export default AuthFormInner;
