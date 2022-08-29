import React from 'react';

import ReactToPrint from 'react-to-print';
import PrivacyPolicy_draft from '../../images/PrivacyPolicy.docx'
import FileViewer from 'react-file-viewer';
const type = 'docx'

export class ComponentToPrint extends React.PureComponent {
  render() {
    return (
     <div>
         <FileViewer
                  fileType={type}
                  filePath={PrivacyPolicy_draft}
                       />
     </div>
    );
  }
}




class PrivacyPolicy extends React.PureComponent {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => {
            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
            // to the root node of the returned component as it will be overwritten.
            return <div className='print-btn-container' style={{ margin : 3
            } }><button className="adimera-btn">Print this out!</button></div>;
          }}
          content={() => this.componentRef}
        />
        <ComponentToPrint ref={el => (this.componentRef = el)} />

        <a href={PrivacyPolicy_draft} target="_blank" rel="noopener noreferrer" download>
        <div className='download-btn-container'>
        <button className="adimera-btn" >
          
              Download File
        </button>
        </div>
        
</a>
      </div>
    );
  }
}

    



export default PrivacyPolicy;
