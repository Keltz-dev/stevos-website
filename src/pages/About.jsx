const About = () => {
  return (
    <>
      <div className="container">
        <div className="centered">
          <img
            className='rounded'
            src="https://static.wixstatic.com/media/122352_6504cf07bea5441f8bc7288a67fa6384~mv2.jpg/v1/crop/x_0,y_598,w_2433,h_2433/fill/w_320,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/R1-03527-0030_JPG.jpg"
            alt="Image of Steffen Sasse"
          />
        </div>
        <div className="grid even-rows">
          <div className="grid-item-cv">
            <div className="text-wrapper wrapper-cv">
              <h2 className="inter-normal">
                KOMBINATIV Büro für Architektur, Berlin
              </h2>
              <h3 className="inter-normal">since 2022</h3>
            </div>
          </div>
          <div className="grid-item-cv">
            <div className="text-wrapper wrapper-cv montserrat-normal">
              <p>Architect</p>
            </div>
          </div>
          <div className="grid-item-cv">
            <div className="text-wrapper wrapper-cv">
              <h2 className="inter-normal">The Barn GmbH, Berlin</h2>
              <h3 className="inter-normal">2018 - 2020</h3>
            </div>
          </div>
          <div className="grid-item-cv">
            <div className="text-wrapper wrapper-cv montserrat-normal">
              <p>Design, visualization and project support</p>
            </div>
          </div>
          <div className="grid-item-cv">
            <div className="text-wrapper wrapper-cv">
              <h2 className="inter-normal">Blauraum Architekten, Hamburg</h2>
              <h3 className="inter-normal">2018</h3>
            </div>
          </div>
          <div className="grid-item-cv">
            <div className="text-wrapper wrapper-cv montserrat-normal">
              <p>
                Internship 5 months: Competition and implementation planning
              </p>
            </div>
          </div>
          <div className="grid-item-cv">
            <div className="text-wrapper wrapper-cv">
              <h2 className="inter-normal">The Rainforest Company, Zürich</h2>
              <h3 className="inter-normal">2017 - 2018</h3>
            </div>
          </div>
          <div className="grid-item-cv">
            <div className="text-wrapper wrapper-cv montserrat-normal">
              <p>Advertising graphics and packaging design</p>
            </div>
          </div>
          <div className="grid-item-cv">
            <div className="text-wrapper wrapper-cv">
              <h2 className="inter-normal">Vonester Architekten, Köln</h2>
              <h3 className="inter-normal">2014</h3>
            </div>
          </div>
          <div className="grid-item-cv">
            <div className="text-wrapper wrapper-cv montserrat-normal">
              <p>Internship 3 months:</p>
              <p>Visualization and project support</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
