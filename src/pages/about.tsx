import * as React from "react";
import { NextPage } from "next";

import { Page } from "../components/site";
import { PageHeading } from "../components/page";
import { VSpace, VSpaceBetween } from "../components/layout";
import { ExternalLink, TextHeading } from "../components/content";
import { Link } from "../components/core";

export const IndexPage: NextPage = () => {
  return (
    <Page title={"About the Conference"}>
      <PageHeading>About the Conference</PageHeading>
      <VSpace />
      <VSpaceBetween space={"2rem"}>
        <div>
          <TextHeading level={"h3"}>What is JuliaCon?</TextHeading>
          <VSpaceBetween space={"0.5rem"} spaceAbove>
            <p>
              JuliaCon is the conference dedicated to the Julia programming
              language. The conference is fully virtual this year and talks run
              from July 27th through July 29th, 2022 with workshops running the
              previous week.
            </p>
            <p>
              This year, JuMP-dev, the annual developer workshop for the JuMP
              mathematical optimization ecosystem is co-located with JuliaCon.
            </p>
          </VSpaceBetween>
        </div>
        <div>
          <TextHeading level={"h3"}>How do I register?</TextHeading>
          <VSpace height={"0.5rem"} />
          <p>
            All of the conference materials are available here for free, but
            registration is required (don't worry, it's free!). You can register
            on the{" "}
            <ExternalLink href={"https://juliacon.org/2022/tickets/"}>
              JuliaCon 2022 site
            </ExternalLink>
            .
          </p>
        </div>
        <div>
          <TextHeading level={"h3"}>How do I attend?</TextHeading>
          <VSpaceBetween space={"0.5rem"} spaceAbove>
            <p>
              You're in the right place! Check out the{" "}
              <Link href={"/agenda"}>conference agenda</Link> to discover
              interesting talks and use the <Link href={"/"}>live app</Link> to
              watch talks in real time.
            </p>
            <p>
              Join the{" "}
              <Link href={"/discord/join"}>conference Discord server</Link> to
              engage with other attendees, ask questions to presenters, network,
              and get familiar with the vibrant and welcoming Julia community.
            </p>
          </VSpaceBetween>
        </div>
        <div>
          <VSpaceBetween space={"0.5rem"}>
            <TextHeading level={"h3"}>
              How do I get my conference swag?
            </TextHeading>
            <p>
              T-shirts and mugs are available on the{" "}
              <ExternalLink
                href={"https://www.bonfire.com/store/the-julia-language/"}
              >
                Julia Bonfire store
              </ExternalLink>
              . You can also get Julia stickers on our{" "}
              <ExternalLink
                href={
                  "https://www.redbubble.com/people/JuliaLanguage/shop?asc=u"
                }
              >
                RedBubble
              </ExternalLink>
              &nbsp;shop!
            </p>
          </VSpaceBetween>
        </div>
      </VSpaceBetween>
    </Page>
  );
};

export default IndexPage;
