import OnboardingHeader from "./OnboardingHeader"

export default function OnboardingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex flex-col h-screen">
      {/* <OnboardingHeader/> */}
      <div className="flex-1 h-full">{children}</div>
    </main>
  );
}
