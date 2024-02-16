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
  "Next.js": "next.js.svg",
  "Flask": "flask-plain.svg",
  "FastAPI": "fastapi.svg",
  "TailwindCSS": "tailwindcss.svg",
  "Redis": "redis.svg",
  "Nodejs": "nodejs.svg",
  "Express": "express-plain.svg",
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
  "AWS": "amazon-web-services.svg",
  "Arduino": "arduino.svg",
  "Bash": "bash.svg",
  "Prisma ORM": "prisma-orm.svg"
}

const BASE_PATH = "/icons/tech"

export const iconMap: Record<string, string> = Object.fromEntries(
  Object.entries(icons).map(([key, value]) => [key, `${BASE_PATH}/${value}`])
);
