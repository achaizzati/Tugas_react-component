import { useState } from 'react';
import heroImg from '../assets/foto-aca.jpg';

export default function ContaintComponen() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* HOME */}
      <section id="home" className="home">
        <div className="home-text">
          <p className="welcome">WELCOME TO MY SPACE ✦</p>

          <h1>
            Haiii! I'm
            <br />
            <span>Acha.</span>
          </h1>

          <p className="description">
            Mahasiswa Pendidikan Ilmu Komputer yang sedang belajar, berkembang,
            dan mengeksplorasi dunia teknologi.
          </p>

          <div className="home-buttons">
            <a href="#about" className="main-button">
              Explore Me →
            </a>

            <button
              className="hello-button"
              onClick={() => setCount(count + 1)}
            >
              ♡ {count}
            </button>
          </div>
        </div>

        <div className="home-photo">
          <div className="circle-bg"></div>

          <div className="photo-wrapper">
            <img src={heroImg} alt="Acha" />
          </div>

          <div className="floating-card">
            <span>✦</span>
            <div>
              <b>Creative Mind</b>
              <small>Always learning</small>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about">
        <div className="section-title">
          <p>GET TO KNOW ME</p>
          <h2>About Me</h2>
        </div>

        <div className="about-content">
          <div className="about-card">
            <span className="quote">“</span>

            <p>
              Halo! Saya <b>Acha Izzati Dasyen</b>, mahasiswa Pendidikan Ilmu
              Komputer di Universitas Pendidikan Indonesia.
            </p>

            <p>
              Saya tertarik dengan teknologi, pemrograman, desain website, dan
              hal-hal kreatif lainnya. Website ini menjadi salah satu ruang
              untuk memperkenalkan diri dan perjalanan belajar saya.
            </p>
          </div>

          <div className="info-card">
            <div>
              <span>Nama</span>
              <b>Acha Izzati Dasyen</b>
            </div>

            <div>
              <span>Asal</span>
              <b>Riau, Indonesia</b>
            </div>

            <div>
              <span>Universitas</span>
              <b>Universitas Pendidikan Indonesia</b>
            </div>

            <div>
              <span>Program Studi</span>
              <b>Pendidikan Ilmu Komputer</b>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section education">
        <div className="section-title">
          <p>MY JOURNEY</p>
          <h2>Education</h2>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="dot"></div>

            <div className="education-card">
              <span>2025 — Present</span>
              <h3>Universitas Pendidikan Indonesia</h3>
              <p>Pendidikan Ilmu Komputer</p>
              <small>
                Fakultas Pendidikan Matematika dan Ilmu Pengetahuan Alam
              </small>
            </div>
          </div>

          <div className="timeline-item">
            <div className="dot"></div>

            <div className="education-card">
              <span>High School</span>
              <h3>SMKN 1 Mandau</h3>
              <p>Teknik Komputer dan Jaringan</p>
              <small>Duri-Riau, Indonesia</small>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section skills">
        <div className="section-title">
          <p>WHAT I LOVE TO LEARN</p>
          <h2>My Skills</h2>
        </div>

        <div className="skills-container">
          <div className="skill-card">
            <span>01</span>
            <h3>HTML</h3>
            <p>Building clean website structures.</p>
          </div>

          <div className="skill-card">
            <span>02</span>
            <h3>CSS</h3>
            <p>Creating beautiful visual designs.</p>
          </div>

          <div className="skill-card">
            <span>03</span>
            <h3>JavaScript</h3>
            <p>Adding interaction to websites.</p>
          </div>

          <div className="skill-card">
            <span>04</span>
            <h3>React JS</h3>
            <p>Building modern web interfaces.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <p>Lebih Lanjut</p>

        <h2>
          Have something
          <br />
          <i>to say?</i>
        </h2>

        <p className="contact-text">Ayo ngobrol!</p>

        <a href="mailto:acha@student.upi.edu" className="contact-button">
          Send Me an Email ↗
        </a>
      </section>
    </>
  );
}