import { LocationOnOutlined } from "@material-ui/icons";
import SocialSection from "./SocialSection";

var ReactRotatingText = require("react-rotating-text");

<ReactRotatingText items={["first", "second", "third"]} />;

function MainSection() {
  return (
    <div className="mt-60 w-500 bg-transparent">
      <div className="text-center">
        <h1 className="name text-3xl text-white tracking-widest">
          AULIA RAHMAN
        </h1>
        <div className="moving-text mt-3 font-thin ordinal ">
          <ReactRotatingText
            items={[
              "Software Engineer",
              "Third Year CS Student",
              "Forward Thinker",
            ]}
          />
        </div>
        <div className="pt-4 font-light">
          <LocationOnOutlined className="mr-1 pb-1 " />
          Jakarta
        </div>
        <SocialSection />
      </div>
    </div>
  );
}

export default MainSection;
