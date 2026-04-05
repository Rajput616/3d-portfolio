import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Lead Software Engineer</h4>
                <h5>Bounteous X Accolite</h5>
              </div>
              <h3>2025–NOW</h3>
            </div>
            <p>
              Client: Morgan Stanley. Engineered end-to-end deposit ingestion pipelines
              and structured service layers to consistently enrich transactions within
              the Treasury Deposits ecosystem.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>LLM Java Developer</h4>
                <h5>Turing</h5>
              </div>
              <h3>2024–25</h3>
            </div>
            <p>
              Client: Apple, Meta. Enhanced LLMs via RLHF to improve response accuracy,
              and designed strategies aligning AI outputs with real-world scenarios.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Digital Specialist Engineer</h4>
                <h5>Infosys Limited</h5>
              </div>
              <h3>2023–24</h3>
            </div>
            <p>
              Client: Danske Bank. Development of scalable enterprise systems, applying
              agile SDLC concepts in banking domains and enterprise applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate Systems Engineer</h4>
                <h5>Tata Consultancy Services</h5>
              </div>
              <h3>2021-23</h3>
            </div>
            <p>
              Client: Kotak Mahindra. Developed secure eKYC modules, RESTful microservices,
              and user-friendly banking workflows improving overall rural banking UX integrations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
