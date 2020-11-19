import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import api from '../services/api';

// import { Container } from './styles';

const Verified: React.FC = () => {
  const { code, state } = useRouter().query
  useEffect(() => {
    const value = state as string
    if (value) {
      const guild_id = value;
      console.log(guild_id)
      api.post('verifiedsubscriber', {
        code, guild_id
      },
        { headers: [{ 'Access-Control-Allow-Origin': "*" }] }
      )

    }
  })
  return (
    <div>
      <h1>Você conseguiu</h1>
    </div>
  )
}

export default Verified;