import '@/styles/insider.scss';


export default function InsiderSection() {
  return (
    <section className="insider-section">
      <div className="insider-container">
        <div className="insider-image-wrapper">
          <img src="/insider.jpg" alt="Marvel Insider" layout="responsive" />
        </div>
        <div className="insider-content">
          <p className="insider-label">DC Insider</p>
          <h2 className="insider-heading">
            watch, Earn, <strong>Redeem!</strong>
          </h2>
          <p className="insider-description">
            Get a reward for what you already do as a fan.
          </p>
          <button className="insider-cta">Join Now</button>
        </div>
      </div>
    </section>
  );
}
