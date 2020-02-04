import React from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Sublist from "./Sublist"

const editor = new EditorJS({
  /**
   * Id of Element that should contain Editor instance
   */
  holderId: "codex-editor",
  tools: {
    header: Header,
    list: {
      class: List,
      inlineToolbar: true
    },
    sublist: {
      class: Sublist,
      inlineToolbar: true
    },
  },
  onReady: () => {
    console.log("Editor.js is ready to work!");
  },
  onChange: () => {
    console.log("Now I know that Editor's content changed!");
  },
  data: {
    blocks: [
      {
        type: "header",
        data: {
          text: "My JS Editor",
          level: 1
        }
      },
      {
        type: "paragraph",
        data: {
          text: "This is a list",
        }
      },
      {
        type: "list",
        data: {
          style: "unordered",
          items: [
              'list item 1!',
              'list item 2',
              'list item 3',
          ]
        }
      }
    ]
  }
});

const saveData = () => {
  editor
    .save()
    .then(outputData => {
      console.log("Article data: ", JSON.stringify(outputData));
    })
    .catch(error => {
      console.log("Saving failed: ", error);
    });
};

export default () => {
  return (
    <div style={{ backgroundColor: "#F6F8FA" }}>
      <div id="codex-editor"></div>
      <button onClick={saveData}>Save</button>
    </div>
  );
};
