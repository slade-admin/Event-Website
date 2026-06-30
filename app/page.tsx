export default function HomePage() {
  const services = [
    ['Weddings', 'Weddings Made Beautiful'],
    ['Baby Showers', 'Baby Showers Made With Love'],
    ['Graduations', 'Graduations Done Right'],
    ['Birthdays', 'Birthdays Made Memorable'],
    ['Corporate Events', 'Corporate Events with Impact'],
    ['Custom Celebrations', 'Tailored events for every special occasion'],
  ];

  return (
    <main className="site">
      <header className="header">
        <div className="container navwrap">
          <div className="brand">M&M Events</div>
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="button" href="#contact">Book a Consultation</a>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">We Plan. You Celebrate.</p>
            <h1>Luxury Event Planning for Unforgettable Celebrations</h1>
            <p className="lede">
              M&M Events creates elegant, seamless, and memorable experiences for weddings,
              baby showers, graduations, birthdays, corporate events, and custom celebrations.
            </p>
            <div className="actions">
              <a className="button" href="#services">Explore Services</a>
              <a className="button secondary" href="#contact">Contact Us</a>
            </div>
          </div>
          <div className="hero-card">
            <h2>Timeless Moments. Perfectly Planned.</h2>
            <p>
              We bring creativity, professionalism, and attention to detail to every event.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container">
          <h2>Why Choose M&M Events?</h2>
          <p className="section-text">
            We don’t just plan events — we create experiences. From concept to coordination,
            every detail is handled with care so you can enjoy the moment.
          </p>
          <div className="grid cols-3">
            {['Creative & personalized concepts', 'Stress-free planning', 'Attention to every detail', 'Reliable & professional team', 'Memories that last a lifetime', 'Elegant, premium execution'].map((item) => (
              <div className="card" key={item}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark" id="services">
        <div className="container">
          <h2>Events We Specialize In</h2>
          <div className="grid cols-3">
            {services.map(([title, desc]) => (
              <article className="card" key={title}>
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="gallery">
        <div className="container">
          <h2>Gallery</h2>
          <p className="section-text">A curated look at luxury celebrations, elegant styling, and unforgettable details.</p>
          <div className="grid cols-2">
            <div className="card tall">Wedding showcase placeholder</div>
            <div className="card tall">Corporate event showcase placeholder</div>
          </div>
        </div>
      </section>

      <section className="section dark" id="testimonials">
        <div className="container">
          <h2>Testimonials</h2>
          <div className="grid cols-2">
            <div className="card">“Everything was beautiful, seamless, and completely stress-free.”</div>
            <div className="card">“M&M Events brought our vision to life with elegance and professionalism.”</div>
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container contact">
          <h2>Contact</h2>
          <p>Phone: 0759 792062</p>
          <p>Email: events.atmandm@gmail.com</p>
          <a className="button" href="mailto:events.atmandm@gmail.com">Start Your Consultation</a>
        </div>
      </section>
    </main>
  );
}
