import React, { Component } from 'react';

export default class InputExperience extends Component {
  handleDelete = () => {
    const { exp, deleteItem, objName } = this.props;
    deleteItem(exp.uuid, objName);
    console.log(exp.uuid);
  };

  render() {
    const { handleInput, exp, objName } = this.props;
    const elementClass = 'experience-info';

    const label = {
      name: 'Company',
      city: 'City',
      state: 'State',
      position: 'Position',
      from: 'From',
      until: 'Until',
    };

    return (
      <>
        <form className={elementClass}>
          <label>
            <p>{label.name}</p>
            <input
              type='text'
              placeholder={label.name}
              value={exp.name}
              onChange={handleInput('name', exp.uuid, objName)}
            />
          </label>

          <label>
            <p>{label.position}</p>
            <input
              type='text'
              placeholder={label.position}
              value={exp.position}
              onChange={handleInput('position', exp.uuid, objName)}
            />
          </label>

          <label>
            <p>{label.city}</p>
            <input
              type='text'
              placeholder={label.city}
              value={exp.city}
              onChange={handleInput('city', exp.uuid, objName)}
            />
          </label>

          <label>
            <p>{label.state}</p>
            <input
              type='text'
              placeholder={label.state}
              value={exp.state}
              onChange={handleInput('state', exp.uuid, objName)}
            />
          </label>

          <label>
            <p>{label.from}</p>
            <input
              type='text'
              placeholder={label.from}
              value={exp.from}
              onChange={handleInput('from', exp.uuid, objName)}
            />
          </label>

          <label>
            <p>{label.until}</p>
            <input
              type='text'
              placeholder={label.until}
              value={exp.until}
              onChange={handleInput('until', exp.uuid, objName)}
            />
          </label>

          <button type='button' onClick={this.handleDelete}>
            Delete
          </button>
        </form>
      </>
    );
  }
}
