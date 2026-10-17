```jsx
import React from "react";

function App() {
  return (
    <>
      <header>
        <h1>Welcome to Our School</h1>
        <p>Learning Today, Leading Tomorrow</p>
      </header>

      <nav>
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#academics">Academics</a>
        <a href="#admissions">Admissions</a>
        <a href="#contact">Contact</a>
      </nav>

      <main>
        <section id="home">
          <h2>Welcome to Our School</h2>
          <p>
            We are committed to providing quality education,
            building character, and inspiring every student
            to achieve their full potential.
          </p>
        </section>

        <section id="about">
          <h2>About Our School</h2>
          <p>
            Our school provides a supportive learning environment
            where students develop knowledge, creativity,
            discipline, and confidence.
          </p>
        </section>

        <section id="academics">
          <h2>Our Academics</h2>
          <p>
            We encourage academic excellence, practical learning,
            teamwork, and lifelong learning.
          </p>
        </section>

        <section id="admissions">
          <h2>Admissions</h2>
          <p>
            Contact our school office for information about
            enrollment, eligibility, and admission procedures.
          </p>
        </section>

        <section id="contact">
          <h2>Contact Us</h2>
          <p>Email: info@yourschool.edu.np</p>
          <p>Address: Nepal</p>
        </section>
      </main>

      <footer>
        <p>
          © {new Date().getFullYear()} Our School.
          All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default App;
```
