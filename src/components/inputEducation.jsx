import React, { Component } from 'react';

export default class InputEducation extends Component {
  handleDelete = () => {
    const { edu, deleteEdu } = this.props;
    deleteEdu(edu.uuid);
  };

  render() {
    const { handleInput, edu } = this.props;
    const elementClass = 'education-info';

    const label = {
      name: 'College',
      city: 'City',
      state: 'State',
      degree: 'Degree',
      subject: 'Subject',
    };
    return (
      <>
        <form className={elementClass}>
          <label>
            <p>{label.degree}</p>
            <input
              type='text'
              placeholder={label.degree}
              value={edu.degree}
              onChange={handleInput('degree', edu.uuid)}
            />
          </label>

          <label>
            <p>{label.subject}</p>
            <input
              type='text'
              placeholder={label.subject}
              value={edu.subject}
              onChange={handleInput('subject', edu.uuid)}
            />
          </label>

          <label>
            <p>{label.name}</p>
            <input
              type='text'
              placeholder={label.name}
              value={edu.name}
              onChange={handleInput('name', edu.uuid)}
            />
          </label>

          <label>
            <p>{label.city}</p>
            <input
              type='text'
              placeholder={label.city}
              value={edu.city}
              onChange={handleInput('city', edu.uuid)}
            />
          </label>

          <label>
            <p>{label.state}</p>
            <input
              type='text'
              placeholder={label.state}
              value={edu.state}
              onChange={handleInput('state', edu.uuid)}
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
