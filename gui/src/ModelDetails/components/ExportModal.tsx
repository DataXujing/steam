/**
 * Created by justin on 7/21/16.
 */
import * as React from 'react';
import DefaultModal from '../../App/components/DefaultModal';
import '../styles/exportmodal.scss';

interface Props {
  name: string,
  open: boolean,
  onDownload: Function,
  onCancel: Function,
  modelId: number,
  projectId: number
}

export default class ExportModal extends React.Component<Props, any> {
  constructor() {
    super();
    this.state = {
      artifact: 'java-class'
    };
  }

  selectArtifact(event) {
    this.setState({
      artifact: event.target.value
    });
  }

  render(): React.ReactElement<DefaultModal> {
    return (
      <DefaultModal className="export-modal" open={this.props.open}>
        <header>
          EXPORT {this.props.name}
        </header>
        <section>
          <div>
            <span>FILE FORMAT</span>
          </div>
          <div>
            <form onSubmit={this.props.onDownload.bind(this)} onChange={this.selectArtifact.bind(this)}>
              <fieldset>
                <input type="radio" value="java-class" name="downloadOption" checked={this.state.artifact === 'java-class'} onChange={this.selectArtifact.bind(this)}/><label><span className="file-extension">.java</span><span>a POJO generated by H2O</span></label>
              </fieldset>
              <fieldset>
                <input type="radio" value="java-jar" name="downloadOption" checked={this.state.artifact === 'java-jar'} onChange={this.selectArtifact.bind(this)}/><label><span
                className="file-extension">.jar</span><span>a library file, can be used by java apps</span></label>
              </fieldset>
              <fieldset>
                <input type="radio" value="java-war" name="downloadOption" checked={this.state.artifact === 'java-war'} onChange={this.selectArtifact.bind(this)}/><label><span
                className="file-extension">.war</span><span>a java-based web app, can be used by Jetty / Tomcat</span></label>
              </fieldset>
              <div className="actions">
                <div>Steam defaults to your browser default Downloads Folders</div>
                <a
                  href={`/download?type=model&artifact=${this.state.artifact}&model-id=${this.props.modelId}&project-id=${this.props.projectId}`}
                  className="default" target="_blank" rel="noopener">Download</a>
                <button type="button" className="default invert" onClick={this.props.onCancel}>Cancel</button>
              </div>
            </form>
          </div>
        </section>
      </DefaultModal>
    );
  }
}