/** Blog posts from Aravind's notes repo (AravindMutthe/Aravind-Notes).
 *  Each entry maps to a markdown file in content/notes/. */

export interface BlogPost {
  slug: string;
  title: string;
  desc: string;
  category: string;
  file: string;
  readTime: string;
}

export const NOTE_POSTS: BlogPost[] = [
  {
    slug: "linux-commands",
    title: "Linux Commands — The Complete Reference",
    desc: "Internal vs external commands, file operations, process management, networking, and system administration — every command a DevOps engineer uses daily.",
    category: "Linux",
    file: "Linux-Commands.md",
    readTime: "12 min",
  },
  {
    slug: "linux-file-system",
    title: "Linux File System — Deep Dive",
    desc: "The Filesystem Hierarchy Standard explained: what lives in /etc, /var, /proc, /sys — and why it matters for troubleshooting.",
    category: "Linux",
    file: "Linux-File-System.md",
    readTime: "15 min",
  },
  {
    slug: "memory-management",
    title: "Linux Memory Management",
    desc: "How Linux manages RAM: paging, swap, buffers vs cache, and the commands to see what's actually happening.",
    category: "Linux",
    file: "Memory-Management.md",
    readTime: "6 min",
  },
  {
    slug: "container-images",
    title: "Container Images — How Docker Images Work",
    desc: "Layers, registries, multi-stage builds, and image optimization — what's actually inside a container image.",
    category: "Docker",
    file: "Container-Images.md",
    readTime: "8 min",
  },
  {
    slug: "docker-kubernetes-openshift",
    title: "Docker, Kubernetes & OpenShift Compared",
    desc: "When to use what: the practical differences between Docker, K8s, and OpenShift for real workloads.",
    category: "Kubernetes",
    file: "docker-kub-openshift.md",
    readTime: "8 min",
  },
  {
    slug: "openshift-kubernetes",
    title: "OpenShift & Kubernetes Notes",
    desc: "Deployments, services, routes, and the OpenShift extras on top of vanilla Kubernetes.",
    category: "Kubernetes",
    file: "Openshift-Kubernetees.md",
    readTime: "10 min",
  },
  {
    slug: "git-github-commands",
    title: "Git & GitHub Commands Reference",
    desc: "The commands you actually need: branching, rebasing, stashing, and fixing mistakes without panic.",
    category: "Git",
    file: "Git-Github-commands.md",
    readTime: "7 min",
  },
  {
    slug: "git-github-setup",
    title: "Git & GitHub Setup — Step by Step",
    desc: "From zero to pushing: installing Git, SSH keys, and connecting to GitHub the right way.",
    category: "Git",
    file: "Git-and-GitHubsetup_Process.md",
    readTime: "8 min",
  },
  {
    slug: "oops-java",
    title: "OOP in Java — Complete Notes",
    desc: "Classes, inheritance, polymorphism, abstraction, encapsulation — with examples that actually make sense.",
    category: "Java",
    file: "oops-java.md",
    readTime: "18 min",
  },
  {
    slug: "oops-python",
    title: "OOP in Python — Complete Notes",
    desc: "Python's take on objects: classes, dunder methods, inheritance, and when OOP helps vs hurts.",
    category: "Python",
    file: "oops-python.md",
    readTime: "16 min",
  },
  {
    slug: "python-syntax",
    title: "Python Syntax Quick Reference",
    desc: "The syntax you look up every time — condensed to one page.",
    category: "Python",
    file: "python-syntax.md",
    readTime: "4 min",
  },
  {
    slug: "python-packages",
    title: "Python Packages, Modules & Libraries",
    desc: "What's the difference, how imports actually work, and how to structure your own packages.",
    category: "Python",
    file: "package-module-libray.md",
    readTime: "7 min",
  },
  {
    slug: "java-classes-objects",
    title: "Java Classes, Data Members & Member Functions",
    desc: "How Java organizes code: classes, fields, methods, and access control.",
    category: "Java",
    file: "class-dm+mf.md",
    readTime: "4 min",
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return NOTE_POSTS.find((p) => p.slug === slug);
}
