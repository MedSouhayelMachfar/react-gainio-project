import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Tournaments from "./pages/Tournaments";
import TournamentDetails from "./pages/TournamentDetails";
import Games from "./pages/Games";
import About from "./pages/About";
import FAQ from "./pages/FAQ";

import CustomHelmet from "./components/Shared/CustomHelmet";
import ContextLanguageWrapper from "./context/ContextLanguageWrapper";

function App() {
    const metaOG = [
        { property: "og:url", content: "http://www.ganio.com" },
        { property: "og:type", content: "ganio" },
        {
            property: "og:title",
            content: "Welcome to the best game for life change ever !"
        },
        { property: "og:description", content: "Play win and be rich!" },
        {
            property: "og:image",
            content:
                "https://images.unsplash.com/photo-1618193139062-2c5bf4f935b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        }
    ];
    //const metaTwitter = [];
    return (
        <ContextLanguageWrapper>
            <Router>
                <Switch>
                    <Route path="/games">
                        <CustomHelmet
                            title="games"
                            description="This is the best website for playing and earning money at the same time"
                            metaOG={metaOG}
                        />
                        <Games />
                    </Route>
                    <Route path="/tournaments/:id">
                        <CustomHelmet
                            title="tournaments"
                            description="This is the best website for playing and earning money at the same time"
                            metaOG={metaOG}
                        />
                        <TournamentDetails />
                    </Route>
                    <Route path="/tournaments">
                        <CustomHelmet
                            title="tournaments"
                            description="This is the best website for playing and earning money at the same time"
                            metaOG={metaOG}
                        />
                        <Tournaments />
                    </Route>
                    <Route path="/about">
                        <CustomHelmet
                            title="about"
                            description="This is the best website for playing and earning money at the same time"
                            metaOG={metaOG}
                        />
                        <About />
                    </Route>
                    <Route path="/faq">
                        <CustomHelmet
                            title="faq"
                            description="This is the best website for playing and earning money at the same time"
                            metaOG={metaOG}
                        />
                        <FAQ />
                    </Route>
                    <Route exact={true} path="/">
                        <CustomHelmet
                            title="faq"
                            description="This is the best website for playing and earning money at the same time"
                            metaOG={metaOG}
                        />
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </ContextLanguageWrapper>
    );
}

export default App;
