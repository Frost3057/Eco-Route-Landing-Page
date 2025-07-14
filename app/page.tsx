"use client"

import { Lightbulb, Leaf, RotateCcw, Github } from "lucide-react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function EcoRouteLanding() {
  const { scrollYProgress } = useScroll()
  const heroRef = useRef(null)
  const teamRef = useRef(null)
  const featuresRef = useRef(null)
  const appRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const teamInView = useInView(teamRef, { once: true, margin: "-100px" })
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" })
  const appInView = useInView(appRef, { once: true, margin: "-100px" })

  // Parallax effects
  const yHero = useTransform(scrollYProgress, [0, 0.3], [0, -100])
  const yFeatures = useTransform(scrollYProgress, [0.2, 0.6], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const glassVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
      rotateX: -15,
      rotateY: 15,
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotateX: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 0.8,
      },
    },
  }

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Animated Header */}
      <motion.header
        className="bg-blue-600 text-white py-4 px-6 relative z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <motion.h1
          className="text-xl font-semibold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          Eco Route
        </motion.h1>
      </motion.header>

      {/* Hero Section with Advanced Animations */}
      <section
        className="relative min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-blue-100 py-16 px-6"
        ref={heroRef}
      >
        {/* Animated Grid Background */}
        <motion.div className="absolute inset-0 opacity-40" style={{ y: yHero }}>
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(34, 197, 94, 0.4) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34, 197, 94, 0.4) 1px, transparent 1px),
                linear-gradient(rgba(34, 197, 94, 0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34, 197, 94, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px, 40px 40px, 8px 8px, 8px 8px",
            }}
          ></div>
        </motion.div>

        <motion.div className="max-w-6xl mx-auto text-center relative z-10" style={{ opacity }}>
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 100 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 20,
              duration: 1.2,
            }}
          >
            Every Mile,{" "}
            <motion.span
              className="text-green-600 italic"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Optimized.
            </motion.span>
            <br />
            Every Delivery,{" "}
            <motion.span
              className="text-blue-600 italic"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Verified.
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-gray-700 text-xl mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            Faster, fuel-efficient routing and tamper-proof eco-tracking— so sustainability scales with your supply
            chain.
          </motion.p>

          <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <motion.h3 className="text-2xl font-semibold text-gray-800 mb-8" animate={floatingAnimation}>
              Start the Journey
            </motion.h3>

            {/* Enhanced Video Container */}
            <motion.div
              className="relative max-w-4xl mx-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={heroInView ? { scale: 1, opacity: 1 } : {}}
              transition={{
                delay: 1.3,
                type: "spring",
                stiffness: 80,
                damping: 20,
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              {/* Animated Gradient Overlays */}
              <motion.div
                className="absolute -left-16 top-0 bottom-0 w-32 bg-gradient-to-r from-yellow-300 via-orange-300 to-transparent opacity-70 blur-2xl"
                animate={{
                  opacity: [0.7, 0.9, 0.7],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute -right-16 top-0 bottom-0 w-32 bg-gradient-to-l from-blue-400 via-blue-300 to-transparent opacity-70 blur-2xl"
                animate={{
                  opacity: [0.7, 0.9, 0.7],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              />

              {/* Embedded Loom Video */}
              <div style={{ position: 'relative', paddingBottom: '52.38095238095239%', height: 0 }}>
                <iframe
                  src="https://www.loom.com/embed/785de4ea26234ade8802aa16be37a1b6?sid=5ee093e9-e248-4ff2-9322-da31a5a88652"
                  frameBorder="0"
                  allowFullScreen
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  title="Loom Video Demo"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section with Staggered Animations */}
      <section className="py-20 px-6 bg-white relative" ref={featuresRef}>
        <motion.div className="max-w-6xl mx-auto text-center" style={{ y: yFeatures }}>
          <motion.h3
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {"Here's How"}{" "}
            <motion.span
              className="text-green-600"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={featuresInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              EcoRoute
            </motion.span>{" "}
            Makes a Difference
          </motion.h3>

          <motion.p
            className="text-gray-700 text-lg mb-16 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            EcoRoute is a dual-platform system designed to revolutionize {"Walmart's"} last-mile delivery by making it
            smarter, greener, and customer-powered.
          </motion.p>

          {/* Animated Feature Icons */}
          <motion.div
            className="grid md:grid-cols-3 gap-12 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
          >
            {[
              {
                icon: Lightbulb,
                color: "blue",
                text: "Leverages real-time traffic and satellite data + Walmart's vast distribution network",
              },
              { icon: Leaf, color: "green", text: "Gamified EcoCoins for every sustainable choice." },
              { icon: RotateCcw, color: "blue", text: "Every delivery and purchase reduces carbon footprint." },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className={`bg-${feature.color}-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6`}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 },
                  }}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2 + index * 0.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                >
                  <feature.icon className={`w-10 h-10 text-${feature.color}-600`} />
                </motion.div>
                <motion.p
                  className="text-gray-600 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={featuresInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  {feature.text}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="bg-blue-50 p-8 rounded-xl border border-blue-100"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={featuresInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            <p className="text-blue-700 leading-relaxed text-lg">
              We directly supports {"Walmart's"} ESG goals by cutting emissions and rewarding greener choices. It boosts
              Spark Driver efficiency, enhances customer engagement through gamification, and scales seamlessly across
              future platforms.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* App Section with Enhanced Animations */}
      <section className="py-20 px-6 bg-gray-50 relative" ref={appRef}>
        {/* App Section Content */}
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          animate={appInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={appInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl font-bold mb-6">Introducing the EcoRoute App: Smarter Routes. Greener Choices.</h3>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
              Built for Spark Drivers, the app provides real-time, AI-optimized routes based on traffic, weather, and
              vehicle type prioritizing efficiency and sustainability.
            </p>
          </motion.div>

          {/* Enhanced Three Panel Layout */}
          <motion.div
            className="grid md:grid-cols-3 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate={appInView ? "visible" : "hidden"}
          >
            {/* Left Image */}
            <motion.div
              className="relative"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.4 },
              }}
            >
              <motion.img
                src="/partner_app_route.jpg"
                alt="Partner App Route"
                className="w-full h-full rounded-2xl shadow-2xl object-cover"
                initial={{ opacity: 0, x: -50 }}
                animate={appInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.8 }}
              />
            </motion.div>

            {/* Center Video with Enhanced Effects */}
            <motion.div className="relative" variants={itemVariants} whileHover={{ scale: 1.03 }}>
              {/* Animated Green Glow Effects */}
              <motion.div
                className="absolute -left-8 top-0 bottom-0 w-16 bg-gradient-to-r from-green-400 to-transparent opacity-60 blur-2xl"
                animate={{
                  opacity: [0.6, 0.8, 0.6],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute -right-8 top-0 bottom-0 w-16 bg-gradient-to-l from-green-400 to-transparent opacity-60 blur-2xl"
                animate={{
                  opacity: [0.6, 0.8, 0.6],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />

              {/* Embedded Loom Video for Center Tile */}
              <div style={{ position: 'relative', paddingBottom: '207.6923076923077%', height: 0 }}>
                <iframe
                  src="https://www.loom.com/embed/76015e3349db44529ab1bde7a70a8d6c?sid=bc37b030-4ea4-4527-a57b-d9a5f8887c3e"
                  frameBorder="0"
                  allowFullScreen
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  title="Loom Center App Demo"
                ></iframe>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="relative"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                rotateY: -5,
                transition: { duration: 0.4 },
              }}
            >
              <motion.img
                src="/partner_app_map.jpg"
                alt="Partner App Map"
                className="w-full h-full rounded-2xl shadow-2xl object-cover"
                initial={{ opacity: 0, x: 50 }}
                animate={appInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.8 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Dashboard Section */}
      <motion.section
        className="py-20 px-6 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h3
            className="text-4xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Walmart Admin Dashboard
          </motion.h3>

          <motion.p
            className="text-gray-700 text-lg mb-16 max-w-3xl mx-auto leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Real-time visibility and control over fleet performance. Designed for Walmart operations teams to track
            driver efficiency, route optimization, delivery emissions, and sustainability scores — all in one clean,
            centralized interface.
          </motion.p>

          {/* Embedded Loom Video for Admin Section */}
          <div style={{ position: 'relative', paddingBottom: '52.103559870550164%', height: 0 }}>
            <iframe
              src="https://www.loom.com/embed/ddf72d94ebf84716b01f5d1c4259e431?sid=21dc791a-144c-41f7-b68f-00f4b088cbe3"
              frameBorder="0"
              allowFullScreen
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              title="Loom Admin Dashboard Demo"
            ></iframe>
          </div>
        </div>
      </motion.section>

      {/* GitHub Section */}
      <motion.section
        className="py-16 px-6 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h3
            className="text-3xl font-bold mb-6"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Curious about how it all works?
          </motion.h3>

          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 text-lg">Check out our GitHub repo and dive into the tech powering EcoRoute.</p>
            <motion.div
              whileHover={{
                scale: 1.2,
                rotate: 15,
                transition: { duration: 0.3 },
              }}
            >
              <Github className="w-8 h-8 text-gray-700" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Future Implementation Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6 text-gray-800">Future Implementation</h3>
          <ul className="text-lg text-gray-700 space-y-4 list-disc list-inside mx-auto max-w-2xl text-left">
            <li>
              Advanced algorithm optimization for multi-warehouse and priority-based deliveries to further streamline logistics and improve efficiency.
            </li>
            <li>
              Blockchain-powered inventory management for warehouses, enabling real-time stock visibility for both administrators and customers, including live quantity updates in the customer app.
            </li>
            <li>
              Voice commerce integration for hands-free ordering and enhanced accessibility.
            </li>
          </ul>
        </div>
      </section>

      {/* Enhanced Team Section with Glass Morphism Animations */}
      <section className="py-20 px-6 bg-white relative overflow-hidden" ref={teamRef}>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h3
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Our Team
          </motion.h3>

          <div className="relative">
            {/* Animated Background Shapes */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={teamInView ? { opacity: 1 } : {}}
              transition={{ duration: 1.5 }}
            >
              {/* Left Prismatic Shape with Animation */}
              <motion.div
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/4"
                initial={{ x: -200, opacity: 0, rotateY: -45 }}
                animate={teamInView ? { x: 0, opacity: 1, rotateY: 0 } : {}}
                transition={{
                  delay: 0.3,
                  duration: 1.2,
                  type: "spring",
                  stiffness: 60,
                }}
              >
                <div className="relative w-96 h-80">
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      rotateY: [0, 5, 0],
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <div
                      className="w-full h-full opacity-80"
                      style={{
                        background: `linear-gradient(135deg, 
                      rgba(59, 130, 246, 0.8) 0%, 
                      rgba(37, 99, 235, 0.6) 25%, 
                      rgba(29, 78, 216, 0.7) 50%, 
                      rgba(30, 64, 175, 0.5) 75%, 
                      rgba(59, 130, 246, 0.6) 100%)`,
                        clipPath: "polygon(20% 0%, 80% 0%, 100% 40%, 80% 100%, 20% 100%, 0% 40%)",
                        filter: "blur(1px)",
                      }}
                    ></div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Prismatic Shape with Animation */}
              <motion.div
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/4"
                initial={{ x: 200, opacity: 0, rotateY: 45 }}
                animate={teamInView ? { x: 0, opacity: 1, rotateY: 0 } : {}}
                transition={{
                  delay: 0.5,
                  duration: 1.2,
                  type: "spring",
                  stiffness: 60,
                }}
              >
                <div className="relative w-96 h-80">
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      rotateY: [0, -5, 0],
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 2,
                    }}
                  >
                    <div
                      className="w-full h-full opacity-80"
                      style={{
                        background: `linear-gradient(225deg, 
                      rgba(59, 130, 246, 0.8) 0%, 
                      rgba(37, 99, 235, 0.6) 25%, 
                      rgba(29, 78, 216, 0.7) 50%, 
                      rgba(30, 64, 175, 0.5) 75%, 
                      rgba(59, 130, 246, 0.6) 100%)`,
                        clipPath: "polygon(20% 0%, 80% 0%, 100% 40%, 80% 100%, 20% 100%, 0% 40%)",
                        filter: "blur(1px)",
                      }}
                    ></div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Animated Glass Elements */}
              {[
                { left: "25%", top: "33%", rotation: -15, delay: 0.7 },
                { right: "25%", top: "33%", rotation: 15, delay: 0.9 },
                { left: "33%", bottom: "25%", rotation: 25, delay: 1.1 },
                { right: "33%", bottom: "25%", rotation: -25, delay: 1.3 },
              ].map((glass, index) => (
                <motion.div
                  key={index}
                  className="absolute w-32 h-48 opacity-40"
                  style={{
                    left: glass.left,
                    right: glass.right,
                    top: glass.top,
                    bottom: glass.bottom,
                  }}
                  initial={{
                    scale: 0,
                    opacity: 0,
                    rotate: glass.rotation + 180,
                  }}
                  animate={
                    teamInView
                      ? {
                          scale: 1,
                          opacity: 0.4,
                          rotate: glass.rotation,
                        }
                      : {}
                  }
                  transition={{
                    delay: glass.delay,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  <motion.div
                    className="w-full h-full backdrop-blur-sm border border-white/20 shadow-lg"
                    style={{
                      background: "rgba(147, 197, 253, 0.15)",
                      borderRadius: "8px",
                    }}
                    animate={{
                      y: [0, -10, 0],
                      rotateZ: [glass.rotation, glass.rotation + 2, glass.rotation],
                    }}
                    transition={{
                      duration: 3 + index * 0.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced Team Member Cards */}
            <motion.div
              className="grid md:grid-cols-4 gap-8 relative z-10"
              variants={containerVariants}
              initial="hidden"
              animate={teamInView ? "visible" : "hidden"}
            >
              {[
                { 
                  image: "/aman_image.jpg",
                  name: "Aman Bajpai",
                  role: "AI Developer, Blockchain Developer"
                },
                {
                  image: "/shreyash_image.jpg",
                  name: "Shreyash Khare",
                  role: "UI/UX Designer"
                },
                {
                  image: "/shivansh_image.jpeg",
                  name: "Shivansh Srivastava",
                  role: "Frontend Developer"
                },
                {
                  image: "/pradhi_image.jpeg",
                  name: "Pradhi Raj",
                  role: "BackEnd Developer"
                }
              ].map((member, i) => (
                <motion.div
                  key={i}
                  className="text-center relative"
                  variants={glassVariants}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    z: 50,
                    transition: {
                      duration: 0.4,
                      type: "spring",
                      stiffness: 300,
                    },
                  }}
                  style={{
                    perspective: "1000px",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Enhanced Glass Morphism Container */}
                  <motion.div
                    className="relative p-4 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-xl"
                    initial={{
                      backdropFilter: "blur(0px)",
                      background: "rgba(255, 255, 255, 0)",
                    }}
                    animate={
                      teamInView
                        ? {
                            backdropFilter: "blur(12px)",
                            background: "rgba(255, 255, 255, 0.1)",
                          }
                        : {}
                    }
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                    whileHover={{
                      background: "rgba(255, 255, 255, 0.15)",
                      borderColor: "rgba(255, 255, 255, 0.3)",
                      boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)",
                      transition: { duration: 0.3 },
                    }}
                  >
                    <motion.div
                      className="bg-black rounded-xl aspect-square mb-4 flex items-center justify-center text-white shadow-xl relative overflow-hidden"
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <Image
                        src={member.image}
                        alt={`Team member ${member.name}`}
                        width={300}
                        height={300}
                        className="object-cover rounded-xl"
                        priority
                        style={{
                          opacity: teamInView ? 1 : 0,
                          transform: teamInView ? 'scale(1)' : 'scale(1.2)',
                          transition: `all 0.6s ease-out ${0.7 + i * 0.1}s`
                        }}
                      />
                    </motion.div>

                    <motion.h4
                      className="font-semibold text-lg text-gray-800"
                      initial={{ opacity: 0, y: 20 }}
                      animate={teamInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.9 + i * 0.1, duration: 0.5 }}
                    >
                      {member.name}
                    </motion.h4>

                    <motion.p
                      className="text-gray-600 text-sm"
                      initial={{ opacity: 0, y: 10 }}
                      animate={teamInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1.0 + i * 0.1, duration: 0.5 }}
                    >
                      {member.role}
                    </motion.p>
                  </motion.div>

                  {/* Floating Glass Elements for specific cards */}
                  {(i === 1 || i === 2) && (
                    <motion.div
                      className={`absolute -top-4 ${i === 1 ? "-left-4" : "-right-4"} w-16 h-24 opacity-30`}
                      initial={{
                        scale: 0,
                        rotate: i === 1 ? -10 : 10,
                        opacity: 0,
                      }}
                      animate={
                        teamInView
                          ? {
                              scale: 1,
                              opacity: 0.3,
                              rotate: i === 1 ? -10 : 10,
                            }
                          : {}
                      }
                      transition={{
                        delay: 1.2 + i * 0.1,
                        duration: 0.8,
                        type: "spring",
                        stiffness: 100,
                      }}
                    >
                      <div
                        className="w-full h-full backdrop-blur-sm border border-white/20 shadow-lg"
                        style={{
                          background: "rgba(147, 197, 253, 0.15)",
                          borderRadius: "8px",
                        }}
                      />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <motion.footer
        className="relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
          radial-gradient(ellipse at top left, rgba(59, 130, 246, 0.9) 0%, transparent 50%),
          radial-gradient(ellipse at top right, rgba(37, 99, 235, 0.8) 0%, transparent 50%),
          radial-gradient(ellipse at bottom center, rgba(29, 78, 216, 0.9) 0%, transparent 70%),
          linear-gradient(135deg, #1e40af 0%, #1e3a8a 25%, #1d4ed8 50%, #2563eb 75%, #1e40af 100%)
        `,
          }}
          animate={{
            background: [
              `radial-gradient(ellipse at top left, rgba(59, 130, 246, 0.9) 0%, transparent 50%),
               radial-gradient(ellipse at top right, rgba(37, 99, 235, 0.8) 0%, transparent 50%),
               radial-gradient(ellipse at bottom center, rgba(29, 78, 216, 0.9) 0%, transparent 70%),
               linear-gradient(135deg, #1e40af 0%, #1e3a8a 25%, #1d4ed8 50%, #2563eb 75%, #1e40af 100%)`,
              `radial-gradient(ellipse at top left, rgba(37, 99, 235, 0.9) 0%, transparent 50%),
               radial-gradient(ellipse at top right, rgba(59, 130, 246, 0.8) 0%, transparent 50%),
               radial-gradient(ellipse at bottom center, rgba(30, 64, 175, 0.9) 0%, transparent 70%),
               linear-gradient(135deg, #1d4ed8 0%, #1e40af 25%, #1e3a8a 50%, #2563eb 75%, #1d4ed8 100%)`,
            ],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Animated Organic Shapes */}
        <div className="absolute inset-0">
          {[
            { size: "w-96 h-96", position: "top-0 right-0", delay: 0 },
            { size: "w-80 h-80", position: "bottom-0 left-0", delay: 2 },
            { size: "w-64 h-48", position: "top-1/4 left-1/4", delay: 4 },
            { size: "w-72 h-56", position: "bottom-1/3 right-1/4", delay: 6 },
          ].map((shape, index) => (
            <motion.div
              key={index}
              className={`absolute ${shape.position} ${shape.size} opacity-20`}
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
                opacity: [0.15, 0.25, 0.15],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: shape.delay,
              }}
            >
              <div
                className="w-full h-full"
                style={{
                  background: `radial-gradient(ellipse at center, rgba(147, 197, 253, 0.6) 0%, rgba(59, 130, 246, 0.4) 40%, transparent 70%)`,
                  borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                  transform: `rotate(${15 + index * 10}deg)`,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Animated SVG Curves */}
        <motion.svg
          className="absolute inset-0 w-full h-full opacity-15"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <motion.path
            d="M0,200 Q200,50 400,200 T800,200 Q1000,100 1200,200"
            stroke="rgba(147, 197, 253, 0.8)"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.8 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,250 Q300,80 600,250 T1200,250"
            stroke="rgba(59, 130, 246, 0.6)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
          />
        </motion.svg>

        <div className="relative z-10 py-20 px-6 text-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="flex justify-between items-start"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.h2
                  className="text-5xl font-bold mb-4 text-blue-100"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                >
                  EcoRoute
                </motion.h2>
              </motion.div>

              <motion.div
                className="text-right"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-4">General</h3>
                <div className="space-y-2">
                  <motion.a
                    href="https://github.com/Frost3057/EcoRoute.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-200 hover:text-white cursor-pointer transition-colors duration-300 block"
                    whileHover={{ x: -5, transition: { duration: 0.2 } }}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    GitHub Repository
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}
