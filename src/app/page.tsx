import { RESUME_DATA } from "@/data/resume";
import { Mail, Phone, Globe } from "lucide-react"; // Icons

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
              {RESUME_DATA.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <Globe className="h-3 w-3" />
                {RESUME_DATA.location}
              </a>
            </p>
            
            {/* Contact Buttons (Hidden in Print) */}
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              {RESUME_DATA.contact.email ? (
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-gray-200 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors hover:bg-gray-100">
                    <Mail className="h-4 w-4" />
                  </button>
                </a>
              ) : null}
            </div>
            
            {/* Contact Text (Visible ONLY in Print) */}
            <div className="hidden gap-x-2 font-mono text-sm text-gray-500 print:flex">
              {RESUME_DATA.contact.email} | {RESUME_DATA.contact.tel}
            </div>
          </div>
          
          {/* Avatar */}
          <span className="relative flex h-28 w-28 shrink-0 overflow-hidden rounded-xl border border-gray-100">
             <img 
               className="aspect-square h-full w-full" 
               src={RESUME_DATA.avatarUrl} 
               alt={RESUME_DATA.name} 
             />
          </span>
        </div>

        {/* ABOUT SECTION */}
        <section className="flex flex-col gap-y-3">
          <h2 className="text-xl font-bold">About</h2>
          <p className="text-pretty font-mono text-sm text-gray-600">
            {RESUME_DATA.summary}
          </p>
        </section>

        {/* WORK EXPERIENCE */}
        <section className="flex flex-col gap-y-3">
          <h2 className="text-xl font-bold">Work Experience</h2>
          {RESUME_DATA.work.map((work) => (
            <div key={work.company} className="rounded-lg border border-transparent p-0 transition-all hover:border-gray-100 hover:bg-gray-50 hover:p-2">
              <div className="flex flex-col space-y-1.5">
                <div className="flex items-center justify-between gap-x-2 text-base">
                  <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                    <a className="hover:underline" href={work.link}>
                      {work.company}
                    </a>
                  </h3>
                  <div className="text-sm text-gray-500 tab-nums">
                    {work.start} - {work.end}
                  </div>
                </div>
                <h4 className="font-mono text-sm leading-none text-gray-600">
                  {work.title}
                </h4>
              </div>
              <div className="mt-2 text-xs text-gray-600">
                {work.description}
              </div>
            </div>
          ))}
        </section>

        {/* EDUCATION */}
        <section className="flex flex-col gap-y-3">
          <h2 className="text-xl font-bold">Education</h2>
          {RESUME_DATA.education.map((education) => (
            <div key={education.school} className="flex items-center justify-between">
              <div className="flex flex-col">
                 <h3 className="font-semibold">{education.school}</h3>
                 <p className="text-sm text-gray-600">{education.degree}</p>
              </div>
              <div className="text-sm text-gray-500 tab-nums">
                {education.start} - {education.end}
              </div>
            </div>
          ))}
        </section>

        {/* SKILLS */}
        <section className="flex flex-col gap-y-3">
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.skills.map((skill) => (
              <div
                key={skill}
                className="inline-flex items-center rounded-md border border-gray-200 bg-gray-50 px-2 py-0.5 text-xs font-semibold text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-gray-100"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}