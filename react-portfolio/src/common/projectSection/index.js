import React, { Component } from "react";
import {
  ProjectWrapper,
  ProjectHead,
  ProjectHeadText,
  ProjectHeadWrapper,
  ProjectContent,
  ProjectItems,
  ProjectImg,
  ImgCover,
  ProjectTitle,
  ProjectIntro,
  ProjectSkill,
  ProjectButton,
  Redline,
  ExternalButton,
  ShowMore
} from "./style";
import china from "../../statics/china.png";
import tspace from "../../statics/tspace.png";
import weather from "../../statics/weather.png";
import currentportoflio from "../../statics/currentportfolio.png";
import merryme from "../../statics/merryme.png";
import boomtown from "../../statics/boomtown.png";
import mash from "../../statics/mash.png";
import R10 from "../../statics/R10.png";
import Fade from "react-reveal/Fade";
import youtube from "../../statics/youtube.png";
// import {Link} from 'react-router-dom';

class ProjectSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: [
        mash,
        boomtown,
        R10,
        merryme,
        tspace,
        currentportoflio,
        youtube,
        china,
        weather
      ],
      isExternal: [true, true, true, false, false, false, false, false],
      available: [false, false, false, true, true, true, true, true, true],
      isHover: [false, false, false, false, false, false, false, false],
      projectTitle: [
        "Mash",
        "BoomTown",
        "R10",
        "MerryMe Wedding",
        "Virtual Business Project",
        "Current portfolio",
        "React Youtube API",
        "Country Project",
        "Weather forecast"
      ],
      projectIntro: [
        "This is a full stack group project about connecting local musicians",
        "Boomtown is a Full-Stack application to support a local sharing System",
        "R10 is an app built for ios and android using React Native",
        "This is a real Client Wordpress Project about Wedding services",
        "T-space is a fictional Business website. ",
        "This is my current portfolio page which includes all my projects that I have done so far.",
        "This is a single page webiste using Reactjs to fetch the API from youtube .",
        "China is a single page website, responsive website for introducing China. ",
        "The weather forecast is a single Angular page"
      ],
      ProjectSkill: [
        "ReactJS | MeteorJs | Material-UI | MongoDB",
        "ReactJS | Redux | NodeJs | Express | Postgres | GraphQL | Material-UI",
        "React-Native | GraphQL | AsyncStorage",
        "HTML | SASS | Javascript | Wordpress | XD | Photoshop | Responsive",
        "HTML | SASS | Javascript | Jquery | PHP | Mysql | Photoshop | XD | Responsive",
        "ReactJS | Styled-components | Photoshop | React-Router 4 | Respnsive",
        "ReactJS | CSS | Youtube Data API | Bootstrap",
        "HTML | SASS | Javascript | Jquery | Responsive",
        "Angular | Angular Router | Ajax | OpenWeatherMap API | CSS3 | Responsive"
      ],
      url: [
        "https://github.com/frank920120/Mash",
        "https://github.com/frank920120/Boomtown",
        "https://github.com/frank920120/R10-ReactNative",
        "/merryme",
        "/tspacedetail",
        "/myportfoliodetail",
        "/youtubedetail",
        "/countrydetail",
        "/weatherdetail"
      ],
      limit: 6,
      maxiumLimit: false
    };

    this.ShowHandle = this.ShowHandle.bind(this);
    this.LessHandle = this.LessHandle.bind(this);
  }
  ShowHandle() {
    this.setState(
      prevState => {
        return { limit: prevState.limit + 2 };
      },
      () => {
        if (this.state.limit >= 9) {
          this.setState({
            maxiumLimit: true
          });
        }
      }
    );
  }
  LessHandle() {
    this.setState(
      prevState => {
        return { limit: prevState.limit - 2 };
      },
      () => {
        window.scrollTo(0, window.scrollY - 600);
        if (this.state.limit <= 2) {
          this.setState({
            limit: 2,
            maxiumLimit: false
          });
        }
      }
    );
  }
  handleHover(i) {
    const items = [...this.state.isHover];
    items[i] = true;
    this.setState({
      isHover: items
    });
  }

  handleLeave(i) {
    const items = [...this.state.isHover];
    items[i] = false;

    this.setState({
      isHover: items
    });
  }
  render() {
    return (
      <ProjectWrapper id="project">
        <ProjectHeadWrapper>
          <ProjectHead>Projects</ProjectHead>
          <ProjectHeadText>
            Case studies of previous Web devloperment work.{" "}
          </ProjectHeadText>
        </ProjectHeadWrapper>
        <ProjectContent>
          {this.state.imgUrl.slice(0, this.state.limit).map((item, index) => {
            return (
              <Fade key={index} left>
                <ProjectItems
                  onMouseOver={this.handleHover.bind(this, index)}
                  key={index}
                >
                  <ProjectImg src={item} />
                  <ImgCover
                    onMouseOut={this.handleLeave.bind(this, index)}
                    className={this.state.isHover[index] ? "cover" : ""}
                  >
                    <ProjectTitle>
                      {this.state.projectTitle[index]}
                    </ProjectTitle>
                    <ProjectIntro>
                      {this.state.projectIntro[index]}
                    </ProjectIntro>
                    <ProjectSkill>
                      {this.state.ProjectSkill[index]}
                    </ProjectSkill>
                    {this.state.isExternal[index] ? (
                      <ExternalButton
                        href={this.state.url[index]}
                        className="External"
                      >
                        {this.state.available[index]
                          ? "View Detail"
                          : "View GitHub"}
                      </ExternalButton>
                    ) : (
                      <ProjectButton to={this.state.url[index]}>
                        {this.state.available[index]
                          ? "View Detail"
                          : "View GitHub"}
                      </ProjectButton>
                    )}
                  </ImgCover>
                </ProjectItems>
              </Fade>
            );
          })}
        </ProjectContent>
        <ShowMore
          onClick={this.state.maxiumLimit ? this.LessHandle : this.ShowHandle}
        >
          {this.state.maxiumLimit ? "ShowLess" : "ShowMore"}
        </ShowMore>
        <Redline />
      </ProjectWrapper>
    );
  }
}
export default ProjectSection;
