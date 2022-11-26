

export const getRole = async email => {

    const response = await fetch(
      `http://localhost:5000/users/${email}`,
    )
    const data = await response.json()
    return data?.role
  }