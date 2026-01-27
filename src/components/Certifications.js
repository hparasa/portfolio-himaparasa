// src/components/Certifications.js
import React from 'react';
import { FaAws } from 'react-icons/fa';
import { certifications } from '../data/certifications';

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-16 sm:py-20 lg:py-24 bg-foreground/[0.02]"
    >
      <div className="container text-center">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Certifications
          </h2>
          <p className="mt-2 text-muted-foreground">
            Recognized achievements in the field of technology.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="rounded-md border border-border bg-card p-6 shadow-sm transition hover:shadow-md"
            >
              <FaAws size={40} className="mx-auto mb-3 text-[#FF9900]" />

              <h3 className="text-lg font-semibold">{cert.name}</h3>
              <p className="text-sm text-muted-foreground">
                Issued By: {cert.issuer}
              </p>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-primary font-medium"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;