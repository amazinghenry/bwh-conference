import "./Exhibition.css";

const Exhibition = () => {
  return (
    <div className="exhibitionContainer">
      <div className="container">
        <h2>Exhibition Package</h2>
        <div className="exhibitionGroup">
          <div className="exhibitionItem">
            <div className="exhibitionPackage shared">
              <h4>Shared Table</h4>
              <h5>&#8358;20,000</h5>
            </div>
            <div className="exhibitionPackage full">
              <h4>Full Table</h4>
              <h5>&#8358;30,000</h5>
            </div>
            <div className="exhibitionPackage space">
              <h4>Space 9SQM</h4>
              <h5>&#8358;70,000</h5>
            </div>
            <div className="exhibitionPackage booth">
              <h4>Booth Construction</h4>
              <h5>&#8358;200,000</h5>
            </div>
          </div>

          <div className=" whyExhibit">
            <h3 className="text-light">Why Exhibit?</h3>
            <ul className="list-group">
              <li className="list-group-item">
                Direct in-event interaction with audience for product
                development and market research
              </li>
              <li className="list-group-item">Increase business traffic</li>
              <li className="list-group-item">
                Boost social strategy to target
              </li>
              <li className="list-group-item">
                Direct networking and brand referrals
              </li>
              <li className="list-group-item">Build business relationships</li>
              <li className="list-group-item">
                Collaborate with industry experts tailored for your business
              </li>
              <li className="list-group-item">
                Business announcements on top marketing platforms
              </li>
              <li className="list-group-item">
                Access marketing and business expansion grants
              </li>
              {/* <li className="list-group-item">
                Safeguarding your business and maximising your business
                potential
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exhibition;
