import { FaLocationArrow, FaPhone, FaVoicemail } from "react-icons/fa";

const Location = () => {
  return (
    <section className="  p-6 rounded-lg  mx-auto flex justify-evenly items-center gap-10 flex-wrap">
      <div>
        <h2 className="text-2xl font-semibold dark:text-white mb-4">
          Barishal
        </h2>

        <div className="space-y-3 text-gray-700 dark:text-gray-300">
          <div className="flex items-center gap-2">
            <span className="font-medium">
              <FaLocationArrow />
            </span>
            <p>Barishal, Gorunodi 8007</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-medium">
              <FaPhone />
            </span>
            <p>156-677-124-442-2887</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-medium">
              <FaVoicemail />
            </span>
            <p className="text-blue-600 dark:text-blue-400 hover:underline">
              <a href="mailto:getaway@example.com">getaway@example.com</a>
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold dark:text-white mb-4">
          Barishal
        </h2>

        <div className="space-y-3 text-gray-700 dark:text-gray-300">
          <div className="flex items-center gap-2">
            <span className="font-medium">
              <FaLocationArrow />
            </span>
            <p>Barishal, Gorunodi 8007</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-medium">
              <FaPhone />
            </span>
            <p>156-677-124-442-2887</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-medium">
              <FaVoicemail />
            </span>
            <p className="text-blue-600 dark:text-blue-400 hover:underline">
              <a href="mailto:getaway@example.com">getaway@example.com</a>
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold dark:text-white mb-4">
          Barishal
        </h2>

        <div className="space-y-3 text-gray-700 dark:text-gray-300">
          <div className="flex items-center gap-2">
            <span className="font-medium">
              <FaLocationArrow />
            </span>
            <p>Barishal, Gorunodi 8007</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-medium">
              <FaPhone />
            </span>
            <p>156-677-124-442-2887</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-medium">
              <FaVoicemail />
            </span>
            <p className="text-blue-600 dark:text-blue-400 hover:underline">
              <a href="mailto:getaway@example.com">getaway@example.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
