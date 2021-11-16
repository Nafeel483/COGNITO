import React, {useState, useRef} from 'react';
import JoditEditor from "jodit-react";
import 'react-pro-sidebar/dist/css/styles.css';
import './my.css'


const Example = ({}) => {
	const editor = useRef(null)
	const [content, setContent] = useState('hellow rodl')
	const [data, setData] = useState('hellow rodl')
  let myData = ''
	
	const config = {
		readonly: false, // all options from https://xdsoft.net/jodit/doc/
    fullSize: false,
    iframeTitle: 'myEditor',
    minHeight: '400px'
  }

  const handleChange = () => {
    setContent(content)
  }

	return (
    <div>
      {/* a SAVE BUTTON IS NEEDED HERE TO SAVE THE CONTENT WHICH IS MYdATA VARIABLW */}
      <JoditEditor
        ref={editor}
        config={config}
        tabIndex={1} // tabIndex of textarea
        onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={newContent => {
          myData = newContent
        }}
      />
    </div>
        );
}

export default Example