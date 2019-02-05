import * as React from "react";
import { Painting } from "./model";
import * as moment from "moment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';

interface AddProps {

}


export class PaintingAdd extends React.Component<AddProps, Painting> {
    constructor(props: AddProps) {
        super(props);

        this.state = {
            id: '',
            name: '',
            artist: '',
            url: '',
            techniques: [],
            dateModified: moment().date.toString(),
            dateCreated: moment().date.toString()
        };

    }

    handleSubmit = () => {

    }

    handleInputChange = () => {

    }

    handleTechniqueNameChange = (index: number, event: any) => {
        const newtechniques: string[] = this.state.techniques.map((technique: string, techniqueIndex: number) => {
            if (index !== techniqueIndex) return technique;
            return event.target.value;
        });
        
        this.setState({ 
            techniques: newtechniques
        });
        //console.log(this.state.techniques, 'techniques');
    }
    
    handleTechniqueRemove = (index: number) => {
        const techniques: string[] = this.state.techniques.filter((technique: string, techniqueIndex: number) => index !== techniqueIndex);
        
        this.setState({
            techniques: techniques
        });
        //console.log(this.state.techniques, 'techniques');
    }

    handleTechniqueAdd = () => {
        const techniques: string[] = this.state.techniques.concat(['']);
        
        this.setState({
            techniques: techniques
        });
        //console.log(this.state.techniques, 'techniques');

      }; 

    componentDidMount() {
        
    }

    render() {

        const { name, artist, url, techniques } = this.state;

        return(
            <>
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="name">Painting Name:</label>
                            <input className="form-control" type="text" value={name} onChange={this.handleInputChange} name="name" placeholder="Name of painting" required />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="artist">Artist Name:</label>
                            <input className="form-control" type="text" value={artist} onChange={this.handleInputChange} name="artist" placeholder="Name of artist" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="url">Image URL:</label>
                        <input className="form-control" type="text" value={url} onChange={this.handleInputChange} name="url" placeholder="Painting Image URL" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress2">Painting Attributes:</label>
                        {
                            techniques && techniques.map((name, index) => (
                                <div className="input-group mb-2">
                                    <input
                                        type="text"
                                        placeholder={`Atrribute #${index + 1}`}
                                        aria-label={`Atrribute #${index + 1}`}
                                        value={name}
                                        onChange={(e) => this.handleTechniqueNameChange(index, e)}
                                    />
                                    <div className="input-group-append">
                                        <button
                                            type="button"
                                            onClick={(e) => this.handleTechniqueRemove(index)}
                                            className="btn btn-outline-secondary btn-sm"
                                        >
                                        <FontAwesomeIcon icon={faTimes} /> Remove
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                        <button
                            type="button"
                            onClick={this.handleTechniqueAdd}
                            className="btn btn-outline-primary btn-sm"
                            >
                            <FontAwesomeIcon icon={faPlus} /> Add
                        </button>
                    </div>
                    <button type="submit" className="btn btn-primary">Create Painting</button>
                </form>
            </>
        );
    }

}