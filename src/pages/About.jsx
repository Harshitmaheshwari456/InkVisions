import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-extrabold mb-6 text-yellow-600 dark:text-yellow-400">
          About Page Palette
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Page Palette transforms the reading experience by integrating AI-powered visuals with eBooks, making every story more immersive and engaging.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-10">
        {/* Mission Section */}
        <motion.section 
          className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p>
            We aim to revolutionize digital reading by blending text with AI-generated visuals, allowing readers to fully immerse themselves in the stories they love.
          </p>
        </motion.section>

        {/* Our Story */}
        <motion.section 
          className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p>
            Born from a passion for books and technology, Page Palette started as an experiment by AI enthusiasts who wanted to bridge the gap between imagination and reality. Now, it’s a global movement redefining how we experience literature.
          </p>
        </motion.section>

        {/* Technology */}
        <motion.section 
          className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-4">Our Technology</h2>
          <p>
            Leveraging natural language processing and AI-driven image generation, Page Palette creates stunning visuals that complement every page, deepening comprehension and engagement.
          </p>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          className="bg-yellow-500 text-white p-8 rounded-lg shadow-md text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-4">Join Us</h2>
          <p className="mb-4">
            Become part of our growing community of visually enhanced readers. Whether you're a student, a fiction lover, or a knowledge seeker, Page Palette is here to elevate your experience.
          </p>
          <button className="bg-white text-yellow-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
            Start Your Journey
          </button>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
