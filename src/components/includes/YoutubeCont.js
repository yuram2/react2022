import React from 'react';
// import YoutubeSearch from "../includes/YoutubeSearch";
import YoutubeList from "../includes/YoutubeList";
function YoutubeCont(props) {
  return (
    <section className="youtube__cont">
      <div className="container">
        <div className="youtube__inner">
          <YoutubeList lists={props.lists}  />
        </div>
      </div>
    </section>
  )
}
export default YoutubeCont;