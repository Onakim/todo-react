import { Component } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Login from "../Login/Login";
import Register from "../Register/Register";
import styles from "./Auth.module.scss";

export default class Auth extends Component {
  render() {
    return (
      <section className="auth">
        <div className={`${styles.authContainer} container`}>
          <div className={styles.authInner}>
            <Tabs
              defaultActiveKey="login"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="register" title="Регістрація">
                <Register toggleLogin={this.propstoggleLogin}/>
              </Tab>
              <Tab eventKey="login" title="Логін">
                <Login toggleLogin={this.props.toggleLogin} />
              </Tab>
            </Tabs>
          </div>
        </div>
      </section>
    );
  }
}