import './Feed.css'

import React, { useEffect, useState } from 'react';
import getPeeps from '../../apiRequests/peeps'
import Peep from '../peep/Peep'

const Feed = () => {
  const [peeps, setPeeps] = useState([]);

  useEffect(() => {
    getPeeps(setPeeps);
  }, [])

  return(
        <div className='feed' id='feed' role="feed">
          {peeps.map(
            peep => < Peep key={peep.id} peep={peep}/>
          )}
        </div>
        )
}

export default Feed;
