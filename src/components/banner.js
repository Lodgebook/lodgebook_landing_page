import React from "react"
import styled from "styled-components"
import PoolWater from "../images/pool-water.jpg"
import HandPointing from "../images/hand-pointing.svg"
import colors from "../colors"

const BannerText = styled.p`
  cursor: pointer;
  font-size: 1.1rem;
  padding: 0rem 2rem;
  @media only screen and (max-width: 480px) {
    font-size: 1.5rem;
    line-height: 1.5;
  }
`

const BannerContainer = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: black;
  width: 100%;
  padding-bottom: 1.45rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7.5rem;
  background-image: url(${PoolWater});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  padding: 2rem 14rem;
  @media only screen and (max-width: 600px) {
    padding: 2rem 8rem;
  }
  @media only screen and (max-width: 480px) {
    height: 17rem;
    padding: 2rem;
  }
`

const BannerTextWithColor = styled.span`
  color: ${colors.LODGEBOOK_PRIMARY_LIGHT};
`

const BannerImage = styled.img`
  width: 3rem;
  transform: ${props => props.transform};
`

const Banner = () => (
  <BannerContainer href="https://www.wyndhamhotels.com/">
    <BannerImage src={HandPointing} />
    <BannerText>
      We have been selected by
      {<BannerTextWithColor> Wyndham Hotel Group </BannerTextWithColor>} to
      integrate with Sabre Property Hub. This will allow Lodgebook users to view
      and update room statuses from a mobile device.
    </BannerText>
    <BannerImage transform="scaleX(-1)" src={HandPointing} />
  </BannerContainer>
)

export default Banner
