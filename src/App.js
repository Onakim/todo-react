import { Component } from 'react';
import { checkLoginFunction } from "./common/checkLoginFunction";
import Auth from "./components/Auth/Auth";
import Layout from "./components/Layout/Layout";
import ToDo from './components/ToDo/ToDo';
import "./App.scss";

export default class App extends Component {
  state = { isLogin: checkLoginFunction() };

  toggleLogin = (data) => {
    this.setState({ isLogin: data })
  };
  render() {
    if (!this.state.isLogin) {
      return (
        <Layout toggleLogin={this.toggleLogin}>
          <Auth toggleLogin={this.toggleLogin} />
        </Layout>
      );
    }
    return <Layout toggleLogin={this.toggleLogin}><ToDo /></Layout>;
  }
}