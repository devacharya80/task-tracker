import { Link } from "react-router-dom";
import "./hero.css";

function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-headline">
            Manage Your Daily Tasks <br />
            With Ease
          </h1>

          <p className="hero-subheadline">
            Organize your work, set priorities, track progress, and stay
            productive with TaskFlow — your personal productivity companion.
          </p>

          <div className="hero-buttons">
            <Link to="/register" className="hero-btn-primary">
              Get Started
            </Link>

            <Link to="/login" className="hero-btn-secondary">
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Why Choose TaskFlow?</h2>
            <p className="text-muted">
              Everything you need to stay productive and organized.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card feature-card h-100 shadow-sm border-0">
                <div className="card-body text-center">
                  <h4 className="card-title">📝 Create Tasks</h4>
                  <p className="card-text">
                    Quickly add and manage tasks with a clean and intuitive
                    interface.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card feature-card h-100 shadow-sm border-0">
                <div className="card-body text-center">
                  <h4 className="card-title">📊 Track Progress</h4>
                  <p className="card-text">
                    Monitor your productivity and stay on top of deadlines.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card feature-card h-100 shadow-sm border-0">
                <div className="card-body text-center">
                  <h4 className="card-title">🚀 Stay Organized</h4>
                  <p className="card-text">
                    Prioritize important work and keep your workflow
                    streamlined.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;