import React, { Component } from "react";
import { connect } from "react-redux";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";
import * as actionTypes from "../store/actions";

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onAddedPerson} />
        {this.props.prs.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onRemovedPerson(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    prs: state.persons,
  };
};

const mapDispathToProps = (dispath) => {
  return {
    onAddedPerson: (name, age) =>
      dispath({ type: actionTypes.ADD_PERSPON, name: name, age: age }),
    onRemovedPerson: (id) =>
      dispath({ type: actionTypes.REMOVE_PERSPON, personId: id }),
  };
};

export default connect(mapStateToProps, mapDispathToProps)(Persons);
