export const icons = {
  "C": "c-programming.svg",
  "C++": "cpp.svg",
  "Python": "python.svg",
  "Javascript": "javascript.svg",
  "Typescript": "typescript.svg",
  "Java": "java.svg",
  "HTML": "html-5.svg",
  "CSS": "css3.svg",
  "Go": "golang.svg",
  "SQL": "sql.svg",
  "React": "react.svg",
  "Next.js": {
    default: "next.js.svg",
    dark: "next.js-white.svg"
  },
  "Flask": {
    default: "flask-plain.svg",
    dark: "flask-white.svg"
  },
  "FastAPI": "fastapi.svg",
  "TailwindCSS": "tailwindcss.svg",
  "Redis": "redis.svg",
  "Nodejs": "nodejs.svg",
  "Express": {
    default: "express-plain.svg",
    dark: "express-js-white.svg"
  },
  "ThreeJS": "threejs.svg",
  "Git/Github": "git.svg",
  "GitLab": "gitlab.svg",
  "Docker": "docker.svg",
  "Figma": "figma.svg",
  "Kubernetes": "kubernetes.svg",
  "Terraform": "terraform.svg",
  "MongoDB": "mongodb.svg",
  "PostgreSQL": "postgresql.svg",
  "MySQL": "mysql-logo.svg",
  "Hadoop": "hadoop.svg",
  "Google Cloud": "google-cloud.svg",
  "Microsoft Azure": "azure.svg",
  "Amazon Web Service": {
    default: "amazon-web-services.svg",
    dark: "amazon-web-services-white.svg",
  },
  "Arduino": "arduino.svg",
  "Bash": "bash.svg",
  "Prisma ORM": "prisma-orm.svg",
  "Rust": "rust.svg",
  "Fiber": "fiber.svg",
  "SpringBoot": "spring-boot.svg",
  "Swift": "swift.svg",
  "SwiftUI": "swiftui.svg"
}

const BASE_PATH = "/icons/tech"

export const iconMap: Record<string, string | object> = Object.fromEntries(
  Object.entries(icons).map(([key, value]) => {
    if (typeof value === "object") {
      return [key, {
        default: `${BASE_PATH}/${value.default}`,
        dark: `${BASE_PATH}/${value.dark}`
      }]
    }
    return [key, `${BASE_PATH}/${value}`]
  })
);
