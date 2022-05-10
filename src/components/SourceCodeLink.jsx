import { IoLogoGithub } from "react-icons/io";

function SourceCodeLink() {
  return (
    <a
      className="hidden p-2 transition-all duration-75 rounded-md whitespace-nowrap md:inline-block group hover:bg-white/10"
      href="https://github.com/TonyMckes/giphy-challenge"
    >
      <IoLogoGithub className="inline-block w-5 h-5 align-sub" />{" "}
      <span className="group-hover:text-white text-neutral-200">
        Source code
      </span>
    </a>
  );
}

export default SourceCodeLink;
