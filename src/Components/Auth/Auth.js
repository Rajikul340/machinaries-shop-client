export const getRole = async email => {
  const response = await fetch(
    `http://localhost:5000/users/${email}`,
    {
      method: 'GET',
    }
  )
  const user = await response.json()
  return user?.role
}

//admin request
export const adminRequest = async (user) => {
  const response = await fetch(`http://localhost:5000/users/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  console.log(data);
  return data;
};

export const addProduct = async (product) => {
  const res = await fetch(`http://localhost:5000/AllMachine`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(product),
  });
  const data = await res.json();

  return data;
};
//img load to imgbb
export const imageUpload = async (image) => {
  console.log(image);
  if (image) {
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_KEY}`;

    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    return data;
  }
};


export const makeAdmin = async user => {
  delete user._id
  const response = await fetch(
    `http://localhost:5000/users/${user?.email}`,
    {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('aircnc-token')}`,
      },
      body: JSON.stringify({ ...user, role: 'admin' }),
    }
  )
  const users = await response.json()

  return users
}


export const getAllSeller = async () => {
  const response = await fetch(`http://localhost:5000/users`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
  
    },
  })
  console.log('test')
  const users = await response.json()

  return users
}
