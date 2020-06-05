import React from "react";
import Gitalk from "gitalk";
import md5 from "blueimp-md5";

import "../style/gitalk.css";

class GitTalk extends React.Component {
  componentDidMount() {
    const { id, secret, repo, owner } = this.props.options;
    const title = this.props.title;
    const gitalk = new Gitalk({
      clientID: id,
      clientSecret: secret,
      repo: repo,
      owner: owner,
      admin: [owner],
      title: title || "Kevin",
      id: md5(window.location.pathname),
      distractionFreeMode: false, // Facebook-like distraction free modex
    });

    gitalk.render("gitalk-container");
  }

  render() {
    return <div id="gitalk-container" />;
  }
}
export default GitTalk;
