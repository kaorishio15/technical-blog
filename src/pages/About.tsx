export default function About() {
return ( <main className="mx-auto max-w-3xl px-6 py-20"> <p className="text-[11px] font-semibold tracking-[0.22em] text-ink-soft uppercase">
Start here </p>

  <h1 className="mt-2 text-4xl font-extrabold">About Me</h1>

  <p className="mt-6 text-lg leading-relaxed text-ink-soft">
    Hi there! My name is Kaori, and I am a Computer Science student at Texas A&M University.
    I am interested in cybersecurity, network security, data science, software development, and technology.
  </p>

  <p className="mt-5 text-lg leading-relaxed text-ink-soft">
    I created this website as a place to document what I'm learning,
    explore topics that interest me, and keep track of the projects I'm
    building along the way. I'm still learning, so this site isn't meant
    to be a collection of things I already know. Instead, I want it to
    reflect my progress and give me a place to look back on how my
    knowledge and interests develop over time.
  </p>

  <p className="mt-5 text-lg leading-relaxed text-ink-soft">
    I'll be writing about cybersecurity, computer science, programming,
    interesting technology news, and projects I'm working on. I hope to use this website 
    to document what I am learning, while having fun documenting my findings because
    I get to code a bit to create each blog post.
  </p>

  <div className="mt-10 rounded-2xl border border-black/10 bg-white/40 p-6">
    <p className="text-sm font-semibold tracking-wide text-ink-soft uppercase">
      Click here to read my first blog post!
    </p>

    <h2 className="mt-2 text-2xl font-bold">
      My Journey Into Cybersecurity
    </h2>

    <p className="mt-3 leading-relaxed text-ink-soft">
      If you'd like to learn more about why I started exploring
      cybersecurity and what I hope to learn along the way, you can read
      my very first blog post.
    </p>

    <a
      href="/posts/1-hello-world"
      className="mt-4 inline-block font-semibold underline underline-offset-4"
    >
      Read →
    </a>
  </div>
</main>

);
}
