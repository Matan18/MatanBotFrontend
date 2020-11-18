import { useRouter } from 'next/router';
import React from 'react';

const RegisterSub: React.FC = () => {
  const { query } = useRouter();
  console.log("Query: ", query.guild_id)
  const baseUrl = "https://discord.com/api/oauth2/authorize?response_type=code&client_id=776083372787236864&scope=identify%20connections&redirect_uri=https://matanbot.matandriola.com/verifiedsubscriber&prompt=consent&state="

  return (
    <div>
      <h1>Você quer os privilégios dos subs no discord?</h1>
      <p>Para isso, por favor, acesse o link abaixo, que vou verificar o seu nick e comparar com os subs do seu streamer favorito</p>
      <a href={baseUrl + query.guild_id}>Aqui</a>
    </div>
  )
}

export default RegisterSub;