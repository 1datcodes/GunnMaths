import Markdown from "react-markdown";
import Header from "./Header";
import BackButton from "../BackButton";

const markdown = `
# Update Log

### Version  6.1.0
- Added AI generation from old codebase to new codebase
- Created prompts.json file to store all prompts
- Fixed LaTeX and markdown rendering issues that's been plaguing us since AI was first added
- Mobile support has been deleted

## Version 6.0.0
- Since both Kaicheng and I are graduating, we are overhauling the codebase to make it easier for future developers to maintain
- We've also restructured the file system to make it easier to add new courses and units
- AP Stats is under development and will be added soon
- We are looking for a new maintainer for this website, so if you're interested, please contact us!

### Version 5.0.1
- Fixed unused variables

## Version 5.0.0
-   Due to widespread critism, we are changing the color scheme and site layout
-   Thanks to Jesse Li for cooking up something in 30 mins!
-   If you have some more ideas on how to make this website beautiful, please let us know before we leave
-   We are also implementing AP Stats page!

### Version 4.1.0
-   All calc bc units are up now!
-   remember to contact us if you would like to contribute!

### Version 4.0.3
-   cleaned up chapter 1-3 tests/reviewsheets

### Version 4.0.2
-   Unit 1-3 documents updated

### Version 4.0.1
-   Fixed BackButton routing error in CalcBC
-   Tests and study materials are coming soon...

## Version 4.0.0
-   Due to popular demands, we have initialized CalcBC pages!
-   Added 10 new units, Midterm and AP Review Pages

### Version 3.0.1
-   Fixed API Key leak (thanks Leo Jeong!)

## Version 3.0.0
-   Changed color scheme
-   Switched from Google Gemini 1.5 flash to GPT-4o from OpenAI

### Version 2.0.2alpha
-   Updated About Us page
-   Probably the last major change before Calc BC

### Version 2.0.1alpha
-   Added mobile support

## Version 2.0.0alpha
-   Added Calc BC folder (to be completed later)
-   AI available for Analysis Units

## Version 1.0.0alpha
-   Initial release
-   All Analysis tests and quizzes added
`;

const Updates = () => {
  return (
    <div className="">
      <Header />
      <div className="w-full flex flex-col py-8 px-12 gap-5">
        <BackButton />
        <Markdown
          components={{
            h1: ({ node, ...props }) => {
              const text = props.children;
              const id = text.toLowerCase().replace(/\s+/g, "-");
              return (
                <h1
                  id={id}
                  className="text-4xl font-bold text-black font-sans"
                  {...props}
                />
              );
            },
            h2: ({ node, ...props }) => (
              <h2 className="text-2xl font-bold pl-8" {...props} />
            ),
            h3: ({ node, ...props }) => (
              <h3 className="text-xl font-bold pl-8" {...props} />
            ),
            p: ({ node, ...props }) => (
              <p className="text-lg mb-1.5" {...props} />
            ),
            li: ({ node, ...props }) => (
              <li className="text-lg list-disc ml-8 p-1" {...props} />
            ),
            a: ({ node, ...props }) => (
              <a
                className="text-blue-500 hover:text-blue-700 underline"
                {...props}
              />
            ),
          }}
        >
          {markdown}
        </Markdown>
      </div>
    </div>
  );
};

export default Updates;
