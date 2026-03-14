function breakLine() {
  return <div className=" h-px bg-gray-200" />;
}

export default function OnboardingHeader() {
  return (
    <div className="w-full flex justify-center p-10 text-sm">
      <div className="flex flex-row w-1/3 justify-between">
        <div className="flex flex-row items-center gap-2 font-medium">
          <div className="relative flex items-center justify-center w-6 h-6 bg-transparent border border-primary rounded-full">
            <p className="absolute z-20 text-sm font-medium">1</p>
          </div>
          <div>Account Setup</div>
        </div>

        <div className="flex flex-row items-center gap-2 font-medium">
          <div className="relative flex items-center justify-center w-6 h-6 bg-transparent border border-primary rounded-full">
            <p className="absolute z-20 text-sm font-medium">2</p>
          </div>
          <div>Verification</div>
        </div>

        <div className="flex flex-row items-center gap-2 font-medium">
          <div className="relative flex items-center justify-center w-6 h-6 bg-transparent border border-primary rounded-full">
            <p className="absolute z-20 text-sm font-medium">3</p>
          </div>
          <div>Portfolio Setup</div>
        </div>
      </div>
    </div>
  );
}
