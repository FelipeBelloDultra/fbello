import Image from "next/image";

const ALL_LINKS = [
  {
    name: "Medium",
    link: "https://medium.com/@felipe_bello/",
    description: "I share content in blog format using medium",
    logo: "/medium-bg.png",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/felipebellodultra/",
    description: "My professional network, with my experiences and interests",
    logo: "/linkedin-bg.jpg",
  },
  {
    name: "GitHub",
    link: "https://github.com/FelipeBelloDultra/",
    description: "Some personal projects and a little bit of what I've done",
    logo: "/github-bg.jpeg",
  },
];

export default function Home() {
  return (
    <div className="py-6 px-4 h-full">
      <main className="flex flex-col max-w-[550px] w-full mx-auto justify-centerd items-center">
        <Image
          src="/me-profile.jpeg"
          alt="Felipe Bello Dultra photo"
          className="mt-6 rounded-full object-cover h-[175px] w-[175px]"
          width={175}
          height={175}
          priority
        />

        <h1 className="mt-8 mb-7 text-3xl -tracking-[1px] italic font-bold">
          Felipe Bello Dultra
        </h1>

        <p className="text-sm text-center px-4 mb-8">
          I&rsquo;m a software engineer who loves to learn and teach. I&rsquo;ve
          been studying the all development ecosystem since 2016 and I&rsquo;m
          currently focused on{" "}
          <span className="font-bold">
            Node.js, React, Vue, Javascript and Typescript.
          </span>
        </p>

        <section className="flex flex-col w-full">
          <span className="text-sm text-stone-300 mb-3 italic">Links:</span>

          <ul className="gap-4 flex flex-col">
            {ALL_LINKS.map((link, index) => (
              <li
                key={link.name.toLowerCase()}
                className="hover:opacity-80 transition-opacity w-full"
              >
                <a
                  href={link.link}
                  target="_blank"
                  className={`${
                    (index + 1) % 2 === 0 ? "flex-row-reverse" : "flex-row"
                  }  flex relative`}
                >
                  <Image
                    src={link.logo}
                    alt="Felipe Bello Dultra photo"
                    className="object-contain h-[155px] w-full sm:w-1/2"
                    width={275}
                    height={155}
                  />

                  <span className="flex flex-col text-center px-3 justify-center items-center h-full w-full bg-stone-900/90 absolute sm:h-auto sm:bg-stone-900 sm:w-1/2 sm:relative">
                    <p className="text-lg font-bold">{link.name}</p>

                    <p className="text-sm opacity-70">{link.description}</p>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
