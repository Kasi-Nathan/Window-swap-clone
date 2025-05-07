import React from 'react';
import { useState } from 'react'
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBtn,
  MDBInput
} from 'mdb-react-ui-kit';

const Table = () => {
  const [users, setUsers] = useState([
    { user: "Robin", posts: "24", usetime: "20 hours", donation: "$50" },
    { user: "Nick", posts: "12", usetime: "32 hours", donation: "$100" },
    { user: "Kira", posts: "1", usetime: "2 hours", donation: "$1" },
    { user: "Rachel", posts: "5", usetime: "27 hours", donation: "$0" },
    { user: "Leon", posts: "16", usetime: "9 hours", donation: "$1000" }
  ]);

  const [input, setInput] = useState({ user: '', posts: '', usetime: '', donation: '' });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  const handleSubmit = () => {
    if (editingIndex !== null) {
      const updatedUser = [...users]
      updatedUser[editingIndex] = input;
      setUsers(updatedUser);
      setEditingIndex(null);
    } else {
      setUsers([...users, input]);
    }
    setInput({ user: '', posts: '', usetime: '', donation: '' })
  };

  const handleEdit = (index) => {
    setInput(users[index]);
    setEditingIndex(index);
  }

  const handleDelete = (index) => {
    const filtered = users.filter((_, i) => i !== index)
    setUsers(filtered);
  }



  return (
    <div>
      <h1 style={{textAlign:'center'}}>User data</h1>
      <br/>
      <MDBTable striped bordered hover>
        <MDBTableHead>
          <tr>
            <th>User</th>
            <th>Posts</th>
            <th>Use Time</th>
            <th>Donation</th>
            <th>Actions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {users.map((item, index) => (
            <tr key={index}>
              <td>{item.user}</td>
              <td>{item.posts}</td>
              <td>{item.usetime}</td>
              <td>{item.donation}</td>
              <td>
                <MDBBtn size='sm' onClick={() => handleEdit(index)}>Edit</MDBBtn>
                <MDBBtn size='sm' onClick={() => handleDelete(index)}>Delete</MDBBtn>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
      <br/>

      <div>
        <MDBInput
          label='User'
          name='user'
          value={input.user}
          onChange={handleChange}
        />
        <br/>
        <MDBInput
          label='Posts'
          name='posts'
          value={input.posts}
          onChange={handleChange}
        />
        <br/>
        <MDBInput
          label='Use Time'
          name='usetime'
          value={input.usetime}
          onChange={handleChange}
        />
        <br/>
        <MDBInput
          label='Donation'
          name='donation'
          value={input.donation}
          onChange={handleChange}
        />
        <br/>
        <MDBBtn onClick={handleSubmit}>
          {editingIndex != null ? 'update' : 'Add'}
        </MDBBtn>


      </div>
    </div>
  );
}

export default Table;