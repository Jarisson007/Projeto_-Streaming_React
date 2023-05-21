import "./styles.css";

import Header from "./components/Header";
import Section from "./components/Section";
import ListItem from "./components/ListItem";

const gamesListData = [
  {
    url: "https://www.twitch.tv/directory/game/The%20Sims%204",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/369252_IGDB-144x192.jpg",
    alt: "Imagem do jogo The Sims 4"
  },

  {
    url:
      "https://www.twitch.tv/directory/game/Friday%20the%2013th%3A%20The%20Game",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/488518_IGDB-144x192.jpg",
    alt: "Imagem do jogo Friday the 13th"
  },

  {
    url:
      "https://www.twitch.tv/directory/game/Mobile%20Legends%3A%20Bang%20Bang",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/494184_IGDB-144x192.jpg",
    alt: "Imagem do jogo Mobile legend"
  },

  {
    url: "https://www.twitch.tv/directory/game/Planet%20Coaster",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/490384_IGDB-144x192.jpg",
    alt: "Imagem do jogo Planet Coaster"
  },

  {
    url: "https://www.twitch.tv/directory/game/Grand%20Theft%20Auto%20V",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-144x192.jpg",
    alt: "Imagem do jogo GTA V"
  }
];

const channelListData = [
  {
    url: "https://www.twitch.tv/maykbrito",
    imageUrl:
      "https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original",
    alt: "Imagem disney"
  },

  {
    url: "https://www.netflix.com/br/",
    imageUrl:
      "https://files.tecnoblog.net/wp-content/uploads/2021/12/melhor-streaming-2021-netflix-1.jpg",
    alt: "Imagem Netflix"
  },

  {
    url: "https://www.hbomax.com/br/pt",
    imageUrl:
      "https://cinepop.com.br/wp-content/uploads/2021/02/hbo-max-logo.jpg",
    alt: "Imagemd de HBOMAX"
  },

  {
    url:
      "https://www.primevideo.com/offers/nonprimehomepage/ref=dvm_pds_amz_br_dc_s_g_mkw_s2Hv03IvM-dc_pcrid_620438871494?gclid=CjwKCAjw36GjBhAkEiwAKwIWycaD_i3pXW3l4k_SfZ4YGVTmWsrJHPhM4Ul-wCu6M__uSwtJEJDWVRoCFEoQAvD_BwE&mrntrk=slid__pgrid_62046161446_pgeo_1001625_x__adext__ptid_kwd-296527732991",
    imageUrl:
      "https://t.ctcdn.com.br/IKXEZxKaBFdLwFwFpaQpOJ-pax4=/1400x788/smart/i570349.jpeg",
    alt: "Imagemd de PRIME VIDEO"
  },

  {
    url: "https://globoplay.globo.com/",
    imageUrl:
      "https://mdtv.com.br/hf-conteudo/uploads/posts/2021/12/11608_globoplay-jpg.jpg",
    alt: "Imagemd de GloboPlay"
  }
];

const socialListData = [
  {
    url: "https://www.instagram.com/jarisson_drumond/",
    imageUrl: "/assets/instagram.svg",
    alt: "Instagram de Jarisson Neves"
  },

  {
    url: "https://www.linkedin.com/in/jarisson-neves/",
    imageUrl: "/assets/linkedin.svg",
    alt: "Linkedln de Jarisson Neves"
  }
];

export default function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Section
          title="Meus jogos"
          subtitle="Os games que eu mais curto jogar!"
          className="games-list"
        >
          {gamesListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>

        <Section
          title="Canais e Streamers"
          subtitle="Lista de Canais e transmissões que não podem faltar!"
          className="channel-list"
        >
          {channelListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>

        <Section
          title="Minhas redes"
          subtitle="Se conecte comigo agora mesmo!"
          className="social-list"
        >
          {socialListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>
      </main>
    </div>
  );
}
