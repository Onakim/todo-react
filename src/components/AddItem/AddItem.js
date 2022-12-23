import { Component } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { store } from "../../store";
import { fetchAddItem } from "../../store/dispatches/itemAdd.dispatch";
import styles from "./AddItem.module.scss";

export default class AddItem extends Component {
  state = { mess: "" };
  addItemFunction = async (e) => {
    e.preventDefault();
    const res = await store.dispatch(fetchAddItem(this.state.mess));
    if (res.type === "ITEM_ADD") {
      this.props.updateItems(true);
      return;
    }
  };
  render() {
    const task = this.state.mess;
    console.log(task)
    return (
      <>
        <Form className={styles.inputNewTask}>
          <Form.Control
            type="text"
            placeholder="Нова задача"
            value={task}
            onChange={(e) => this.setState({ mess: e.target.value })}
          />
          <Button
            variant="outline-primary"
            onClick={this.addItemFunction}
            type="submit"
          >
            Додати задачу
          </Button>
        </Form>
      </>
    );
  }
}