import styled from "styled-components";
import "../../style";
import { Link } from "react-router-dom";

export const ProjectWrapper = styled.div`
  width: 100%;
  height: auto;
  background: #1f1f1f;
  font-family: "Poppins", "Helvetica", sans-serif;
  @media (max-width: 500px) {
    padding-top: 50px;
  }
`;
export const ProjectHeadWrapper = styled.div`
  width: 900px;
  position: relative;
  height: 160px;
  @media (max-width: 1024px) {
    width: 800px;
  }
  @media (max-width: 820px) {
    width: 600px;
  }
  @media (max-width: 600px) {
    width: 500px;
  }
  @media (max-width: 500px) {
    width: 430px;
    height: 100px;
  }
`;
export const ProjectHead = styled.h1`
  position: absolute;
  top: 0;
  left: 20px;
  font-size: 160px;
  color: #fff;
  opacity: 0.1;
  font-weight: 900;
  line-height: 100%;
  z-index: 0;
  width: calc(100% + 300px);
  text-transform: uppercase;
  text-decoration: none;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 140px;
  }

  @media (max-width: 820px) {
    font-size: 100px;
  }
  @media (max-width: 600px) {
    font-size: 80px;
  }
  @media (max-width: 500px) {
    font-size: 60px;
  }
`;
export const ProjectHeadText = styled.h2`
  position: absolute;
  z-index: 1;
  font-weight: 500;
  color: #fff;
  font-size: 24px;
  letter-spacing: 2.67px;
  line-height: 27px;
  text-decoration: none;
  right: 0;
  bottom: 10px;
  @media (max-width: 1024px) {
    font-size: 18px;
  }
  @media (max-width: 820px) {
    font-size: 15px;
    bottom: 60px;
  }
  @media (max-width: 600px) {
    font-size: 12px;
    bottom: 80px;
  }
  @media (max-width: 500px) {
    font-size: 10px;
    bottom: 30px;
  }
  @media (max-width: 450px) {
    display: none;
  }
`;

export const ProjectContent = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  margin: 0 auto;
  margin-top: 100px;
  padding-bottom: 100px;
  @media (max-width: 1150px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 820px) {
    margin-top: 50px;
  }
  @media (max-width: 600px) {
    margin-top: 40px;
  }
  @media (max-width: 500px) {
    margin-top: 20px;
    width: 100%;
    grid-gap: 0px;
  }
`;

export const ProjectItems = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  overflow: hidden;
  border-radius: 10px;
  position: relative;
  @media (max-width: 500px) {
    border-radius: 0;
  }
`;

export const ProjectImg = styled.img`
  display: block;
  width: 100%;
  cursor: pointer;
  object-fit: cover;
  height: 100%;
`;

export const ImgCover = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 1);
  z-index: 1;
  opacity: 0;
  transition: 0.5s linear;
  /* @media (max-width:500px){
    opacity:0.8;
} */

  &.cover {
    opacity: 1;
    /* @media (max-width:500px){
    opacity:0.8;
} */
  }
`;
export const ProjectTitle = styled.h1`
  color: white;
  z-index: 999;
  text-align: center;
  font-size: 2vw;
  border-bottom: 6px solid #ed6464;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 50px;
  margin-top: 20px;
  @media (max-width: 1150px) {
    font-size: 50px;
  }
  @media (max-width: 820px) {
    font-size: 30px;
  }
  @media (max-width: 600px) {
    font-size: 25px;
  }
  @media (max-width: 450px) {
    margin-top: 10px;
    margin-bottom: 20px;
    border-bottom: none;
  }
`;

export const ProjectIntro = styled.p`
  color: white;
  font-size: 1.3vw;
  width: 80%;
  margin: 0 auto;
  text-align: center;
  letter-spacing: 1px;
  line-height: 1.6;
  @media (max-width: 1150px) {
    font-size: 15px;
  }
  @media (max-width: 820px) {
    font-size: 20px;
  }
  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

export const ProjectSkill = styled.p`
  position: absolute;
  bottom: 10%;
  color: #ed6464;
  transform: translate(-50%, -50%);
  left: 50%;
  text-align: center;
  line-height: 25px;
  width: 80%;
  font-size: 1vw;
  @media (max-width: 1150px) {
    font-size: 15px;
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
export const ExternalButton = styled.a`
  color: white;
  background: #ed6464;
  padding: 7px;
  text-decoration: none;
  position: absolute;
  bottom: 2%;
  transform: translate(-50%, -50%);
  transition: 1s ease;
  left: 50%;
  cursor: pointer;
  border-radius: 5px;
  outline: none;
  @media (max-width: 450px) {
    font-size: 10px;
  }
  &:hover {
    opacity: 0.8;
    @media (max-width: 500px) {
      opacity: 1;
    }
  }
`;

export const ProjectButton = styled(Link)`
  color: white;
  background: #ed6464;
  padding: 7px;
  text-decoration: none;
  position: absolute;
  bottom: 2%;
  transform: translate(-50%, -50%);
  transition: 1s ease;
  left: 50%;
  cursor: pointer;
  border-radius: 5px;
  outline: none;
  @media (max-width: 450px) {
    font-size: 10px;
  }
  &:hover {
    opacity: 0.8;
    @media (max-width: 500px) {
      opacity: 1;
    }
  }
`;

export const Redline = styled.div`
  background: #ed6464;

  width: 250px;
  height: 7px;
  bottom: 0;
  margin-left: 10%;
`;

export const ShowMore = styled.a`
  background: #ed6464;
  color: #fff;
  padding: 10px;
  text-align: center;
  display: block;
  width: 150px;
  margin: 0 auto;
  cursor: pointer;
  margin-bottom: 100px;
  border-radius: 5px;
  border: 1px solid white;

  &:hover {
    opacity: 0.8;
  }
`;
