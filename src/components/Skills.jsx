import React, { useEffect, useRef, useState } from 'react';
import skillsData from '../data/skillsData';
import star from '../assets/images/star.svg';

const Skills = () => {
  const skillsRef = useRef(null);
  const [animated, setAnimated] = useState(false);
  const [counts, setCounts] = useState(skillsData.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !animated) {
          animateSkills();
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, [animated]);

  const animateSkills = () => {
    skillsData.forEach((skill, index) => {
      let currentCount = 0;
      const increment = Math.ceil(skill.value / 50); // speed factor
      const interval = setInterval(() => {
        currentCount += increment;
        if (currentCount >= skill.value) {
          currentCount = skill.value;
          clearInterval(interval);
        }
        setCounts(prev => {
          const updated = [...prev];
          updated[index] = currentCount;
          return updated;
        });
      }, 20);
    });
  };

  const midIndex = Math.ceil(skillsData.length / 2);
  const leftSkills = skillsData.slice(0, midIndex);
  const rightSkills = skillsData.slice(midIndex);

  const renderSkills = (skills, startIndex) =>
    skills.map((skill, i) => {
      const realIndex = startIndex + i;
      return (
        <section className="skill-group" key={realIndex} id="skills" data-aos="fade-up">
          <div className="skill-label">
            <span>{skill.name}</span>
            <span className="count">{counts[realIndex]}%</span>
          </div>
          <div className="progress">
            <div
              className="progress-bar"
              style={{ width: `${counts[realIndex]}%` }}
            ></div>
          </div>
        </section>
      );
    });

  return (
    <div className="skills-area" id="skills" data-aos="fade-up" ref={skillsRef}>
      <div className="container">
        <div className="title-box text-center d-flex justify-content-center align-items-center position-relative">
          <h2>Skills</h2>
          <h3>
            <span>
              <img src={star} alt="" />
            </span>{" "}
            My Skills{" "}
            <span>
              <img src={star} alt="" />
            </span>
          </h3>
        </div>

        <div className="skills-row">
          <div className="skills-col">{renderSkills(leftSkills, 0)}</div>
          <div className="skills-col">{renderSkills(rightSkills, midIndex)}</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
