import React from "react";
import Layout from '../../components/Layout'

export default class Cert extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { address } = this.state;
    const formData = { address };
    console.log('TODO implement retrieve certificate logic for', formData);
  };

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Certificates</h1>
              <p>Retrieve attendance details by address.</p>
              <p>NOTE: This is a work-in-progress. Please check in again later!</p>
              <form
                name="contact"
                onSubmit={this.handleSubmit}
              >
                <div className="field">
                  <label className="label" htmlFor={"name"} >Address</label>
                  <div className="control">
                    <input className="input" type={"text"} name={"address"} onChange={this.handleChange} id={"address"} required={true} />
                  </div>
                </div>
                <div className="field">
                  <button className="button is-link" type="submit">Retrieve</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
};
