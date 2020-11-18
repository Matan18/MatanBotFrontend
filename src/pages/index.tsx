import Head from 'next/head'
import { useRouter } from "next/router";
import { useEffect } from 'react';
import api from "../services/api";

export default function Home() {
  const { query } = useRouter()
  useEffect(() => {
    if (query.state === 'discord') {
      api.post('/callbackdiscord', { code: query.code })
    }
    if (query.state === 'twitch') {
      api.post('/callbacktwitch', { code: query.code })
    }
  }, [query]);


  return (
    <div >
      <Head>
        <title>MatanBot: Bem vindo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <h1>Bem Vindo ao MatanBot</h1>

        <p >
          <strong>Essa é uma aplicação com o intuito de integrar um servidor no discord a umca conta na twitch.</strong>
          <br />
          <h3>Observação: </h3>
          <p>Já existe um meio de fazer isso, tente seguir esse <a href="https://support.discord.com/hc/pt-br/articles/212112068-FAQ-Twitch-Integration">passo a passo</a> antes de cadastrar o bot.</p>
          <h3>Requisitos</h3>
    Pra continuar, vamos precisar que permita o <a
            href="https://discord.com/api/oauth2/authorize?client_id=776083372787236864&permissions=8&redirect_uri=https://matanbot.matandriola.com/&response_type=code&scope=connections%20bot%20guilds%20identify&state=discord"
          >acesso
      do bot ao servidor do discord</a>, e permita acesso da aplicação a <a
            href="https://id.twitch.tv/oauth2/authorize?client_id=23fng5cv85e3aif4shfi6ifvotl5uw&redirect_uri=https://matanbot.matandriola.com/&response_type=code&scope=channel%3Aread%3Asubscriptions%20channel_subscriptions&state=twitch"> sua
      conta na twitch.</a> Após sua autorização, você volta pra essa página.
    <h3>Observação para sua segurança: </h3>
          <p>Várias empresas como google, twitch, discord, spotify, facebook possuem essa forma de cadastro, é conhecida na programação como Oauth2, nessas situações você será direcionado diretamente para o servidor da empresa, e será perguntado para você se autoriza o acesso do aplicativo, inforando pra você quais dos seus dados o aplicativo quer usar</p>
        </p>

      </main>

      <footer >
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" height="12px" />
        </a>
      </footer>
    </div >
  )
}
