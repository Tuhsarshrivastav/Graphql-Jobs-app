import Head from "next/head";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Job from "../components/Jobs/Job";
export default function Home({ JobsInfo }) {
  if (!JobsInfo) {
    return <> Project not found </>;
  }
  return (
    <>
      <Navbar />
      <Hero />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-200">
            {JobsInfo.map((item, index) => (
              <div key={index}>
                <Job item={item} id={item.key} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query Response {
        jobs {
          id
          title
          company {
            name
          }
          cities {
            name
          }
          remotes {
            name
          }
          tags {
            name
          }
        }
      }
    `,
  });

  return {
    props: {
      JobsInfo: data.jobs,
    },
  };
}
