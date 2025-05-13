import useAuth from "../../../Hooks/useAuth";

const StorySection = () => {
  const { user } = useAuth();

  return (
    <section className="bg-gray-50 text-gray-800 py-12 px-6 md:px-20 lg:px-40 leading-relaxed">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">
        The Journey That Changed Everything
      </h1>

      <p className="mb-6 text-lg">
        It was the summer of 2022 when I first stepped into the unknown — a solo
        trip across the northern hills of Bangladesh. With nothing but a
        backpack and an old camera, I set out not just to explore places, but to
        discover parts of myself that had been hidden beneath years of routine.
      </p>

      <p className="mb-6 text-lg">
        Each morning brought a new sunrise over misty peaks, and each night
        ended with stories shared by fireside with strangers who felt like
        friends. The people, the food, the simplicity — everything was raw,
        real, and unforgettable.
      </p>

      <blockquote className="italic border-l-4 border-blue-500 pl-4 text-gray-600 mb-6">
        “Sometimes, the most unexpected detours lead to the most meaningful
        destinations.”
      </blockquote>

      <p className="mb-6 text-lg">
        I learned that adventure isn&apos;t always about climbing mountains —
        it&apos;s about embracing discomfort, listening more, and understanding
        that growth often comes in silence. That trip didn&apos;t just change
        the way I travel. It changed the way I live.
      </p>

      <footer className="mt-10 text-right text-sm text-gray-500">
        — Written by <span className="text-red-500">{user?.displayName}</span>,
        Explorer & Storyteller
      </footer>
    </section>
  );
};

export default StorySection;
