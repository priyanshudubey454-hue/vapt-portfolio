import { FaGithub, FaExternalLinkAlt, FaYoutube, FaFileAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
  title: "OWASP Juice Shop Web Application VAPT",
  desc: "Assessed the intentionally vulnerable OWASP Juice Shop application in an authorized lab using Burp Suite and Kali Linux. Documented findings and security testing workflow in the project report.",
  tech: ["OWASP Juice Shop", "Burp Suite", "Kali Linux", "Web Application VAPT"],
  github: "https://github.com/priyanshudubey454-hue/OWASP-Juice-Shop-Using-Burp-Suite.git",
  demo: "#",
  youtube: "https://youtu.be/EU1QC7oH9QE",
  report: "/reports/owasp-juice-shop-vapt-report.pdf",
  color: "from-red-600 via-pink-600 to-orange-500",
},
    {
      title: "VAPT Reporting Dashboard",
      desc: "A dashboard for organizing VAPT findings and reports. Open the live project, browse the source code, watch the walkthrough, or view the accompanying report.",
      tech: ["VAPT", "Reporting", "Dashboard"],
      github: "https://github.com/priyanshudubey454-hue/vapt-reporting-dashboard.git",
      demo: "https://vapt-reporting-dashboard-1.onrender.com",
      youtube: "https://youtu.be/Tzd5KfTOo1k",
      report: "/reports/vapt-dashboard-project-report.pdf",
      color: "from-blue-600 to-cyan-500",
    },
    

    {
      title: "OWASP Broken Web Applications Analysis",
      desc: "Used OWASP BWA for hands-on practice and analyzed security weaknesses in intentionally vulnerable web apps.",
      tech: ["OWASP BWA", "Web Security", "Analysis"],
      github: "#",
      demo: "#",
      reference: "https://github.com/OWASP/www-project-broken-web-applications",
      referenceLabel: "Project Reference",
      color: "from-purple-600 to-blue-500",
    },
    {
      title: "Planned: API Security Checklist",
      desc: "Planned lab project to review API authentication, access control, input handling and rate limits. This preview demonstrates the checklist workflow only.",
      tech: ["API Security", "Burp Suite", "Assessment Workflow"],
      github: "https://github.com/priyanshudubey454-hue/crapi-api-security-assessment.git",
      report: "/reports/crAPI_API_Security_Assessment__Black-Box_Pentest_Report.pdf",
      demo: "/demos/api-security-checklist.html",
      demoLabel: "Demo Preview",
      color: "from-blue-600 to-cyan-500",
    },
    {
      title: "Planned: VAPT Findings Report",
      desc: "Planned report template for organizing lab scope, evidence, risk ratings, remediation guidance and retest status. Preview data is illustrative.",
      tech: ["Reporting", "Risk Rating", "Remediation"],
      github: "#",
      demo: "/demos/vapt-report-preview.html",
      demoLabel: "Demo Preview",
      color: "from-pink-600 to-orange-500",
    },
    {
      title: "Network-VAPT-Assessment",
      desc: "End-to-End Network Vulnerability Assessment and Penetration Testing (VAPT) on Metasploitable 2 using Nmap, Nessus Essentials, Metasploit, and Wireshark.",
      tech: ["Retesting", "Evidence", "Remediation"],
      github: "https://github.com/priyanshudubey454-hue/Evidence_Network.git",
      report: "/reports/_Network_Vulnerability_Assessment_Report.pdf",
      demo: "/demos/retest-tracker.html",
      demoLabel: "Demo Preview",
      color: "from-green-500 to-cyan-500",
    },

    {
      title: "Wireshark Traffic Analysis",
      desc: "Captured and analyzed DNS, HTTP and TCP packets to understand network communication.",
      tech: ["Wireshark", "TCP/IP", "Analysis"],
      github: "https://github.com/priyanshudubey454-hue/wireshark.git",
      demo: "#",
      color: "from-cyan-600 to-blue-500",
    },

    {
      title: "Linux Shell Scripting",
      desc: "Developed automation scripts including IP Finder, File Checker and System Health Checker.",
      tech: ["Bash", "Linux", "Automation"],
      github: "https://github.com/priyanshudubey454-hue/linux-monitoring-dashboard.git",
      demo: "#",
      color: "from-green-500 to-cyan-500",
    },
    
  ];

  return (
    <section
      id="projects"
      className="py-24 px-8 lg:px-[10%] bg-[#071021] text-white"
    >
      <div className="text-center mb-16">
        <p className="text-pink-500 uppercase tracking-[6px] mb-3">
          Portfolio
        </p>

        <h2 className="text-5xl font-bold">
          Featured <span className="text-blue-500">Projects</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-xl border border-blue-500/20 rounded-3xl overflow-hidden hover:-translate-y-2 hover:border-pink-500 hover:shadow-[0_0_35px_rgba(59,130,246,.35)] transition-all duration-300"
          >
            {/* Image / Preview */}

            <div className="relative h-60 overflow-hidden">

              {project.image ? (

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 duration-700"
                />

              ) : (

                <div
                  className={`w-full h-full bg-gradient-to-r ${project.color} flex items-center justify-center`}
                >
                  <span className="text-6xl">🛡️</span>
                </div>

              )}

            </div>

            {/* Content */}

            <div className="p-8">

              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {project.desc}
              </p>

              {/* Tech Stack */}

              <div className="flex flex-wrap gap-3 mt-6">

                {project.tech.map((item) => (

                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm"
                  >
                    {item}
                  </span>

                ))}

              </div>

              {/* Buttons */}

              <div className="flex flex-wrap gap-4 mt-8">

                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl duration-300"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                )}

                {project.reference && (
                  <a
                    href={project.reference}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-pink-500 hover:bg-pink-500 px-6 py-3 rounded-xl duration-300"
                  >
                    <FaExternalLinkAlt />
                    {project.referenceLabel || "Reference"}
                  </a>
                )}

                {project.demo !== "#" && (

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-pink-500 hover:bg-pink-500 px-6 py-3 rounded-xl duration-300"
                  >
                    <FaExternalLinkAlt />
                    {project.demoLabel || "Live Demo"}
                  </a>

                )}

                {project.youtube && (
                  <a
                    href={project.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-red-500 hover:bg-red-500 px-6 py-3 rounded-xl duration-300"
                  >
                    <FaYoutube />
                    Video
                  </a>
                )}

                {project.report && (
                  <a
                    href={project.report}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-emerald-500 hover:bg-emerald-500 px-6 py-3 rounded-xl duration-300"
                  >
                    <FaFileAlt />
                    Report
                  </a>
                )}

              </div>

            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;



