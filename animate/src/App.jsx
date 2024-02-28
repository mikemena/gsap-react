import ToggleTimeline from './Components/ToggleTimeline';
import ScrollTriggerSample from './Components/ScrollTriggerSample';
import ScrollSmoother from './Components/ScrollSmoother';

export default function Page() {
  return (
    <main>
      <section className='boxes-container'>
        <ToggleTimeline />
        <ScrollTriggerSample />
        <ScrollSmoother />
      </section>
    </main>
  );
}
