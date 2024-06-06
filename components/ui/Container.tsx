export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="container 2xl:max-w-screen-xl mx-auto px-5">{children}</div>;
}
