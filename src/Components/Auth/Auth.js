

export const getRole = async email => {

    const response = await fetch(
      `http://localhost:5000/users/${email}`,
    )
    const data = await response.json()
    return data?.role
  }


  export const adminRequest = async user => {
    const response = await fetch(
      `http://localhost:5000/users/${user?.email}`,
      {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('aircnc-token')}`,
        },
        body: JSON.stringify(user),
      }
    )
    const data = await response.json()
    console.log(data)
    return data
  }
  