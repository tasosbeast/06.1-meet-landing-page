import GridBox from "./GridBox";
import StepIndicator from "./StepIndicator";

function Main() {
  return (
    <main className="p-8 pb-16 lg:pb-18 md:pt-14 text-center">
      <div className="main-content relative flex flex-col gap-16 max-w-[1120px] mx-auto">
        <StepIndicator number="01" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 4 }, (box, index) => (
            <GridBox
              key={index}
              imageSrc={`/desktop/image-grid-${index + 1}.jpg`}
              altText={`Grid image ${index + 1}`}
            />
          ))}
        </div>
        <div className="flex flex-col gap-8 max-w-[504px] lg:max-w-[544px] mx-auto">
          <div className="flex flex-col gap-4 max-w-md mx-auto">
            <h3 className="text-xs-mobile md:text-xs-tablet lg:text-xs tracking-wide red-hat-display-black text-cyan-600 uppercase">
              Built for modern use
            </h3>
            <h2 className="text-md-mobile md:text-md-tablet lg:text-md leading-md red-hat-display-black text-slate-900">
              Smarter meetings, all in one place
            </h2>
          </div>
          <p className="text-xs leading-lg lg:text-sm">
            Send messages, share files, show your screen, and record your
            meetings — all in one workspace. Control who can join with
            invite-only team access, data encryption, and data export.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Main;
