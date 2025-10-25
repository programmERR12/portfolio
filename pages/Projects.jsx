
import projectData from "../rawData/projectData";

function Projects() {
  return (
    <div className="min-h-screen bg-[#1e1e24] py-16 px-6 text-white">
      {/* Header */}
      <h1 className="text-4xl   text-center font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
        My Projects 
      </h1>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="bg-[#252530] rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-green-500/30"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            {/* Card Body */}
            <div className="p-6">
              <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-3">
                {project.title}
              </h2>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                {project.description}
              </p>

              <a
                href={project.deployLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 bg-green-500 text-black font-medium rounded-xl hover:bg-green-400 transition shadow-md"
              >
                🔗 View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
