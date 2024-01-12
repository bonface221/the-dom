import {
  LightningBoltIcon,
  PuzzleIcon,
  CogIcon,
  DeviceMobileIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: " The DOM",
    icon: PuzzleIcon,
  },

  {
    name: " Asynchronous & Promises",
    icon: LightningBoltIcon,
  },
];
const features2 = [
  {
    name: " A Career in Android Development",
    icon: DeviceMobileIcon,
  },

  {
    name: " Opportunities",
    icon: LightningBoltIcon,
  },
  {
    name: " Building Connections",
    icon: UserGroupIcon,
  },
];

interface FeatureProps {
  type?: "javascript" | "android";
}

function Features({ type = "javascript" }: FeatureProps) {
  const arr = type === "javascript" ? features : features2;
  return (
    <>
      <div className="grid grid-cols-1 gap-3 my-12">
        {arr.map(({ icon: Icon, ...feature }, i) => (
          <div
            className="flex items-center space-x-4"
            key={feature.name.split(" ").join("-")}
          >
            <div>
              <Icon
                className="block w-8 h-8"
                style={{ height: 24, width: 24 }}
                aria-hidden="true"
              />
            </div>
            <div>
              <div className="my-0 font-small dark:text-white">
                {feature.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Features;
