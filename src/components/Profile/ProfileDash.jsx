"use client";

export default function ProfileDash() {
  const userDetails = {
    name: "Prem Raj",
    course: "BTech",
    branch: "CSE",
    session: "2022-205",
    qId: "22030179",
    gender: "Male",
    points: "600 pts",
  };

  const techStack = [
    { name: "Java", color: "text-orange-400" },
    { name: "HTML5", color: "text-red-400" },
    { name: "JavaScript", color: "text-yellow-400" },
    { name: "React", color: "text-cyan-400" },
    { name: "Node.js", color: "text-green-400" },
    { name: "MongoDB", color: "text-green-500" },
    { name: "CSS", color: "text-blue-400" },
    { name: "Next.js", color: "text-white" },
    { name: "GraphQL", color: "text-pink-400" },
    { name: "Docker", color: "text-blue-400" },
    { name: "Git", color: "text-orange-500" },
    { name: "SQL", color: "text-blue-300" },
    { name: "SQL", color: "text-blue-300" },
    { name: "SQL", color: "text-blue-300" },
    { name: "SQL", color: "text-blue-300" },
    { name: "SQL", color: "text-blue-300" },
    { name: "SQL", color: "text-blue-300" },
    { name: "SQL", color: "text-blue-300" },
    { name: "SQL", color: "text-blue-300" },
    { name: "SQL", color: "text-blue-300" },
    { name: "SQL", color: "text-blue-300" },
    { name: "SQL", color: "text-blue-300" },
    { name: "SQL", color: "text-blue-300" },
  ];

  return (
    <div className="min-h-screen p-4 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column - Project Cards */}
        <div className="lg:col-span-4 space-y-6">
          {/* TeamSync Cards */}
          <div className="h-[450px] md:h-[525px] p-2 rounded-2xl overflow-y-auto pr-2 scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-cyan-400">
            {[1,2,3,4,5].map((item) => (
              <div
                key={item}
                className="bg-gray-800 rounded-xl p-4 shadow-lg mb-4 last:mb-0"
              >
                <div className="flex gap-4">
                  <div className="w-24 h-35 bg-navy-900 rounded-lg flex items-center justify-center text-sm">
                    <img
                      src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Project"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-cyan-400 text-lg font-semibold">
                      TeamSync
                    </h3>
                    <p className="text-gray-400 text-sm">
                      points : {item === 1 ? "50" : "60"}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mt-2">
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        GitHub
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        Live
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 mt-2">
                      TeamSync is an all-in-one project management and team
                      collaboration platform designed to streamline workflows.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Field of Excellence */}
          <div className="bg-gray-800/60 rounded-xl p-4 border border-gray-700/50 backdrop-blur-sm">
            <h3 className="text-cyan-400 text-lg font-semibold mb-3">
              Field of Excellence
            </h3>
            <p className="text-sm text-gray-300">
              TeamSync is designed to adapt to your workflow, making it easier
              to manage projects and collaborate with your team, no matter where
              they are. With a user-friendly interface and powerful features,
              TeamSync helps you stay organized, meet deadlines, and achieve
              your goals.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-8 space-y-6">
          {/* Badges Section */}
          <div className="bg-gray-800/60 rounded-xl p-4 border border-gray-700/50 backdrop-blur-sm">
            <div className="flex flex-wrap justify-start gap-4">
              {["gold", "green", "purple", "silver", "orange", "cyan"].map(
                (color, index) => (
                  <div
                    key={index}
                    className={`w-16 h-16 rounded-full border-2 ${
                      color === "gold"
                        ? "border-yellow-400 bg-yellow-400/20"
                        : color === "green"
                        ? "border-green-400 bg-green-400/20"
                        : color === "purple"
                        ? "border-purple-500 bg-purple-500/20"
                        : color === "silver"
                        ? "border-gray-400 bg-gray-400/20"
                        : color === "orange"
                        ? "border-orange-400 bg-orange-400/20"
                        : "border-cyan-400 bg-cyan-400/20"
                    } flex items-center justify-center`}
                  >
                    <div className="w-12 h-12 rounded-full bg-gray-700/50"></div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Profile and Tech Stack Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Profile Section */}
            <div className="bg-gray-800/60 rounded-xl p-6 border border-gray-700/50 backdrop-blur-sm">
              <div className="grid justify-center items-center gap-4 mb-6">
                <div className="w-32 h-32 rounded-full bg-blue-900 flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile Picture" className="w-full h-full rounded-full object-cover" />
                </div>
                <div className="text-center">
                  <h2 className="text-2xl font-bold">{userDetails.name}</h2>
                  <div className="text-cyan-400">{userDetails.points}</div>
                </div>
              </div>

              <div className="space-y-2">
                {Object.entries(userDetails).map(
                  ([key, value]) =>
                    key !== "points" && (
                      <div
                        key={key}
                        className="grid grid-cols-2 bg-gray-700/30 p-2 rounded-lg"
                      >
                        <span className="text-gray-400 capitalize">{key}</span>
                        <span className="text-right">{value}</span>
                      </div>
                    )
                )}
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4 mt-4">
                {["GitHub", "Instagram", "LinkedIn", "Twitter"].map(
                  (social) => (
                    <div
                      key={social}
                      className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center"
                    >
                      <span className="w-4 h-4 bg-gray-500 rounded-full"></span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Tech Stack Grid */}
            <div className="max-h-[595px] overflow-y-auto pr-2 scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-cyan-400">
              <div className="grid grid-cols-4 gap-4">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="aspect-square bg-gray-800/60 rounded-xl border border-gray-700/50 backdrop-blur-sm flex items-center justify-center p-2"
                  >
                    <span className={`text-xs font-medium ${tech.color}`}>
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Categories */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-6">
        {["Frontend", "Backend", "DBMS", "AI / ML", "Security", "DevOps"].map(
          (category) => (
            <button
              key={category}
              className="bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 rounded-lg py-2 px-4 transition-colors border border-cyan-500/30"
            >
              {category}
            </button>
          )
        )}
      </div>
    </div>
  );
}
