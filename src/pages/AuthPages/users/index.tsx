import { convertRoutesToComponents } from 'helpers'
import React from 'react'
import { userRoutes } from './routes';

const UserPages = () => {
  return (
    <div>
      {convertRoutesToComponents(userRoutes)}
    </div>
  )
}

export default UserPages
