import Search from '@/components/Search'

export default function Home() {
  return (
    <>
      <section id="home" className="welcome-hero">
        <div className="container">
          <div className="welcome-hero-txt">
            <h2>faça seu evento conosco</h2>
            <p>
              Nos da Event Hub estamos aqui para te ajudar a fazer seu evento da melhor forma
            </p>
            <button
              className="welcome-btn animated fadeInDown"
              style={{ opacity: 0 }}
            >
              Crie seu evento
            </button>
          </div>
        </div>
        <div className='container'> 
          <Search />
        </div>
      </section>

      {/* <!--service start--> */}
      
      <section id="service" className="service">
        <div className="section-header">
            <h2>Eventos Abertos</h2>
          </div>
        <div className="container">
          <div className="service-content">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="single-service-item">
                  <div className="single-service-icon">
                    {/* <i className="flaticon-car"></i> */}
                  <div className="section-header">
                  </div>
                  </div>
                  
                  <h2><a href="#">Praticidade</a></h2>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.  
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="single-service-item">
                  <div className="single-service-icon">
                    {/* <i className="flaticon-car-repair"></i> */}
                  </div>
                  <h2><a href="#">Segurança</a></h2>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.  
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="single-service-item">
                  <div className="single-service-icon">
                    {/* <i className="flaticon-car-1"></i> */}
                  </div>
                  <h2><a href="#">Garantia</a></h2>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--clients-say start--> */}
      <section id="clients-say" className="clients-say">
        <div className="container">
          <div className="section-header">
            <h2>Nossa Equipe</h2>
          </div>
          <div className="row">
            <div className="owl-carousel testimonial-carousel">
              <div className="col-sm-3 col-xs-12">
                <div className="single-testimonial-box">
                  <div className="testimonial-description">
                    <div className="testimonial-info">
                      <div className="testimonial-img">
                        <img src="/images/clients/c1.jpg" alt="image of clients person" />
                      </div>
                    </div>
                    <div className="testimonial-comment">
                      <p>
                        Rafael Siqueira
                      </p>
                    </div>
                    <div className="testimonial-person">
                      <h2><a href="#">Desenvolvedor</a></h2>
                      <h4>FullStack</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-xs-12">
                <div className="single-testimonial-box">
                  <div className="testimonial-description">
                    <div className="testimonial-info">
                      <div className="testimonial-img">
                        <img src="/images/clients/c2.jpg" alt="image of clients person" />
                      </div>
                    </div>
                    <div className="testimonial-comment">
                      <p>
                        Henrique de Paula
                      </p>
                    </div>
                    <div className="testimonial-person">
                      <h2><a href="#">Desenvolvedor</a></h2>
                      <h4>Backend</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-xs-12">
                <div className="single-testimonial-box">
                  <div className="testimonial-description">
                    <div className="testimonial-info">
                      <div className="testimonial-img">
                        <img src="/images/clients/c3.jpg" alt="image of clients person" />
                      </div>
                    </div>
                    <div className="testimonial-comment">
                      <p>
                        Diogo Lupianhe
                      </p>
                    </div>
                    <div className="testimonial-person">
                      <h2><a href="#">Desenvolvedor</a></h2>
                      <h4>Front-End</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-xs-12">
                <div className="single-testimonial-box">
                  <div className="testimonial-description">
                    <div className="testimonial-info">
                      <div className="testimonial-img">
                        <img src="/images/clients/c4.jpg" alt="image of clients person" />
                      </div>
                    </div>
                    <div className="testimonial-comment">
                      <p>
                        Caua Ferraz
                      </p>
                    </div>
                    <div className="testimonial-person">
                      <h2><a href="#">Desenvolvedor</a></h2>
                      <h4>Backend</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--new-cars start--> */}
      <section id="new-cars" className="new-cars">
        <div className="container">
          <div className="section-header">
            <p>verifique <span>aqui</span> os nossos</p>
            <h2>Melhores eventos</h2>
          </div>
          <div className="new-cars-content">
            <div className="owl-carousel owl-theme" id="new-cars-carousel">
              <div className="new-cars-item">
                <div className="single-new-cars-item">
                  <div className="row">
                    <div className="col-md-7 col-sm-12">
                      <div className="new-cars-img">
                        <img src="/images/new-cars-model/ncm1.png" alt="img"/>
                      </div>
                    </div>
                    <div className="col-md-5 col-sm-12">
                      <div className="new-cars-txt">
                        <h2><a href="#">Moonlight <span> Eletronico</span></a></h2>
                        <p>
                          O Moonlight Festival é um evento de música eletrônica que ocorre anualmente no estado de São Paulo, Brasil. Em 2025, o festival realizou sua 4ª edição no dia 12 de abril, no Hotel Estância Nazaré Paulista. Com uma estrutura aprimorada, o evento ofereceu uma experiência exclusiva para até 4 mil participantes, destacando-se por sua atmosfera intimista e foco na conexão entre os presentes. O line-up contou com artistas renomados como Shtuby, All in One, Altruism e Headroom, proporcionando uma sonoridade diversificada e envolvente. 
                        </p>
                        <p className="new-cars-para2">
                          Além da música, o Moonlight Festival é reconhecido por sua cenografia imersiva e temática inspirada na Lua Nova, simbolizando novos começos e transformações. A edição de 2025 reforçou a identidade do evento como um espaço de união, amizade e momentos inesquecíveis, oferecendo também opções de hospedagem no local para maior conforto dos participantes. Com ingressos limitados e uma proposta diferenciada, o festival se consolida como uma das experiências mais aguardadas no calendário da música eletrônica brasileira.
                        </p>
                        <button className="welcome-btn new-cars-btn">
                          ver mais
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="new-cars-item">
                <div className="single-new-cars-item">
                  <div className="row">
                    <div className="col-md-7 col-sm-12">
                      <div className="new-cars-img">
                        <img src="/images/new-cars-model/ncm2.png" alt="img"/>
                      </div>
                    </div>
                    <div className="col-md-5 col-sm-12">
                      <div className="new-cars-txt">
                        <h2><a href="#">Baile do Nego Trufa: Ritmo e Energia no Varandas Bar</a></h2>
                        <p>
                          O Baile do Nego Trufa é um evento que promete agitar a noite paulistana com muito funk e animação. Com MC Nego Trufa como atração principal, o show é conhecido por sua energia contagiante e repertório envolvente, conquistando fãs por onde passa. O evento é voltado para o público adulto, com classificação etária de 18 anos, e oferece uma experiência única para os amantes do gênero.  
                        </p>
                        <p className="new-cars-para2">
                          O Varandas Bar, localizado no bairro do Tatuapé em São Paulo, é o palco escolhido para essa festa imperdível. O local, conhecido por sua estrutura moderna e ambiente acolhedor, proporciona o cenário ideal para uma noite de muita música e diversão. Com ingressos acessíveis, o Baile do Nego Trufa no Varandas Bar é uma excelente opção para quem busca entretenimento de qualidade na capital paulista.
                        </p>
                        <button className="welcome-btn new-cars-btn">
                          ver mais
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="new-cars-item">
                <div className="single-new-cars-item">
                  <div className="row">
                    <div className="col-md-7 col-sm-12">
                      <div className="new-cars-img">
                        <img src="/images/new-cars-model/ncm3.png" alt="img"/>
                      </div>
                    </div>
                    <div className="col-md-5 col-sm-12">
                      <div className="new-cars-txt">
                        <h2><a href="#">Sunlight Festival: A Resistência da Fênix Brilha em São Paulo</a></h2>
                        <p>
                          O Sunlight Festival é um dos eventos mais aguardados da cena psytrance no Brasil, e sua edição de 2024 foi marcada por uma atmosfera de renascimento e superação. Realizado nos dias 6 e 7 de julho no UM33 Club, em Caçapava (SP), o festival adotou o tema "A Resistência da Fênix", simbolizando a resiliência e a paixão da comunidade eletrônica. Com mais de 20 atrações nacionais e internacionais, o lineup contou com nomes como Avalon, Talamasca, Sesto Sento, Vermont e Agneton, proporcionando uma experiência sonora intensa e diversificada. 
                        </p>
                        <p className="new-cars-para2">
                          Além da música, o festival ofereceu uma estrutura completa com áreas de camping, cenografia temática e espaços de convivência, reforçando seu compromisso com a imersão e o bem-estar dos participantes. A edição de 2024 consolidou o Sunlight Festival como um evento que vai além da música, celebrando a união, a arte e a transformação pessoal, elementos que continuam a atrair e inspirar seu público fiel.
                        </p>
                        <button className="welcome-btn new-cars-btn">
                          ver mais
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}