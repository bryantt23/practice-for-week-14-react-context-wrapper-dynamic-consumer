import { useContext, useState } from 'react';
import { HoroscopeContext } from '../context/HoroscopeContext';

function Match() {
  const [match, setMatch] = useState();
  const { sign } = useContext(HoroscopeContext);
  console.log('🚀 ~ file: Match.js ~ line 7 ~ Match ~ sign', sign);
  return (
    <div>
      <button onClick={() => setMatch(!match)}>Show Match</button>
      {match && <p>Match is: {sign.match}</p>}
    </div>
  );
}

export default Match;
