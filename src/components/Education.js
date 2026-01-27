import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-16 sm:py-20 lg:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Education</h2>
        </div>

        <div className="space-y-4">
          <div className="rounded-md border border-border bg-card p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Master of Science, Computer Science with specialization in Computing Systems and Machine Learning</h3>
            <h4 className="text-sm text-primary">Georgia Institute of Technology - Atlanta, Georgia</h4>
            <p className="text-xs text-muted-foreground mt-1">August 2024 - December 2025</p>
            <p className="mt-2"><strong>CGPA:</strong> 3.91/4.0</p>
          </div>
          <div className="rounded-md border border-border bg-card p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Bachelor of Technology, Computer Science and Engineering</h3>
            <h4 className="text-sm text-primary">VR Siddhartha Engineering College - Vijayawada, India</h4>
            <p className="text-xs text-muted-foreground mt-1">July 2017 - April 2021</p>
            <p className="mt-2"><strong>CGPA:</strong> 3.9/4.0</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;