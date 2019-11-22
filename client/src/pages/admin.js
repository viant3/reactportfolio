import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    data: [],
    id: 0,
    message: null,
    email: null,
    name: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null
  };

  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  getDataFromDb = () => {
    fetch("/api/getData")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };

  putDataToDB = message => { 
    let currentIds = this.state.data.map(data => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios.post("/api/putData", { 
      id: idToBeAdded,
      message: message,
      email: this.state.email,
      name: this.state.name
    });
  };

  deleteFromDB = idTodelete => {
    let objIdToDelete = null;
    this.state.data.forEach(dat => {
      if (dat.id === idTodelete) {
        objIdToDelete = dat._id;
      }
    });

    axios.delete("/api/deleteData", {
      data: {
        id: objIdToDelete
      }
    });
  };

  updateDB = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    this.state.data.forEach(dat => {
      if (dat.id === idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    axios.post("/api/updateData", {
      id: objIdToUpdate,
      update: { message: updateToApply }
    });
  };

  render() {
    const { data } = this.state;
    return (
      <section className="container-fluid mainBox">
      <div>
        <ul>
          {data.length <= 0 ? "NO DB ENTRIES YET" : data.map(dat => (
            <li style={{ padding: "10px" }} key={dat}>
              <span style={{ color: "gray" }}> id: </span> {dat.id} <br />
              <span style={{ color: "gray" }}> name: </span> {dat.name}<br />
              <span style={{ color: "gray" }}> email: </span> {dat.email}<br />
              <span style={{ color: "gray" }}> message: </span> {dat.message}
            </li>
          ))}
        </ul>
        <div style={{ padding: "10px" }}>
        <input
            type="text"
            onChange={e => this.setState({ name: e.target.value })}
            placeholder="Bill G."
            style={{ width: "200px" }}
          />
           <input
            type="text"
            onChange={e => this.setState({ email: e.target.value })}
            placeholder="bill@MSFT.com"
            style={{ width: "200px" }}
          />
          <input
            type="text"
            onChange={e => this.setState({ message: e.target.value })}
            placeholder="add something in the database"
            style={{ width: "200px" }}
          />
          <button onClick={() => this.putDataToDB(this.state.message, this.state.name, this.state.email)}>
            ADD
          </button>
        </div>
        <div style={{ padding: "10px" }}>
          <input
            type="text"
            style={{ width: "200px" }}
            onChange={e => this.setState({ idToDelete: e.target.value })}
            placeholder="put id of item to delete here"
          />
          <button onClick={() => this.deleteFromDB(this.state.idToDelete)}>
            DELETE
          </button>
        </div>
        <div style={{ padding: "10px" }}>
          <input
            type="text"
            style={{ width: "200px" }}
            onChange={e => this.setState({ idToUpdate: e.target.value })}
            placeholder="id of item to update here"
          />
          <input
            type="text"
            style={{ width: "200px" }}
            onChange={e => this.setState({ updateToApply: e.target.value })}
            placeholder="put new value of the item here"
          />
          <button
            onClick={() =>
              this.updateDB(this.state.idToUpdate, this.state.updateToApply)
            }
          >
            UPDATE
          </button>
        </div>
      </div>
      </section>
    );
  }
}

export default App;