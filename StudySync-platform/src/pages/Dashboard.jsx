import { useEffect, useState } from "react";

function Dashboard() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Plan Your Study",
      description: "Organize your subjects and create a smart study plan.",
      icon: "📚"
    },
    {
      title: "Manage Your Tasks",
      description: "Track assignments, deadlines and daily tasks easily.",
      icon: "✅"
    },
    {
      title: "Stay Focused",
      description: "Use the study timer to improve your concentration.",
      icon: "⏱️"
    },
    {
      title: "Track Your Progress",
      description: "Monitor your learning progress and study performance.",
      icon: "📈"
    },
    {
      title: "Achieve Your Goals",
      description: "Stay consistent and reach your academic goals.",
      icon: "🎯"
    }
  ];

  // Automatic slide movement
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  // Previous slide
  function previousSlide() {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  }

  // Next slide
  function nextSlide() {
    setCurrentSlide(
      (prev) => (prev + 1) % slides.length
    );
  }

  return (
    <div className="dashboard">

      <div className="hero">

        <div
          className="slides-container"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`
          }}
        >

          {slides.map((slide, index) => (
            <div className="slide" key={index}>

              <div className="slide-content">
                <span className="slide-icon">
                  {slide.icon}
                </span>

                <h1>{slide.title}</h1>

                <p>{slide.description}</p>

                <button className="start-btn">
                  Get Started →
                </button>
              </div>

            </div>
          ))}

        </div>

        {/* Previous button */}
        <button
          className="arrow left"
          onClick={previousSlide}
        >
          ❮
        </button>

        {/* Next button */}
        <button
          className="arrow right"
          onClick={nextSlide}
        >
          ❯
        </button>

        {/* Dots */}
        <div className="dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={
                currentSlide === index
                  ? "dot active"
                  : "dot"
              }
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

      </div>

      <div className="dashboard-title">
        <h2>Welcome to StudySync 👋</h2>
        <p>Your personal student productivity dashboard.</p>
      </div>

    </div>
  );
}

export default Dashboard;