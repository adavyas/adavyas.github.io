"use client"

export function ImageAsciiLogo() {
  return (
    <div className="bg-black p-2 font-mono text-white">
      <pre className="text-white whitespace-pre overflow-x-auto text-xs sm:text-sm md:text-base">
        {`
$ echo "ADAVYA SHARMA"
ADAVYA SHARMA

$ whoami
adavya@newtech

$ pwd
/home/adavya/portfolio

$ ls
about  resume  skills  experience  projects  contact
`}
      </pre>
    </div>
  )
}
