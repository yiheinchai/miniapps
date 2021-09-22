import MusicPlayer from "./Components/MusicPlayer";
import "./App.css";
import { Counter } from "./Components/Counter";
import Nav from "./Components/Nav";
import { AppsContainer } from "./Components/AppsContainer";
import { LayoutContext } from "./store/layout-context";
import { useContext } from "react";
import ProfileGenerator from "./Components/ProfileGenerator";
import { ProfileContextProvider } from "./store/profile-context";

const App = () => {
  const LayoutCtx = useContext(LayoutContext);
  return (
    <>
      <Nav />
      <AppsContainer>
        {Array.from({ length: LayoutCtx.layoutState.youtubeCount }, (_, i) => (
          <MusicPlayer key={i} />
        ))}
        {Array.from({ length: LayoutCtx.layoutState.counterCount }, (_, i) => (
          <Counter key={i} />
        ))}
        {Array.from({ length: LayoutCtx.layoutState.profileCount }, (_, i) => (
          <ProfileContextProvider>
            <ProfileGenerator key={i} />
          </ProfileContextProvider>
        ))}
      </AppsContainer>
    </>
  );
};

export default App;
