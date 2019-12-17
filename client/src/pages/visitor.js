import React, { Component } from "react";
import axios from "axios";

import Navbar from "../components/navbar";
import Footer from "../components/footer";


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
      message: this.state.message,
      email: this.state.email,
      name: this.state.name,
    })
    this.state.history.push('/visitor');
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

  handleSubmit() {
    this.props.history.push('/visitor');
  }
  

  render() {
    const { data } = this.state;
    return (
      <div>
      <Navbar />
      <section className="container-fluid mainBox">
      <div>
        <div style={{ padding: "10px" }}>
          <form onSubmit={this.handleSubmit.bind(this)}>
        <input
            type="text"
            onChange={e => this.setState({ name: e.target.value })}
            placeholder="Name"
            style={{ width: "200px" }}
            ref="name"
          /><br />
           <input
            type="text"
            onChange={e => this.setState({ email: e.target.value })}
            placeholder="email"
            style={{ width: "200px" }}
          /><br />
          <textarea
            type="text"
            onChange={e => this.setState({ message: e.target.value })}
            placeholder="Type messeage here"
            rows="6"
            cols="125"
            className="form-control"
            target="/visitor"
          /><br /><br />
          <button onClick={() => this.putDataToDB(this.state.message, this.state.name, this.state.email)}
          >
            Leave a Message
          </button><br /><br />
          </form>
        </div>
        </div>
        <h3>Visitors</h3>
          <div className="mainBoxBorder">
          
        <ul>
      
          {data.length <= 0 ? "NO DB ENTRIES YET" : data.map(dat => (
            <li style={{ padding: "10px" }} key={dat} >
              {/* <span style={{ color: "gray" }}> id: </span> {dat.id} <br /> */}
              <span className="visitColumn" style={{ color: "gray" }}> name:   {dat.name} </span> 
              <span className="visitColumn" style={{ color: "gray" }}> email:   {dat.email}</span> 
              <span className="visitColumn" style={{ color: "gray" }}> message:  {dat.message}</span> 
            </li>
          ))}
         
        </ul><br />
      </div>
      </section>
      <Footer />
      </div>
        
    );
  }
}

export default App;
