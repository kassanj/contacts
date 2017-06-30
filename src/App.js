import React, { Component } from 'react';


class ContactList extends React.Component {
  render() {

    // const people = [
    //   { name: 'Michael' },
    //   { name: 'Kassandra' },
    //   { name: 'Ernie' }
    // ]
    const people = this.props.contacts

    return <ol>
      {people.map(person => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ol>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList contacts={[
          { name: 'Michael' },
          { name: 'Kassandra' },
          { name: 'Ernie' }
        ]}/>
          <ContactList contacts={[
          { name: 'John' },
          { name: 'Sarah' },
          { name: 'Tyler' }
        ]}/>
      </div>
    );
  }
}

export default App;
