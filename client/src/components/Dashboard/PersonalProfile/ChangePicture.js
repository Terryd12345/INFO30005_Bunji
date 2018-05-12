import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { BarLoader } from "react-spinners";
import Dropzone from "react-dropzone";
import request from "superagent";
import axios from "axios";

const CLOUDINARY_UPLOAD_PRESET = "n4npta6e";
const CLOUDINARY_UPLOAD_URL = "https://api.cloudinary.com/v1_1/dfocutu6i/upload";

class ChangePicture extends Component {
    constructor(props) {
        super(props);

        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            loading: false,
            show: false,
            file: null
        };
    }

    /* ============================================================================================================= */

    handleClose() {
        this.setState({
            show: false
        });
    }

    handleShow() {
        this.setState({
            show: true
        });
    }

    handleDrop(files) {
        this.setState({
            file: files[0]
        });
    }

    handleSubmit(e) {
        const self = this;

        e.preventDefault();
        if (self.state.file === null) {
            alert("Please upload an image.");
        } else {
            this.setState({
                loading: true
            });

            request.post(CLOUDINARY_UPLOAD_URL)
                .field("upload_preset", CLOUDINARY_UPLOAD_PRESET)
                .field("file", self.state.file)
                .end((err, res) => {
                    if (err) {
                        console.error(err);
                    }

                    if (res.body.secure_url !== "") {
                        axios.post("/api/editUserImage", {
                            imagePath: res.body.secure_url
                        })
                            .then(function () {
                                self.setState({
                                    loading: false
                                });
                                self.props.reload();
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    }
                });
        }
    }

    /* ============================================================================================================= */

    render() {
        return (
            <Modal show={this.state.show} onHide={this.handleClose} animation={true}>
                <Modal.Header id="popups-header">
                    <Modal.Title className="modal-title-popups">
                        EDIT PROFILE
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form onSubmit={this.handleSubmit}>
                        <div id="dropzone">
                            <Dropzone onDrop={this.handleDrop}
                                accept="image/*"
                                multiple={false}>
                                <div className="centered">
                                    <h6>Drop an image or click here to select a file to upload.</h6>
                                </div>
                            </Dropzone>
                        </div>

                        {
                            (this.state.file === null) ? (null) : (
                                <div id="preview">
                                    <img src={this.state.file.preview} alt="Preview" />
                                </div>
                            )
                        }

                        <div id="modal-button">
                            <button type="submit" className="button" id="popups-btn">Save</button>
                        </div>

                        {
                            this.state.loading ? (
                                <div className="section-loading">
                                    <BarLoader loading={this.state.loading} />
                                </div>
                            ) : (null)
                        }
                    </form>
                </Modal.Body>

                <Modal.Footer id="popups-footer">
                    <Button onClick={this.handleClose} id="close-btn">&times;</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ChangePicture;
