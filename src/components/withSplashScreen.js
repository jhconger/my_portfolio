import React, {Component} from 'react';
import './withSplashScreen.css';
import ReactPlayer from "react-player";
import myVideo from "../public/Videos/HartLogoVid.mp4";

function LoadingMessage() {

    return (
        <div className="App">
            <video width="750" height="500" autoPlay loop muted>
                <source src={myVideo} type="video/mp4"/>
            </video>
        </div>
            // <ReactPlayer url={myVideo} autoPlay loop muted/>
    );
}

function withSplashScreen(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                playing: true,
                loading: true,
                muted: true,
            };
        }

        async componentDidMount() {
            try {
                setTimeout(() => {
                    this.setState({
                        loading: false,
                    });
                }, 20000)
            } catch (err) {
                console.log(err);
                this.setState({
                    loading: false,
                });
            }
        }

        render() {
            // while checking user session, show "loading" message
            if (this.state.loading) return LoadingMessage();

            // otherwise, show the desired route
            return <WrappedComponent {...this.props} />;
        }
    };
}

export default withSplashScreen;