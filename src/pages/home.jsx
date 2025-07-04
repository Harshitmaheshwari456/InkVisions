import React, { useState, useEffect } from "react";
import { ReactReader, ReactReaderStyle } from "react-reader";
import close from "../images/close.png";

import percyjackson from "../books/percyjackson.epub";

import gameofthrones from "../books/gameofthrones.epub";
import harrypotter from "../books/harrypotter.epub";
import mahabharat from "../books/mahabharat.epub";
import { useTheme } from "../contexts/ThemeContext";

const Home = () => {
  const { theme } = useTheme();
  const [location, setLocation] = useState(0);
  const [selections, setSelections] = useState([]);
  const [rendition, setRendition] = useState(undefined);
  const [image, setImage] = useState([]);
  const [send, setSend] = useState(false);
  const [dropdown, ToggleDropDown] = useState(false);
  const [modelno, setmodelno] = useState(0);
  const [dropdown2, ToggleDropDown2] = useState(false);
  const [bookno, setbookno] = useState(0);
  const [sendDisabled, setSendDisabled] = useState(false);
  var models = [
    "blink7630/graphic-novel-illustration",
    "ostris/ikea-instructions-lora-sdxl",
    "ostris/ikea-instructions-lora-sdxl",
    "EarthnDusk/Poltergeist-Mix",
    "SaiRaj03/Text_To_Image",
    "nerijs/pixel-art-xl",
  ];
  var epubs = [mahabharat, harrypotter, gameofthrones, percyjackson];

  function updateTheme(rendition, theme) {
    const themes = rendition.themes;
    switch (theme) {
      case "dark": {
        themes.override("color", "#fff");
        themes.override("background", "#000");
        break;
      }
      default: {
        themes.override("color", "#000");
        themes.override("background", "#fff");
        break;
      }
    }
  }

  useEffect(() => {
    if (rendition) {
      function setRenderSelection(cfiRange, contents) {
        if (rendition) {
          console.log("this" + selections[0]);

          setSelections([
            {
              text: rendition.getRange(cfiRange).toString(),
              cfiRange,
            },
          ]);
          console.log(rendition);

          const selection = contents.window.getSelection();
          selection?.removeAllRanges();
        }
      }
      rendition.on("selected", setRenderSelection);
      return () => {
        rendition?.off("selected", setRenderSelection);
      };
    }
  }, [setSelections, rendition]);

  useEffect(() => {
    if (rendition) {
      updateTheme(rendition, theme);
    }
  }, [theme]);

  useEffect(() => {
    if (send && selections.length > 0) {
      async function fetchData() {
        console.log("fetching " + selections[selections.length - 1]?.text);
        let data = { inputs: selections[selections.length - 1]?.text };
        setSendDisabled(true);

        const response = await fetch(
          `https://api-inference.huggingface.co/models/${models[modelno]}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_HF_API_KEY}`,
            },
            method: "POST",
            body: JSON.stringify(data),
          }
        );

        const result = await response.blob();
        const url = window.URL.createObjectURL(result);
        setImage([
          ...image,
          { url: url, text: selections[selections.length - 1]?.text },
        ]);

        // Fix: Clear selection after request is sent
        setSelections([]);
        rendition?.annotations.remove(selections[0]?.cfiRange, "highlight");

        setSend(false);
        setSendDisabled(false);
      }
      fetchData();
    }
  }, [send]);

  const deleteImage = (deleteURL) => {
    setImage((prev) => {
      const temp = prev.slice();
      return temp.filter(({ url }) => url !== deleteURL);
    });
  };

  const deleteAllImages = () => {
    return (
      window.confirm("Are you sure you want to delete all images?") &&
      setImage([])
    );
  };

  return (
    <div
      className="bg-white border-gray-200 dark:bg-teal-950 dark:text-white"
      // style={{ height: "100vh" }}
    >
      {selections.length > 0 && (
        <div className="p-6 mx-6 rounded-xl flex justify-between bg-yellow-50 dark:bg-teal-900 ">
          <div className="mx-6">{selections[selections.length - 1]?.text}</div>
          <button
            className="mx-6 rounded-lg min-h-5 min-w-11"
            onClick={() => {
              setSelections([]);
              rendition?.annotations.remove(
                selections[0]?.cfiRange,
                "highlight"
              );
            }}
          >
            <img src={close} class="size-11" alt="PagePallete Logo" />
          </button>
        </div>
      )}
      <div style={{ height: "80vh" }} className="m-6">
        <ReactReader
          url={epubs[bookno]} // "https://react-reader.metabits.no/files/alice.epub"
          location={location}
          locationChanged={(epubcfi) => setLocation(epubcfi)}
          epubOptions={{
            allowPopups: true, // Adds `allow-popups` to sandbox-attribute
            allowScriptedContent: true, // Adds `allow-scripts` to sandbox-attribute
          }}
          readerStyles={theme === "dark" ? darkReaderTheme : lightReaderTheme}
          getRendition={(_rendition) => {
            updateTheme(_rendition, theme);
            setRendition(_rendition);
          }}
        />
      </div>
      <div className="m-6 flex flex-wrap justify-around pb-16">
        {/* Model Selection Dropdown - Improved Styling */}
        <div className="relative">
          <button
            id="dropdownDefaultButton"
            className="text-white px-6 m-2 py-3 bg-teal-700 hover:bg-teal-800 rounded-lg font-medium text-sm text-center inline-flex items-center border border-teal-600"
            type="button"
            onClick={() => {
              ToggleDropDown(!dropdown);
              ToggleDropDown2(false);
            }}
          >
            Model {models[modelno].split("/")[1]}{" "}
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <div
            className={`z-10 absolute mt-1 ${
              dropdown || "hidden"
            } bg-teal-900 rounded-lg shadow-lg w-60 border border-teal-800`}
          >
            <ul
              className="py-1 text-sm text-white"
              aria-labelledby="dropdownDefaultButton"
            >
              {models.map((item, index) => {
                return (
                  <li key={index}>
                    <button
                      onClick={() => {
                        console.log(index);
                        setmodelno(index);
                        ToggleDropDown((dropdown) => !dropdown);
                      }}
                      className={`block w-full text-left px-4 py-3 hover:bg-teal-800 ${
                        modelno === index ? "bg-teal-800" : ""
                      }`}
                    >
                      {item.split("/")[1]}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <button
          className="px-6 m-2 py-3 bg-yellow-600 dark:bg-teal-700 hover:bg-slate-800 hover:dark:bg-teal-800 rounded text-white flex items-center justify-center"
          onClick={() => setSend((send) => !send)}
          disabled={sendDisabled}
        >
          {sendDisabled ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-3"></div>
              Sending...
            </>
          ) : (
            "Send"
          )}
        </button>
        {/* <button className="px-6 m-2 py-3 bg-yellow-600 dark:bg-teal-700 hover:bg-slate-800 hover:dark:bg-teal-800 rounded text-white">
          choose epub
        </button> */}
        <div className="relative max-w-96">
          <button
            id="dropdownDefaultButton"
            className="text-white px-6 m-2 py-3 bg-teal-700 hover:bg-teal-800 rounded-lg font-medium text-sm text-center inline-flex items-center border border-teal-600"
            type="button"
            onClick={() => {
              ToggleDropDown2(!dropdown2);
              ToggleDropDown(false);
            }}
          >
            Book {epubs[bookno].replace("/static/media/", "").split(".")[0]}{" "}
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <div
            className={`z-10 absolute mt-1 ${
              dropdown2 || "hidden"
            } bg-teal-900 rounded-lg shadow-lg w-60 border border-teal-800`}
          >
            <ul
              className="py-1 text-sm text-white"
              aria-labelledby="dropdownDefaultButton"
            >
              {epubs.map((item, index) => {
                return (
                  <li key={index}>
                    <button
                      onClick={() => {
                        console.log(index);
                        setbookno(index);
                        ToggleDropDown2((dropdown2) => !dropdown2);
                      }}
                      className={`block w-full text-left px-4 py-3 hover:bg-teal-800 ${
                        bookno === index ? "bg-teal-800" : ""
                      }`}
                    >
                      {item.replace("/static/media/", "").split(".")[0]}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-9 px-6">
        {image.length !== 0 && (
          <button
            className="px-6 m-2 py-3 bg-yellow-600 dark:bg-teal-700 hover:bg-slate-800 hover:dark:bg-teal-800 rounded text-white flex items-center justify-center"
            onClick={deleteAllImages}
          >
            Clear all
          </button>
        )}
      </div>
      <div className="flex flex-wrap p-6 m-6">
        {image
          .slice(0)
          .reverse()
          .map(({ url, text }, index) => {
            return (
              <div
                key={index}
                class="max-w-sm m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative"
              >
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    src={url}
                    alt="Wait for 5 min before sending another request or change api or contact Gaurav"
                  />
                </a>
                <button
                  className="absolute text-red-600 text-3xl right-6 top-3"
                  onClick={() => deleteImage(url)}
                >
                  <img src={close} height="24px" width="24px" />
                </button>
                <div class="p-5 max-h-48 overflow-y-auto ">
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {text}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

const lightReaderTheme = {
  ...ReactReaderStyle,
  readerArea: {
    ...ReactReaderStyle.readerArea,
    transition: undefined,
  },
};

const darkReaderTheme = {
  ...ReactReaderStyle,
  arrow: {
    ...ReactReaderStyle.arrow,
    color: "white",
  },
  arrowHover: {
    ...ReactReaderStyle.arrowHover,
    color: "#ccc",
  },
  readerArea: {
    ...ReactReaderStyle.readerArea,
    backgroundColor: "#000",
    transition: undefined,
  },
  titleArea: {
    ...ReactReaderStyle.titleArea,
    color: "#ccc",
  },
  tocArea: {
    ...ReactReaderStyle.tocArea,
    background: "#111",
  },
  tocButtonExpanded: {
    ...ReactReaderStyle.tocButtonExpanded,
    background: "#222",
  },
  tocButtonBar: {
    ...ReactReaderStyle.tocButtonBar,
    background: "#fff",
  },
  tocButton: {
    ...ReactReaderStyle.tocButton,
    color: "white",
  },
};

export default Home;
