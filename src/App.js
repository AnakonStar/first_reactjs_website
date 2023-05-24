import './App.css';
import Link_Item from './components/Link_Item';

function App() {
  const facebookLink = ("https://www.youtube.com/watch?v=q_8lI83t9Yk");
  const youtubeLink = "https://www.youtube.com/watch?v=q_8lI83t9Yk";
  const twitterLink = "https://www.youtube.com/watch?v=q_8lI83t9Yk";
  const instagramLink = "https://www.youtube.com/watch?v=q_8lI83t9Yk";
  
  return (
    <div class="app">
      <main>
        <h1>LibsFarma</h1>
        <p>@libsfarm</p>
      </main>
      <section class="links">
        <ul>
          <Link_Item title="Facebook" link={facebookLink} img="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png"/>
          <Link_Item title="Youtube" link={youtubeLink} img="https://imagepng.org/wp-content/uploads/2017/09/youtube-play-icone-1.png"/>
          <Link_Item title="Twitter" link={twitterLink} img="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-2-1.png"/>
          <Link_Item title="Instagram" link={instagramLink} img="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-social-platform-icon-png-image_6315976.png"/>
        </ul>
      </section>
      <footer>

      </footer>
    </div>
  );
}

export default App;
