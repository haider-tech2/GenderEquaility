import { useRef } from "react"
import { motion } from "framer-motion"
import { useAuth } from "../context/AuthContext"
import videoSrc from "../assets/landing.mp4"
import aboutGif from "../assets/about.gif"
import teamImage from "../assets/team.jpeg"

export default function Landing() {
  const { user, loginWithGoogle } = useAuth()
  const aboutRef = useRef()

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div
      style={{
        minHeight: "200vh",
        background: "#111",
        color: "#fff",
        overflowX: "hidden",
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.4)",
            zIndex: 0,
          }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            position: "relative",
            zIndex: 1,
            padding: "60px 20px",
            borderRadius: 20,
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(24px)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
            textAlign: "center",
            width: "90%",
            maxWidth: 700,
          }}
        >
          <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: 20 }}>
            EqualVoice
          </h1>

          <p style={{ fontSize: "1.4rem", color: "#ddd", marginBottom: 30 }}>
            We <strong>empower people to report gender inequality</strong> and
            see stories from others.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap" }}>
            <button
              onClick={scrollToAbout}
              style={buttonStyle}
            >
              Read More
            </button>

            <button
              onClick={!user ? loginWithGoogle : undefined}
              disabled={!!user}
              style={{
                ...buttonStyle,
                background: user
                  ? "rgba(200,200,200,0.25)"
                  : "rgba(255,255,255,0.15)",
                color: user ? "#aaa" : "#fff",
                cursor: user ? "not-allowed" : "pointer",
              }}
            >
              {user ? "Already Logged In" : "Login with Google"}
            </button>
          </div>
        </motion.div>
      </div>

      {/* About Section */}
      <div
        ref={aboutRef}
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "80px 5%",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ flex: "1 1 400px", minWidth: 300 }}
        >
          <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: 20 }}>
            About EqualVoice
          </h2>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            We have collectively, carefully made this webapp to help the victims
            of daily life gender inequality while keeping these victim's identity
            and personal information confidential.
          </p>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            This will help empower those people who face discrimination based off
            their gender. We hope to bring a change in society by listening to
            these complaints and solving these issues!
          </p>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            People no longer have to keep such incidents to themselves but now
            they can confess it to the website and even if you don't want any
            action regarding it you can always feel lighter afterwards.
          </p>

          <p style={{ lineHeight: 1.8 }}>
            Nonetheless we aim to foster peace in society by hearing the voices
            of both genders and solving the discrimination issues they feel a
            little nervous solving on their own.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ flex: "1 1 400px", minWidth: 300, display: "flex", justifyContent: "center" }}
        >
          <img
            src={aboutGif}
            alt="About EqualVoice"
            style={{
              maxWidth: "100%",
              borderRadius: 16,
              boxShadow: "0 12px 30px rgba(0,0,0,0.5)",
            }}
          />
        </motion.div>
      </div>

      {/* Our Team Section */}
      <div
        style={{
          minHeight: "100vh",
          padding: "100px 5%",
          background: "#0e0e0e",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: 1200, width: "100%", textAlign: "center" }}>
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              marginBottom: 40,
            }}
          >
            Our Team
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
              fontSize: "1.1rem",
              color: "#ccc",
              marginBottom: 50,
              maxWidth: 800,
              marginInline: "auto",
              lineHeight: 1.6,
            }}
          >
            A passionate group committed to empowering voices, promoting fairness,
            and building a platform where everyone feels heard and supported.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            animate={{ y: [0, -10, 0] }}
            style={{
              borderRadius: 24,
              overflow: "hidden",
              backdropFilter: "blur(24px)",
              background: "rgba(255,255,255,0.05)",
              boxShadow: "0 30px 60px rgba(0,0,0,0.6)",
              padding: 20,
            }}
          >
            <img
              src={teamImage}
              alt="Our Team"
              style={{
                width: "100%",
                borderRadius: 20,
                objectFit: "cover",
                display: "block",
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

const buttonStyle = {
  padding: "14px 28px",
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.3)",
  background: "rgba(255,255,255,0.15)",
  color: "#fff",
  fontWeight: 600,
  cursor: "pointer",
  backdropFilter: "blur(6px)",
}