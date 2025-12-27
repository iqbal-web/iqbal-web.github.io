'use client'

import { FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { 
  fadeInUp, 
  fadeInDown, 
  fadeIn, 
  staggerContainer, 
  cardHover, 
  cardHoverSmall 
} from '@/utils/animations'

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        About Me
      </motion.h1>
      
      {/* Bio Section */}
      <motion.section 
        className="mb-16"
        {...fadeInUp}
      >
			  <p className="text-lg text-secondary max-w-3xl mx-auto">
				  With 4+ years of experience in front-end and back-end WordPress and WooCommerce development, I specialize in custom plugin and theme development, API integrations, and performance optimization.

				  At Xpeed Studio, I contributed to scaling ElementsKit to nearly 2M active installs and co-developed GutenKit, which reached 10K installs in its first year. I work confidently with Git, Composer, NPM, WP-CLI, REST APIs, and collaborate closely with project managers and support teams to deliver high-quality client solutions.

				  I’m passionate about building high-quality, scalable WordPress solutions and thrive in fast-paced, collaborative environments.

				  My expertise spans the full stack, with a focus on JavaScript, React, WordPress, PHP, Next.js, and REST API development. I care deeply about clean architecture, performance, and accessibility-first design, always aiming to create user experiences that feel intuitive and truly user-friendly.

				  From crafting custom themes and Gutenberg blocks to architecting high-performance plugins, I’ve played a key role in the development of several major products— including ElementsKit, MetForm, ShopEngine, PopupKit, and GutenKit —ensuring each project meets both business goals and user needs.

				  I’m currently focused on building efficient, maintainable, and modern web solutions, pushing WordPress capabilities forward, and staying up-to-date with the latest trends in both frontend and backend development.

				  I’m always open to connecting with like-minded professionals, exploring new opportunities, and contributing to impactful projects.

				  Let’s connect and build something great together
			  </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.2 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Skills
        </motion.h2>
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>React / Next.js</li>
              <li>SCSS</li>
              <li>Tailwind CSS</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary space-y-2">
              <li>PHP</li>
              <li>PostgreSQL</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub</li>
              <li>Composer</li>
              <li>NPM</li>
              <li>WP-CLI</li>
              <li>REST APIs</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.4 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Experience
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >

		<motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2"> Front End Engineer (II) </h3>
            <p className="text-primary mb-2"> Xpeed Studio (Roxnor) •  2022 - Present</p>
					  <ul className="text-secondary list-disc list-inside space-y-2">
						  <li>  Worked as a core team member contributing to the development and enhancement of
							  flagship WordPress plugins, including ElementsKit and GutenKit, Assisted in scaling the
							  ElementsKit plugin from 700K to nearly 2M active installations by implementing new
							  features, resolving technical issues, and optimizing performance.</li>
						  <li>Collaborated on the launch and growth of the GutenKit plugin, contributing to its
							  achievement of over 10,000 active installations within the first year of release.</li>
						  <li> Actively participated in Agile workflows, contributing to efficient sprint planning, task
							  execution, and ensuring timely delivery of project milestones.</li>
					  </ul>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2"> Front End Developer</h3>
            <p className="text-primary mb-2"> Theme Pure • Aug 2021 - Apr 2022</p>
					  <ul className="text-secondary list-disc list-inside space-y-2">
						  <li> Executed bug fixing and comprehensive testing, ensuring high-quality performance and
							  user-friendly template design for all WordPress themes.</li>
						  <li>Worked alongside a team of developers to enhance project outcomes through effective
							  collaboration and knowledge sharing</li>
						  <li>Transformed PSD designs into responsive HTML, ensuring pixel-perfect accuracy and a
							  seamless user interface across various devices.</li>
					  </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Front End Developer</h3>
            <p className="text-primary mb-2"> Nested It Solution •  Aug 2020 - Jan 2021</p>
					  <ul className="text-secondary list-disc list-inside space-y-2">
						  <li> Working with the wider development team.</li>
						  <li> Manage website design, Create HTML Template for Template Monster</li>
					  </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        {...fadeIn}
        transition={{ delay: 0.6 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Education
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Bachelor of Science in Computer Science & Engineering (CSE)</h3>
            <p className="text-primary mb-2"> Green University of Bangladesh • 2021 - 2025</p>
            <p className="text-secondary">
              Graduated with honors. Focused on software engineering and web development.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  )
} 