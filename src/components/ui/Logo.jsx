import logoImg from "../../assets/logo.jpg";

export default function Logo({ className = "h-9 w-9", rounded = true }) {
  return (
    <img
      src={logoImg}
      alt="Silicon PC"
      draggable={false}
      className={`${className} ${rounded ? "rounded-xl" : ""} object-cover shrink-0 select-none`}
    />
  );
}
