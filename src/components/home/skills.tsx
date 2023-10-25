/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/0W13RkH
 */

import {
  AreaChart,
  BrainCircuit,
  Database,
  FileBox,
  FolderGit2,
  Microscope,
  MonitorSmartphone,
  Link,
  UploadCloud,
} from "lucide-react";

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex min-h-[100dvh] flex-col items-center justify-center"
    >
      <div className="flex flex-col justify-center space-y-4 text-center">
        <div className="h-8 md:pt-0"></div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl/none">
            Technical Skills
          </h1>
          <p className="mx-auto max-w-2xl p-4 sm:p-0 md:text-xl">
            The skills showcased here are the culmination of years of hands-on
            experience and continuous learning.
          </p>
        </div>
        <div className="mx-auto w-full max-w-full space-y-4">
          <div className="flex flex-col gap-4 p-4 sm:grid sm:grid-cols-3 sm:p-0">
            <div className="flex flex-col items-center space-y-2 p-4">
              <div className="p-2">
                <MonitorSmartphone className="text-stone-700 dark:text-stone-300" />
              </div>
              <h2 className="text-xl font-bold ">Web Development</h2>
              <p className="">
                Crafting responsive, user-friendly websites using TypeScript,
                Next.js, and TailwindCSS.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2  p-4">
              <div className="p-2">
                <AreaChart className="text-stone-700 dark:text-stone-300" />
              </div>
              <h2 className="text-xl font-bold ">
                Data Analysis & Visualization
              </h2>
              <p className="">
                Transforming raw data into actionable insights using Python
                Pandas and Seaborn libraries.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2   p-4">
              <div className="p-2">
                <BrainCircuit className="text-stone-700 dark:text-stone-300" />
              </div>
              <h2 className="text-xl font-bold ">Machine Learning</h2>
              <p className="">
                Leveraging machine learning algorithms for predictive analytics,
                utilizing TensorFlow and Scikit-Learn.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2   p-4">
              <div className="p-2">
                <Microscope className="text-stone-700 dark:text-stone-300" />
              </div>
              <h2 className="text-xl font-bold ">Artificial Intelligence</h2>
              <p className="">
                Incorporating advanced algorithms for enhanced decision-making
                and automation.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2  p-4">
              <div className="p-2">
                <Database className="text-stone-700 dark:text-stone-300" />
              </div>
              <h2 className="text-xl font-bold ">Database Management</h2>
              <p className="">
                Designing and managing robust databases with SQL and NoSQL
                technologies
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4">
              <div className="p-2">
                <FolderGit2 className="text-stone-700 dark:text-stone-300" />
              </div>
              <h2 className="text-xl font-bold ">Version Control</h2>
              <p>
                Collaborating through use of version control systems like Git
                for code management.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2   p-4">
              <div className="p-2">
                <UploadCloud className="text-stone-700 dark:text-stone-300" />
              </div>
              <h2 className="text-xl font-bold ">Cloud Computing</h2>
              <p className="">
                Deploying scalable applications on cloud platforms like AWS,
                Vercel, and PlanetScale.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4">
              <div className="p-2">
                <Link className="text-stone-700 dark:text-stone-300" />
              </div>
              <h2 className="text-xl font-bold ">Blockhain</h2>
              <p>
                Developing secure blockchain solutions for various use-cases,
                employing Ethereum ERC-20 standard.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2  p-4">
              <div className="p-2">
                <FileBox className="text-stone-700 dark:text-stone-300" />
              </div>
              <h2 className="text-xl font-bold ">3D Modeling</h2>
              <p className="">
                Constructing detailed 3D models and environments using Unity for
                gaming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
