import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <section
      id="about"
      className="flex min-h-[100dvh] flex-col items-center justify-center gap-8 md:flex-row"
    >
      <div className="h-16"></div>
      <div className="flex flex-col items-center">
        <img className="w-64 rounded-lg" src="/benji.png" alt="Benji" />
        <p className="text-xs">Benji, my dog.</p>
      </div>
      <div className="space-y-4 p-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl/none">
          About Me
        </h1>
        <p className="max-w-lg">
          Hello! <span className="text-accent">My name is Philip</span>, and I
          enjoy creating things that live on the internet! My interest in
          software engineering started back in high school when I first learned
          to code. Since then, I've been constantly learning new things,
          building projects, and working on a variety of projects.
        </p>
        <p className="max-w-lg">
          Here are a few technologies I've been working with recently:
          <ul className="grid grid-cols-2 gap-2 md:grid-cols-3">
            <li>
              <Badge>C, C++</Badge>
            </li>
            <li>
              <Badge>Java</Badge>
            </li>
            <li>
              <Badge>Python</Badge>
            </li>
            <li>
              <Badge>JavaScript</Badge>
            </li>
            <li>
              <Badge>TypeScript</Badge>
            </li>
            <li>
              <Badge>MySQL</Badge>
            </li>
            <li>
              <Badge>React.JS</Badge>
            </li>
            <li>
              <Badge>Node.JS</Badge>
            </li>
            <li>
              <Badge>Next.JS</Badge>
            </li>
            <li>
              <Badge>Express.JS</Badge>
            </li>
            <li>
              <Badge>Auth.JS</Badge>
            </li>
            <li>
              <Badge>HTML, CSS</Badge>
            </li>
            <li>
              <Badge>Tailwind CSS</Badge>
            </li>
            <li>
              <Badge>Git, Vercel</Badge>
            </li>
            <li>
              <Badge>OSX, Unix</Badge>
            </li>
          </ul>
        </p>
      </div>
    </section>
  );
}
