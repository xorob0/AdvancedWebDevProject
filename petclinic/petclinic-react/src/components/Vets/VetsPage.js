import axios from 'axios'
import Vet from './Vet'
import React, { Component } from 'react'

export default class VetsPage extends Component {


  state = { vets:[] }

  getVets = async() => {
    const response = await axios.get('http://localhost:9999/api/v1/vets')
    return await response
  }

  setVets = () => {
    this.getVets()
    .then((response) => {
      let vets = []
      //console.log(response)
      response.data.forEach(vet => {
        vets.push(
          <Vet key={vet.lastname} {...vet}/>
        )
      });
      console.log(vets)
      this.setState({vets})
    })
  }

  componentWillMount() {
    this.setVets()
  }

  render() {
    return (
      <div className="Content">
      <div className="container xd-container">
        <h2>Veterinarians</h2>
        <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Specialties</th>
              </tr>
            </thead>
            <tbody>
              {this.state.vets}
            </tbody>
        </table>
      </div>
      </div>
    )
  }
}
