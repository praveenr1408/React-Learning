import React from 'react'

function User({userData}) {
  return <>
    <h1>Name:{userData.name}</h1>
    <h1>Age:{userData.age}</h1>
    </>
}

export default User